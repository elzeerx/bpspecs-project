
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "BPSpecs saved me 3 weeks of work and helped me secure $250K in seed funding. The specifications were so detailed that investors immediately understood our vision.",
    author: "Sarah Chen",
    role: "Founder, FoodieConnect",
    rating: 5
  },
  {
    quote: "As a business consultant, I use BPSpecs for all my client projects. It's like having a senior business analyst on demand. The quality is consistently impressive.",
    author: "Michael Rodriguez",
    role: "Senior Business Consultant",
    rating: 5
  },
  {
    quote: "Our development team was able to start coding immediately after receiving the BPSpecs output. The technical requirements were spot-on and saved us countless clarification meetings.",
    author: "Jennifer Park",
    role: "CTO, HealthTech Startup",
    rating: 5
  }
];

const logos = [
  "TechStart Incubator",
  "Venture Partners",
  "StartupHub",
  "Business Accelerator",
  "Growth Capital",
  "Innovation Labs"
];

const SocialProofSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-bpspecs-beige/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bpspecs-dark-charcoal leading-tight">
              Trusted by Entrepreneurs,<br />
              <span className="text-gradient">Loved by Investors</span>
            </h2>
            <p className="text-xl text-bpspecs-taupe font-medium">
              Join thousands of successful entrepreneurs who've accelerated their business planning with BPSpecs
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-bpspecs-taupe/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-bpspecs-teal/20 mb-4" />
                <p className="text-bpspecs-dark-charcoal leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-bpspecs-taupe/20 pt-4">
                  <div className="font-semibold text-bpspecs-dark-charcoal">{testimonial.author}</div>
                  <div className="text-sm text-bpspecs-taupe">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Logo Carousel */}
          <div className="text-center">
            <p className="text-sm text-bpspecs-taupe mb-8 font-medium uppercase tracking-wide">
              Trusted by leading accelerators and business consultants
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
              {logos.map((logo, index) => (
                <div key={index} className="text-lg font-bold text-bpspecs-dark-charcoal">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 text-center">
            <div>
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-2">500+</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Startups Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-2">$50M+</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-2">95%</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-2">24/7</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
