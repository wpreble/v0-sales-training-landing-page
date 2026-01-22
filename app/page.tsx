import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, Zap, Target, Brain, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/95 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/928b78a8-7ea7-4470-84cd-1a09b13f013b.png"
              alt="Tiger Quest Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="font-bold text-lg text-foreground">Tiger Quest</span>
              <p className="text-xs text-muted-foreground">AI Sales Training for Wellness Clinics</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section - Light */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
            Turn Every Consultation Into a <span className="text-primary">Closed Deal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto text-balance">
            The AI-powered sales training platform that transforms your front desk staff and patient coordinators into confident closers.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop losing high-value consultations to untrained staff. Tiger Quest gives your team 24/7 access to proven sales frameworks, role-play practice, and real-time coaching — specifically designed for aesthetic and wellness services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Try Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg bg-transparent"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-12">See results in your first week.</p>

          {/* App Screenshot Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/images/image.png"
                alt="Tiger Quest AI Sales Coach interface showing training modules, role-play scenarios, and sales frameworks"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-secondary-foreground">
            Your Consultations Are <span className="text-primary">Leaking Revenue</span>
          </h2>

          <Card className="bg-secondary-foreground/5 border border-secondary-foreground/10 p-8 mb-12">
            <p className="text-xl italic text-secondary-foreground/80 border-l-4 border-primary pl-6">
              "You spend thousands on marketing to get patients through the door. But when your front desk can't close, 
              every missed consultation is $3,000-$15,000 walking out the door. The math is brutal."
            </p>
          </Card>

          <div className="space-y-4">
            {[
              "Patient coordinators give quotes but don't know how to close",
              "High-value treatments get 'I need to think about it' responses",
              "Staff feels uncomfortable discussing pricing and financing",
              "Consultations run long but still don't convert",
              "New hires take 6+ months before they can sell confidently",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-secondary-foreground/70 text-lg">
                <span className="text-red-400 font-bold">✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Light */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Train Your Team to Close <span className="text-primary">Like You Do</span>
          </h2>

          <div className="text-lg text-muted-foreground space-y-6 text-center max-w-3xl mx-auto">
            <p>
              Tiger Quest isn't generic sales training. It's built specifically for wellness clinics — from Botox consultations 
              to body contouring packages. Your team learns to handle real objections like "I need to check with my spouse" 
              or "That's more than I expected."
            </p>
            <p className="text-xl font-semibold text-foreground">
              Watch your close rate jump from 30% to 70%+. 
              <span className="text-primary"> In the first month.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-secondary-foreground">
            Everything Your Team Needs to <span className="text-primary">Close More</span>
          </h2>
          <p className="text-xl text-secondary-foreground/70 text-center mb-16">
            AI-powered training built for the wellness industry
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Role-Play Scenarios",
                description:
                  "Practice real consultations with AI patients. Handle objections about pricing, timing, and competing treatments. Your team builds confidence before they're in front of real patients.",
              },
              {
                icon: Zap,
                title: "Treatment-Specific Scripts",
                description:
                  "From Botox to body contouring, from facials to weight loss programs. Get proven scripts tailored to each service you offer, with objection handling built in.",
              },
              {
                icon: Users,
                title: "Team Progress Dashboard",
                description:
                  "Track which team members are completing training, monitor their role-play scores, and identify who needs extra coaching. Know exactly who's ready to close.",
              },
              {
                icon: Target,
                title: "Real-Time Consultation Coaching",
                description:
                  "Your team can ask Tiger Quest for help between appointments. 'Patient is hesitant about price' gets instant, actionable responses they can use immediately.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 border border-secondary-foreground/10 bg-secondary-foreground/5 hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-bold mb-4 text-xl text-secondary-foreground">{feature.title}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wellness Clinics Section - Light */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Built Specifically for <span className="text-primary">Wellness Clinics</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Med Spas",
                items: ["Botox & fillers", "Laser treatments", "Membership packages", "Treatment bundles"],
              },
              {
                title: "Aesthetic Clinics",
                items: ["Body contouring", "Skin rejuvenation", "Hair restoration", "Cosmetic procedures"],
              },
              {
                title: "Wellness Centers",
                items: ["Weight loss programs", "IV therapy", "Hormone optimization", "Functional medicine"],
              },
            ].map((category, i) => (
              <Card key={i} className="p-6 bg-card border border-border">
                <h3 className="font-bold text-xl mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-secondary-foreground">
            Results From Clinics <span className="text-primary">Like Yours</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Sarah M.",
                role: "Med Spa Owner, Austin",
                quote:
                  "Our consultation close rate went from 35% to 72% in 6 weeks. That's an extra $47K per month in booked treatments.",
              },
              {
                name: "Dr. James R.",
                role: "Aesthetic Clinic, Miami",
                quote:
                  "New patient coordinators used to take 4-5 months to get comfortable. Now they're closing within their first month.",
              },
              {
                name: "Michelle T.",
                role: "Wellness Center, LA",
                quote:
                  "We finally have a consistent process. Every team member follows the same framework, and our reviews mention how 'professional' our consultations are.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border border-secondary-foreground/10 bg-secondary-foreground/5">
                <p className="text-secondary-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-secondary-foreground/60">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Light */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Simple, <span className="text-primary">Team-Based Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            One closed consultation pays for months of training.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2 text-foreground">Starter</h3>
              <p className="text-muted-foreground mb-6">For single locations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$197</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 3 team members", "AI role-play scenarios", "Treatment-specific scripts", "Basic analytics"].map(
                  (item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Try Now
              </Button>
            </Card>

            {/* Growth - Featured */}
            <Card className="p-8 border-2 border-primary bg-card relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Growth</h3>
              <p className="text-muted-foreground mb-6">For growing practices</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$397</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 10 team members",
                  "Everything in Starter",
                  "Team progress dashboard",
                  "Conversion analytics",
                  "Priority support",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Try Now</Button>
            </Card>

            {/* Enterprise */}
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2 text-foreground">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For multi-location groups</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited team members",
                  "Everything in Growth",
                  "Multi-location dashboard",
                  "Custom integrations",
                  "Dedicated success manager",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Book a Call
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How is this different from traditional sales training?",
                a: "Traditional training is a one-time event that fades within weeks. Tiger Quest provides ongoing, on-demand practice with AI role-play scenarios. Your team can drill consultations anytime, get instant feedback, and build real muscle memory for handling objections.",
              },
              {
                q: "Will this work for my specific treatments?",
                a: "Yes. We've built scenarios for everything from Botox and fillers to weight loss programs and IV therapy. The AI understands wellness industry terminology and common patient concerns. You can also customize scenarios for your unique service offerings.",
              },
              {
                q: "How long until we see results?",
                a: "Most clinics see measurable improvement in close rates within the first 2-3 weeks. The structured 30-day onboarding ensures your team has the fundamentals down quickly, with ongoing improvement from there.",
              },
              {
                q: "What if my team isn't 'salesy'?",
                a: "That's actually ideal. Tiger Quest teaches consultative selling — helping patients make confident decisions about their care, not pushy tactics. Your empathetic team members often become the best closers because patients trust them.",
              },
              {
                q: "Can we track individual team member progress?",
                a: "Absolutely. The dashboard shows completion rates, role-play scores, and areas where each person needs more practice. Managers can identify who needs coaching without sitting in on every consultation.",
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6 border border-secondary-foreground/10 bg-secondary-foreground/5">
                <h3 className="font-bold text-lg mb-3 text-secondary-foreground">{faq.q}</h3>
                <p className="text-secondary-foreground/70">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Light with gradient */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-muted border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Stop Losing Consultations. <span className="text-primary">Start Closing.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every week you wait is money walking out the door. Get started today and see the difference in your first week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
              Try Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-10 py-6 text-lg bg-transparent"
            >
              Book a Call
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Setup takes 5 minutes.</p>
        </div>
      </section>

      {/* Footer - Light */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/images/928b78a8-7ea7-4470-84cd-1a09b13f013b.png"
              alt="Tiger Quest Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-bold text-foreground">Tiger Quest</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tiger Quest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
