import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Time = bigint;
export type DocumentId = string;
export interface Document {
    id: DocumentId;
    blob: ExternalBlob;
    name: string;
    uploadedAt: Time;
}
export type AssignmentId = bigint;
export interface Assignment {
    id: AssignmentId;
    assignedAt: Time;
    assignedTo: string;
    documentId: DocumentId;
}
export interface backendInterface {
    assignDocument(documentId: DocumentId, assignedTo: string): Promise<Assignment>;
    getAllDocuments(): Promise<Array<Document>>;
    getAssignmentsForUser(userId: string): Promise<Array<Assignment>>;
    getDocument(id: DocumentId): Promise<Document>;
}
