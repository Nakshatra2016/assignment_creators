import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  public type DocumentId = Text;
  public type AssignmentId = Nat;

  public type Document = {
    id : DocumentId;
    blob : Storage.ExternalBlob;
    name : Text;
    uploadedAt : Time.Time;
  };

  module Document {
    public func compare(doc1 : Document, doc2 : Document) : Order.Order {
      Text.compare(doc1.id, doc2.id);
    };
  };

  public type Assignment = {
    id : AssignmentId;
    documentId : DocumentId;
    assignedTo : Text;
    assignedAt : Time.Time;
  };

  let documents = Map.empty<DocumentId, Document>();
  let assignments = Map.empty<AssignmentId, Assignment>();
  var nextAssignmentId = 0;

  public query ({ caller }) func getAllDocuments() : async [Document] {
    documents.values().toArray().sort();
  };

  public query ({ caller }) func getDocument(id : DocumentId) : async Document {
    switch (documents.get(id)) {
      case (?document) { document };
      case (null) { Runtime.trap("Document not found") };
    };
  };

  public shared ({ caller }) func assignDocument(documentId : DocumentId, assignedTo : Text) : async Assignment {
    switch (documents.get(documentId)) {
      case (null) { Runtime.trap("Document not found") };
      case (?_) {
        let assignment : Assignment = {
          id = nextAssignmentId;
          documentId;
          assignedTo;
          assignedAt = Time.now();
        };
        assignments.add(nextAssignmentId, assignment);
        nextAssignmentId += 1;
        assignment;
      };
    };
  };

  public query ({ caller }) func getAssignmentsForUser(userId : Text) : async [Assignment] {
    assignments.values().toArray().filter(func(assignment) { assignment.assignedTo == userId });
  };
};
