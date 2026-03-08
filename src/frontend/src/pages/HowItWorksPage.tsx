import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  PenTool,
  Package,
  CheckCircle,
  ChevronRight,
  Upload,
  Clock,
  Truck,
  Shield,
} from "lucide-react";

export default function HowItWorksPage() {
  const detailedSteps = [
    {
      number: "01",
      title: "Submit Topic & Instructions",
      description:
        "Start by filling out our simple online order form. Provide your assignment topic, subject, number of pages, and deadline. You can also upload reference files or documents to help us understand your requirements better. The more details you provide, the better we can serve you.",
      icon: FileText,
      details: [
        "Fill out the order form",
        "Upload reference materials (optional)",
        "Specify deadline and special requirements",
        "Provide delivery address",
      ],
    },
    {
      number: "02",
      title: "We Write Your Assignment by Hand",
      description:
        "Our experienced writers receive your assignment and begin working on it immediately. Every assignment is handwritten with neat, legible writing, proper formatting, margins, and spacing. All diagrams, charts, and illustrations are drawn accurately as per your subject requirements.",
      icon: PenTool,
      details: [
        "Assignment assigned to experienced writer",
        "Neat handwriting with proper formatting",
        "All diagrams and illustrations included",
        "Quality check before binding",
      ],
    },
    {
      number: "03",
      title: "We Bind & Courier It",
      description:
        "Once your assignment is complete and quality-checked, we professionally bind it to ensure a neat presentation. We then dispatch it via reliable courier service to your provided address. You'll receive tracking details so you can monitor the delivery status in real-time.",
      icon: Package,
      details: [
        "Professional binding of assignment",
        "Secure packaging for transit",
        "Dispatch via reliable courier",
        "Tracking details provided",
      ],
    },
    {
      number: "04",
      title: "Submit With Confidence",
      description:
        "Receive your beautifully handwritten and professionally bound assignment at your doorstep before your deadline. Review the work and submit it with complete confidence. Your assignment will look exactly like you wrote it yourself, with neat handwriting and proper presentation.",
      icon: CheckCircle,
      details: [
        "Delivered before deadline",
        "Professional presentation",
        "Looks like your own work",
        "Submit with confidence",
      ],
    },
  ];

  const additionalInfo = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Standard delivery in 5-7 days. Need it faster? Choose our urgent delivery option for 24-48 hour processing.",
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description:
        "Your privacy is paramount. All your personal information and assignment details are kept strictly confidential.",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description:
        "We deliver to all major cities and towns across India via trusted courier partners with tracking.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              How <span className="text-primary">WriteRight</span> Works
            </h1>
            <p className="text-xl text-muted-foreground">
              From order placement to doorstep delivery - a simple 4-step process
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {detailedSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shrink-0 shadow-lg">
                      {step.number}
                    </div>
                    <h2 className="text-3xl font-display font-bold">{step.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0">
                  <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-2 border-primary/20">
                    <step.icon className="h-32 w-32 text-primary/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Students Trust WriteRight
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering quality, reliability, and peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalInfo.map((info, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Place Your Order?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Get your handwritten assignment delivered before your deadline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/place-order">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 h-14 font-semibold group"
                >
                  Place Order Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
