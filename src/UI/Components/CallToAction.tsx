import { ArrowRight, Sparkles } from "lucide-react";

function CallToAction() {
  return (
    <div className=" bg-gray-900 flex items-center justify-center p-4 md:p-8 md:min-h-screen mb-7">
      <div className="neon-gradient p-[2px] rounded-2xl w-full max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text leading-tight">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white-100">
                {" "}
                🚀
              </span>{" "}
              Let&apos;s Build Something Amazing Together!
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto">
              Have a project in mind or need a tech expert to bring your ideas
              to life? I’m here to help! Let’s collaborate and turn your vision
              into reality.
            </p>

            <button className="btn-animate group inline-flex items-center gap-2 bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:bg-indigo-700 w-full sm:w-auto justify-center">
              Get Started Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
