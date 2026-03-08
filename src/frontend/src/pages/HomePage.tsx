import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Truck,
  Shield,
  Clock,
  ChevronRight,
  PenTool,
  Users,
  Star,
  Package,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: PenTool,
      title: "100% Handwritten",
      description: "Every assignment written neatly by hand, just like you would",
    },
    {
      icon: FileText,
      title: "Clean & Neat Presentation",
      description: "Professional formatting with proper margins and spacing",
    },
    {
      icon: CheckCircle,
      title: "Diagrams Included",
      description: "All necessary diagrams and illustrations drawn accurately",
    },
    {
      icon: Truck,
      title: "Fast Courier Delivery",
      description: "Delivered directly to your doorstep before deadline",
    },
    {
      icon: Shield,
      title: "Confidential & Secure",
      description: "Your privacy and security is our top priority",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Topic & Instructions",
      description: "Fill out our simple order form with your assignment details, deadline, and special requirements",
      icon: FileText,
    },
    {
      number: "02",
      title: "We Write Your Assignment by Hand",
      description: "Our experienced writers create your assignment with neat handwriting and proper formatting",
      icon: PenTool,
    },
    {
      number: "03",
      title: "We Bind & Courier It",
      description: "We professionally bind your assignment and dispatch it via reliable courier service",
      icon: Package,
    },
    {
      number: "04",
      title: "Submit With Confidence",
      description: "Receive your assignment on time and submit it with complete confidence",
      icon: CheckCircle,
    },
  ];

  const pricingCards = [
    {
      title: "Basic Package",
      description: "5-8 Pages",
      features: ["Standard delivery", "Neat handwriting", "Basic formatting"],
      icon: Package,
    },
    {
      title: "Standard Package",
      description: "10-15 Pages",
      features: ["Standard delivery", "Diagrams included", "Professional binding"],
      icon: FileText,
      popular: true,
    },
    {
      title: "Urgent Delivery",
      description: "Any Pages",
      features: ["24-48 hour processing", "Priority courier", "Express service"],
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      name: "Priya S.",
      course: "BBA Student",
      text: "Amazing service! My assignment was delivered two days before the deadline, perfectly written and bound.",
      rating: 5,
    },
    {
      name: "Rahul K.",
      course: "BCA Student",
      text: "The handwriting is so neat and professional. My professor was impressed! Highly recommend WriteRight.",
      rating: 5,
    },
    {
      name: "Sneha M.",
      course: "Engineering Student",
      text: "Saved my semester! The urgent delivery option is a lifesaver. Thank you so much!",
      rating: 5,
    },
    {
      name: "Amit P.",
      course: "MBA Student",
      text: "Professional service with great attention to detail. All diagrams were perfect. Will use again!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long does it take?",
      answer: "Standard orders are delivered within 5-7 business days. We also offer urgent delivery for 24-48 hour processing. Delivery time depends on your location and chosen service.",
    },
    {
      question: "Is my work confidential?",
      answer: "Absolutely! We maintain strict confidentiality. Your personal information and assignment details are kept completely private and secure.",
    },
    {
      question: "Do you include diagrams?",
      answer: "Yes! All necessary diagrams, charts, and illustrations are included and drawn neatly by hand as per your requirements.",
    },
    {
      question: "What if I need urgent delivery?",
      answer: "We offer urgent delivery service with 24-48 hour processing. Select the Urgent Package when placing your order and provide your deadline.",
    },
    {
      question: "How do I receive my assignment?",
      answer: "Your completed assignment is professionally bound and delivered to your address via reliable courier service. You'll receive tracking details once dispatched.",
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover all subjects for BCA, BBA, Engineering, MBA, and other college courses. From technical subjects to management and humanities - we've got you covered!",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Premium Effects */}
      <section className="relative py-20 md:py-32 overflow-hidden gradient-mesh-1">
        {/* Animated background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-40" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="text-sm px-5 py-2 shadow-soft magnetic-hover fade-in backdrop-blur-sm bg-secondary/80"
            >
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Fast & Reliable Service
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight fade-in-up stagger-1">
              Get Your Handwritten Assignments{" "}
              <span className="gradient-text block mt-2">Delivered On Time</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-2">
              Neat. Reliable. Stress-Free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 fade-in-up stagger-3">
              <Link to="/place-order">
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 font-semibold shadow-large magnetic-hover glow-primary group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Place Your Order Now
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 font-semibold border-2 magnetic-hover shadow-soft hover:shadow-medium transition-all"
                >
                  How It Works
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground fade-in stagger-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm shadow-soft">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">1000+ Students Served</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm shadow-soft">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glassmorphism */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose <span className="gradient-text">WriteRight?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver quality handwritten assignments with professional service you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 card-lift backdrop-blur-sm bg-card/60 shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden relative"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with Enhanced Step Cards */}
      <section className="py-20 gradient-mesh-2 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How It <span className="gradient-text-secondary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to get your assignment delivered
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-6 p-8 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-border hover:border-primary/40 transition-all duration-300 shadow-soft hover:shadow-large card-lift"
              >
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="shrink-0">
                  <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-medium group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:bg-white/30 transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold border-2 magnetic-hover shadow-soft hover:shadow-medium hover:border-primary/50 transition-all"
              >
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section with Enhanced Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Pricing</span> Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingCards.map((pkg, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  pkg.popular 
                    ? "border-2 border-primary shadow-large scale-105 hover:scale-110 glow-primary" 
                    : "border-2 card-lift shadow-soft hover:shadow-large"
                }`}
              >
                {/* Most Popular Badge with glow */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 text-sm font-bold shadow-large animate-pulse-glow">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="text-center relative z-10 pt-8">
                  <div className={`h-20 w-20 rounded-2xl ${
                    pkg.popular 
                      ? "bg-gradient-to-br from-primary to-accent" 
                      : "bg-primary/10"
                  } flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                    <pkg.icon className={`h-10 w-10 ${pkg.popular ? "text-white" : "text-primary"}`} />
                  </div>
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing">
                    <Button
                      className={`w-full mt-4 magnetic-hover ${
                        pkg.popular ? "shadow-medium glow-primary" : ""
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                      size="lg"
                    >
                      View Pricing
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Premium Styling */}
      <section className="py-20 gradient-mesh-1 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by students across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group border-2 card-lift backdrop-blur-sm bg-card/80 shadow-soft hover:shadow-large hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  {/* Avatar placeholder */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-xs">{testimonial.course}</CardDescription>
                    </div>
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-accent fill-accent transition-transform duration-200 hover:scale-125" 
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Quote icon */}
                  <div className="text-primary/20 text-4xl font-serif leading-none mb-2">"</div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Enhanced Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Frequently Asked <span className="gradient-text-secondary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our service
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-xl px-6 bg-card shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section with Premium Gradient */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Floating shapes */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl floating" />
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl floating-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Place your order now and receive your handwritten assignment on time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/place-order">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 h-14 font-semibold group shadow-large magnetic-hover bg-white hover:bg-white/90 text-primary"
                >
                  Place Order Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary magnetic-hover shadow-medium transition-all"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
