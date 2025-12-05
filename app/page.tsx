import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, Zap, Target, Clock, Brain } from "lucide-react"

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
              <p className="text-xs text-muted-foreground">Powered by Big Marv</p>
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
          <div className="inline-block px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary">Powered by Big Marv</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
            Close Every Qualified Sale. <span className="text-primary">Period.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto text-balance">
            The systematic sales approach that turned hundreds into millionaires — now available 24/7 as your AI-powered
            digital sales coach.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Big Marv spent decades perfecting the Tiger Quest system — a proven methodology for human influence that has
            created retired millionaires, transformed struggling salespeople into closers, and built empires. Now, his
            entire life's work lives on as a digital twin you can access anytime, anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Become a Legacy Member — $300/month
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg bg-transparent"
            >
              Join the Wait List
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-primary font-medium mb-12">Limited to 20 Legacy Members</p>

          {/* App Screenshot Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/images/image.png"
                alt="Tiger Quest AI Sales Coach interface showing chat with Big Marv, Resource Library, and Sales Vault"
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
            Raw Talent Only Gets You <span className="text-primary">So Far</span>
          </h2>

          <Card className="bg-secondary-foreground/5 border border-secondary-foreground/10 p-8 mb-12">
            <p className="text-xl italic text-secondary-foreground/80 border-l-4 border-primary pl-6">
              "Most entrepreneurs are naturally born salespeople. They grew to a million on grit and talent alone. But
              raw influence without a system hits a ceiling — and when you try to scale by hiring people who aren't
              naturally gifted, everything breaks."
            </p>
          </Card>

          <div className="space-y-4">
            {[
              "You got here on talent, but your team can't replicate what you do",
              "Training sessions feel good in the moment but nothing sticks",
              "Your close ratio is inconsistent — sometimes 70%, sometimes 30%",
              "You've tried \"sales training\" but it felt sleazy or didn't match your style",
              "New hires take months to ramp up (if they ever do)",
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
            A System That Works For <span className="text-primary">Anyone</span>
          </h2>

          <div className="text-lg text-muted-foreground space-y-6 mb-16 text-center max-w-3xl mx-auto">
            <p>
              Big Marv wasn't a natural born salesperson. He had to create a system to become great. That's what makes
              Tiger Quest different — it takes someone with zero natural sales ability and transforms them into a
              phenomenal closer.
            </p>
            <p className="text-xl font-semibold text-foreground">
              If you follow the MANTOR qualification framework and execute the three phases, you will close every
              qualified sale. Not 70%. Not 80%. <span className="text-primary">Every. Single. One.</span>
            </p>
          </div>

          {/* MANTOR Framework */}
          <Card className="bg-card border-2 border-primary/30 p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">The MANTOR Framework</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { letter: "M", word: "Money", desc: "They have budget" },
                { letter: "A", word: "Authority", desc: "You're talking to the decision maker" },
                { letter: "N", word: "Need", desc: "There's a real problem to solve" },
                { letter: "T", word: "Time frame", desc: "They're ready to buy now" },
                { letter: "O", word: "Obstacle", desc: "You know what's in the way" },
                { letter: "R", word: "Revenue", desc: "Profitable for your business" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.letter}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.word}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* What You Get Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-secondary-foreground">
            Big Marv <span className="text-primary">In Your Pocket</span>
          </h2>
          <p className="text-xl text-secondary-foreground/70 text-center mb-16">
            Everything you need to master the system
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "24/7 Access to the System",
                description:
                  "The entire Tiger Quest methodology — every technique, every framework, every nuance — available anytime you need it. Ask questions, get coaching, drill the system until it becomes muscle memory.",
              },
              {
                icon: Zap,
                title: "Trial Closing Mastery",
                description:
                  "Nobody trial closes. It's the easiest skill to learn and moves the needle fastest. Master this one technique and watch your close ratio jump from 30% to 70% in the first week.",
              },
              {
                icon: Clock,
                title: "90-Day Mastery Path",
                description:
                  "The complete system takes 90 days to master. Not years of trial and error. Not thousands in courses that collect dust. A structured path that transforms how you influence others permanently.",
              },
              {
                icon: Target,
                title: "Role Play Intelligence",
                description:
                  "This isn't theory. It's drilling. AI-powered scenarios that force you to practice objection handling, rapport building, and closing techniques until they're second nature.",
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

      {/* Legacy Section - Light */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Powered by <span className="text-primary">Big Marv</span>
          </h2>

          <div className="text-lg text-muted-foreground space-y-6 mt-12">
            <p>
              Big Marv spent his life perfecting the art of human influence. He trained thousands — from struggling
              entrepreneurs to elite sales teams at the highest levels. When Tony Robbins needed someone to speak at
              Business Mastery events, he called Marv.
            </p>
            <p>
              His students didn't just learn to sell. They became millionaires. They retired early. They built empires.
              And they all say the same thing:{" "}
              <span className="text-accent font-semibold">
                "Before I met Marv, I was dead broke. Now I don't have to work another day in my life."
              </span>
            </p>
            <p>
              This AI captures everything — every lesson, every story, every piece of wisdom from decades of real-world
              results. It's not a course. It's a digital version of the greatest sales trainer who ever lived.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-secondary-foreground">
            Results That <span className="text-primary">Speak</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Chris Patterson",
                quote:
                  "The only reason I have success today is because of Big Marv. I followed the system. Before him, I was making $300 a month. Now I'm retired and my businesses do multiple seven figures.",
              },
              {
                name: "Chris Luzar",
                quote:
                  "Mastered the system, now teaches it to thousands. Built a career on the foundation of Tiger Quest.",
              },
              {
                name: "David Pickett",
                quote:
                  "From struggling salesperson to retired millionaire. \"I don't have to work another day if I don't want to.\"",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border border-secondary-foreground/10 bg-secondary-foreground/5">
                <p className="text-secondary-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
              </Card>
            ))}
          </div>

          {/* Brad's Story */}
          <Card className="p-8 border-2 border-accent/30 bg-accent/10">
            <p className="text-lg text-secondary-foreground/90 italic mb-4">
              "I've completely rebuilt my life four, maybe five times. Each time it looked like there was no escape, no
              return. Anyone watching would've said 'this guy's screwed.' But every single time, I came back. Not
              because of luck. Because I mastered the ability of human influence through my dad's system. With this,
              you're richer and more powerful than anyone — because you can get anything you want through ethical
              influence."
            </p>
            <p className="font-bold text-accent">— Brad Himel, son of Big Marv</p>
          </Card>
        </div>
      </section>

      {/* Pricing Section - Light */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Become a <span className="text-primary">Legacy Member</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're opening Tiger Quest to just 20 Legacy Members — people who want to be part of something bigger than a
            product launch.
          </p>

          <Card className="p-10 border-2 border-primary bg-card text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Limited to 20 Legacy Members
            </div>
            <div className="mb-8">
              <span className="text-6xl font-bold text-foreground">$300</span>
              <span className="text-xl text-muted-foreground">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
              {[
                "Full access to the Tiger Quest AI system",
                "90-day mastery path (the Three Phases of E)",
                "Trial Close Challenge to get results in your first week",
                "Direct influence on the product as we refine it",
                "Legacy Member status — forever",
                "$99/seat pricing for your team (after launch: $147/seat)",
              ].map((benefit, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Claim Your Legacy Spot
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              We want commitment, not curiosity. If you master this, you'll make it back on your first deal.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary-foreground">Questions</h2>

          <div className="space-y-8">
            {[
              {
                q: "What exactly is Tiger Quest AI?",
                a: "It's a digital version of Big Marv's complete sales system — the methodology that created millionaires. Think of it as having the world's greatest sales trainer available 24/7 to coach you, drill you, and answer any question about human influence and closing.",
              },
              {
                q: "How is this different from other sales training?",
                a: "Most sales training teaches theory. This is a system. If you follow it, you close. Period. It's also not sleazy manipulation — it's ethical influence based on decades of real-world results. Plus, you're not watching videos and hoping it sticks. You're drilling with AI until it's muscle memory.",
              },
              {
                q: "What if I'm not a natural salesperson?",
                a: "Perfect. Big Marv wasn't either. He created this system specifically for people who aren't naturally gifted. The worst salespeople often become the best students because they actually follow the system instead of relying on raw talent.",
              },
              {
                q: "How long until I see results?",
                a: "The trial closing technique alone can transform your close ratio in the first week. Full mastery takes 90 days, but you'll see improvements immediately if you actually practice.",
              },
              {
                q: "What does 'Legacy Member' mean?",
                a: "You're not just a beta user. You're part of honoring Big Marv's life work. Many of our first members knew him personally — they're doing this to be part of keeping his legacy alive. Your feedback helps us make sure this captures his teaching perfectly.",
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
            Master the System. <span className="text-primary">Get Anything You Want.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4 italic max-w-2xl mx-auto">
            "If you can master this system, you can literally be down on your luck with nothing to your name, and you're
            still richer than anyone. Because you have the ability to influence. There is no greater quality and there
            is no better system than this."
          </p>
          <p className="text-primary font-semibold mb-10">— Brad Himel, son of Big Marv</p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
            Become a Legacy Member
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Only 20 spots available. Once full, Legacy pricing closes permanently.
          </p>
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
          <p className="text-sm text-muted-foreground mb-2">Powered by Big Marv</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tiger Quest. Carrying the legacy forward.
          </p>
        </div>
      </footer>
    </div>
  )
}
