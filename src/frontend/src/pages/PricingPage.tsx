import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Package,
  FileText,
  Zap,
  ChevronRight,
  Clock,
  Truck,
  PenTool,
  Shield,
} from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "10 Pages Package",
      subtitle: "Perfect for standard assignments",
      pages: "10 Pages",
      delivery: "5-7 Business Days",
      price: "₹200",
      priceDetail: "only",
      icon: Package,
      features: [
        "100% handwritten assignment",
        "Neat and clean presentation",
        "Standard courier delivery",
        "Basic formatting and margins",
        "Track your order online",
      ],
      color: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "30 Pages Package",
      subtitle: "Most popular choice",
      pages: "30 Pages",
      delivery: "5-7 Business Days",
      price: "₹500",
      priceDetail: "only",
      icon: FileText,
      popular: true,
      features: [
        "Everything in 10 Pages, plus:",
        "Diagrams and illustrations included",
        "Professional binding",
        "Premium quality paper",
        "Priority customer support",
        "Revision option available",
      ],
      color: "from-primary/10 to-primary/20",
      borderColor: "border-primary",
    },
    {
      title: "Custom Package",
      subtitle: "For any page count",
      pages: "Custom Pages",
      delivery: "Flexible Timeline",
      price: "Custom Quote",
      priceDetail: "",
      icon: Zap,
      features: [
        "All Standard features included",
        "Flexible page count",
        "Choose your deadline",
        "Real-time status updates",
        "Priority customer support",
        "24/7 assistance available",
      ],
      color: "from-accent/10 to-accent/20",
      borderColor: "border-accent/20",
    },
  ];

  const additionalServices = [
    {
      icon: PenTool,
      title: "Custom Handwriting Styles",
      description: "Need a specific handwriting style? We can match your requirements.",
    },
    {
      icon: FileText,
      title: "Multiple Copies",
      description: "Need extra copies? We can provide duplicate assignments at discounted rates.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "Not satisfied? We offer revisions to ensure you get exactly what you need.",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "We deliver to all major cities and remote locations across India.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Premium Hero Section */}
      <section className="py-16 md:py-24 gradient-mesh-1 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold fade-in-up">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground fade-in-up stagger-1">
              Choose the package that fits your needs and deadline
            </p>
            <Badge 
              variant="secondary" 
              className="text-sm px-5 py-2 shadow-soft magnetic-hover backdrop-blur-sm bg-secondary/80 fade-in stagger-2"
            >
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Affordable pricing starting at ₹200 for 10 pages
            </Badge>
          </div>
        </div>
      </section>

      {/* Premium Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "border-2 border-primary shadow-large scale-105 lg:scale-110 glow-primary"
                    : "border-2 card-lift shadow-soft hover:shadow-large"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 text-sm font-bold shadow-large animate-pulse-glow">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-lg transition-opacity duration-300 ${
                  plan.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
                
                <div className="relative">
                  <CardHeader className="text-center space-y-4 pb-8">
                    <div className={`h-20 w-20 rounded-2xl ${
                      plan.popular 
                        ? "bg-gradient-to-br from-primary to-accent shadow-large" 
                        : "bg-primary/10 group-hover:bg-primary/20"
                    } flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110`}>
                      <plan.icon className={`h-10 w-10 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-display mb-2 group-hover:text-primary transition-colors">
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{plan.subtitle}</CardDescription>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className={`text-4xl font-bold ${
                          plan.popular ? "gradient-text" : "text-primary"
                        }`}>
                          {plan.price}
                        </div>
                        {plan.priceDetail && (
                          <div className="text-sm text-muted-foreground">{plan.priceDetail}</div>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-foreground">{plan.pages}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                        <Truck className="h-3.5 w-3.5" />
                        {plan.delivery}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span className={feature.includes("Everything") || feature.includes("All") ? "font-semibold" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/place-order">
                      <Button
                        className={`w-full magnetic-hover ${
                          plan.popular ? "shadow-medium glow-primary" : "hover:shadow-medium"
                        }`}
                        size="lg"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Order Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground font-medium">
              ₹200 for 10 pages • ₹500 for 30 pages • Custom quotes available
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="magnetic-hover shadow-soft hover:shadow-medium border-2"
              >
                Contact Us for Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services with Enhanced Cards */}
      <section className="py-20 gradient-mesh-2 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Additional <span className="gradient-text-secondary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer extra services to meet all your assignment needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="group border-2 card-lift backdrop-blur-sm bg-card/80 shadow-soft hover:shadow-large hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors font-display">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info Cards with Enhanced Styling */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Pricing <span className="gradient-text">Information</span>
            </h2>
            <div className="space-y-6">
              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm">💰</span>
                    How is pricing calculated?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  Our base pricing is ₹200 for 10 pages and ₹500 for 30 pages. Final pricing may vary based on subject complexity (technical subjects may cost more due to diagrams), and delivery timeline (urgent orders have express charges).
                </CardContent>
              </Card>
              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm">💳</span>
                    Payment methods accepted?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  We accept payments via UPI, net banking, debit/credit cards through Razorpay, and other secure payment gateways. Payment integration coming soon to the order form.
                </CardContent>
              </Card>
              <Card className="border-2 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm">🎁</span>
                    Is there a discount for bulk orders?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  Yes! If you have multiple assignments or need regular service, contact us for special bulk pricing and student loyalty discounts.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl floating" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Place Your Order?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Get started today and receive your assignment before your deadline
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
                  Get a Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
