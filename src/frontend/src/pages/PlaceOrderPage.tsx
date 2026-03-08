import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ExternalBlob } from "@/backend";
import { Loader2, Upload, X, CheckCircle, Calendar, FileText, User, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiRazorpay } from "react-icons/si";

interface OrderFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  assignmentTopic: string;
  numberOfPages: string;
  deadline: string;
  specialInstructions: string;
  deliveryAddress: string;
  referenceFile: File | null;
}

export default function PlaceOrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    assignmentTopic: "",
    numberOfPages: "",
    deadline: "",
    specialInstructions: "",
    deliveryAddress: "",
    referenceFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, referenceFile: file }));
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, referenceFile: null }));
    const fileInput = document.getElementById("referenceFile") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!formData.phoneNumber.trim() || !/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      toast.error("Please enter a valid 10-digit Indian phone number");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please enter the subject");
      return false;
    }
    if (!formData.assignmentTopic.trim()) {
      toast.error("Please enter the assignment topic");
      return false;
    }
    if (!formData.numberOfPages || parseInt(formData.numberOfPages) < 1) {
      toast.error("Please enter a valid number of pages");
      return false;
    }
    if (!formData.deadline) {
      toast.error("Please select a deadline");
      return false;
    }
    const deadlineDate = new Date(formData.deadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (deadlineDate < today) {
      toast.error("Deadline must be today or in the future");
      return false;
    }
    if (!formData.deliveryAddress.trim()) {
      toast.error("Please enter your delivery address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      let referenceFileBlob: ExternalBlob | null = null;

      if (formData.referenceFile) {
        const fileBytes = new Uint8Array(await formData.referenceFile.arrayBuffer());
        referenceFileBlob = ExternalBlob.fromBytes(fileBytes).withUploadProgress(
          (percentage) => {
            setUploadProgress(percentage);
          }
        );
      }

      const orderData = {
        ...formData,
        referenceFile: referenceFileBlob,
        timestamp: new Date().toISOString(),
      };

      const existingOrders = JSON.parse(localStorage.getItem("writeright_orders") || "[]");
      existingOrders.push(orderData);
      localStorage.setItem("writeright_orders", JSON.stringify(existingOrders));

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast.success("Order submitted successfully! We'll contact you shortly.");

      setTimeout(() => {
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          subject: "",
          assignmentTopic: "",
          numberOfPages: "",
          deadline: "",
          specialInstructions: "",
          deliveryAddress: "",
          referenceFile: null,
        });
        setIsSuccess(false);
        setUploadProgress(0);
      }, 3000);
    } catch (error) {
      console.error("Order submission error:", error);
      toast.error("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-[calc(100vh-4rem)]">
        <section className="py-20 gradient-mesh-1 flex-1 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <Card className="max-w-2xl mx-auto border-2 border-primary shadow-large glow-primary backdrop-blur-sm bg-card/90">
              <CardHeader className="text-center pb-6">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-large animate-fade-in-scale">
                  <CheckCircle className="h-14 w-14 text-white" />
                </div>
                <CardTitle className="text-3xl font-display">Order Submitted Successfully!</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Thank you for choosing WriteRight
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  We've received your order and will contact you shortly via phone or email to confirm the details and provide payment information.
                </p>
                <p className="text-sm text-muted-foreground">
                  You'll receive tracking details once your assignment is dispatched.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button size="lg" variant="outline" className="border-2 magnetic-hover">
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    onClick={() => {
                      setIsSuccess(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="shadow-medium magnetic-hover"
                  >
                    Place Another Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Premium Hero */}
      <section className="py-16 md:py-20 gradient-mesh-1 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold fade-in-up">
              Place Your <span className="gradient-text">Order</span>
            </h1>
            <p className="text-lg text-muted-foreground fade-in-up stagger-1">
              Fill out the form below and we'll get started on your assignment right away
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Card with Premium Styling */}
              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    Personal Information
                  </CardTitle>
                  <CardDescription>Tell us who you are</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="h-11 border-2 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="pl-10 h-11 border-2 focus:border-primary/50 transition-colors"
                          maxLength={10}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 h-11 border-2 focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    Assignment Details
                  </CardTitle>
                  <CardDescription>Tell us about your assignment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g., Data Structures, Marketing Management"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignmentTopic">
                      Assignment Topic <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="assignmentTopic"
                      name="assignmentTopic"
                      placeholder="Describe your assignment topic in detail..."
                      value={formData.assignmentTopic}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="numberOfPages">
                        Number of Pages <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="numberOfPages"
                        name="numberOfPages"
                        type="number"
                        min="1"
                        placeholder="e.g., 10"
                        value={formData.numberOfPages}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">
                        Deadline <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="deadline"
                          name="deadline"
                          type="date"
                          value={formData.deadline}
                          onChange={handleInputChange}
                          className="pl-10"
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      placeholder="Any specific formatting, handwriting style, or additional requirements..."
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referenceFile">Upload Reference File (Optional)</Label>
                    <div className="space-y-2">
                      {formData.referenceFile ? (
                        <div className="flex items-center gap-3 p-3 border-2 border-primary/20 rounded-lg bg-primary/5">
                          <FileText className="h-8 w-8 text-primary shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{formData.referenceFile.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(formData.referenceFile.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={removeFile}
                            className="shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="referenceFile"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                PDF, DOC, DOCX, or images
                              </p>
                            </div>
                            <Input
                              id="referenceFile"
                              type="file"
                              className="hidden"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                          </label>
                        </div>
                      )}
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    Delivery Information
                  </CardTitle>
                  <CardDescription>Where should we deliver your assignment?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryAddress">
                      Complete Delivery Address <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      placeholder="House/Flat No., Street, Area, City, State, PIN Code"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg border">
                    <SiRazorpay className="h-8 w-8 text-primary" />
                    <div className="flex-1">
                      <p className="font-semibold">Payment accepted via UPI / Razorpay</p>
                      <p className="text-sm text-muted-foreground">
                        Secure payment integration coming soon
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    After submitting your order, we'll contact you with exact pricing and payment instructions based on your requirements.
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 text-lg h-14 font-semibold shadow-large magnetic-hover glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Order...
                    </>
                  ) : (
                    "Submit Order"
                  )}
                </Button>
                <Link to="/" className="flex-1">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg h-14 border-2 magnetic-hover shadow-soft hover:shadow-medium"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
