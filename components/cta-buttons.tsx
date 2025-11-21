"use client"

export default function CtaButtons() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-900 to-purple-950 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">AI-powered career coach</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Gain insights into your skills and potential career paths through our intelligent AI mentor.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">Your Skill Profile</h3>

          <div className="space-y-8">
            {/* Creativity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Creativity</span>
                <span className="text-slate-400 text-sm">72%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>

            {/* Problem-solving */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Problem-solving</span>
                <span className="text-slate-400 text-sm">85%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 rounded-full transition-all duration-1000"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Design */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Design</span>
                <span className="text-slate-400 text-sm">91%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>

            {/* Technology */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Technology</span>
                <span className="text-slate-400 text-sm">78%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-magenta-500 rounded-full transition-all duration-1000"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
