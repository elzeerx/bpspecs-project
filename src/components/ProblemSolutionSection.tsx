
import { Clock, FileX, CheckCircle } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-bpspecs-dark-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Problem */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-red-500/10 text-red-400 px-6 py-3 rounded-full mb-8">
              <FileX className="w-5 h-5" />
              <span className="font-semibold">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bpspecs-off-white mb-6 leading-tight">
              Entrepreneurs waste <span className="text-red-400">weeks creating business documentation</span> that investors and developers struggle to understand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Weeks of Work</div>
                <div className="text-bpspecs-beige">Time spent on documentation instead of building</div>
              </div>
              <div className="text-center">
                <FileX className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Incomplete Specs</div>
                <div className="text-bpspecs-beige">Missing technical details developers need</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Investor Rejection</div>
                <div className="text-bpspecs-beige">Plans that don't impress or convince</div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-bpspecs-teal/20 text-bpspecs-teal px-6 py-3 rounded-full mb-8">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bpspecs-off-white mb-6 leading-tight">
              BPSpecs AI analyzes your idea and generates <span className="text-gradient">professional specifications in minutes</span>, not weeks
            </h2>
            <p className="text-xl text-bpspecs-beige mb-12 max-w-3xl mx-auto leading-relaxed">
              Our advanced AI understands your business model, identifies requirements, and creates comprehensive documentation that impresses investors and guides development teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-bpspecs-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-bpspecs-teal font-bold text-xl">5</span>
                </div>
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Minutes to Complete</div>
                <div className="text-bpspecs-beige">From idea to investor-ready documentation</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-bpspecs-teal mx-auto mb-4" />
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Complete Specifications</div>
                <div className="text-bpspecs-beige">Every detail developers and investors need</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bpspecs-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-bpspecs-teal font-bold text-xl">✓</span>
                </div>
                <div className="text-lg font-semibold text-bpspecs-off-white mb-2">Investor-Ready</div>
                <div className="text-bpspecs-beige">Professional format that gets results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
