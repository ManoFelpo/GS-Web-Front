"use client"

export default function SkillProfileDemo() {
  const skills = [
    { name: "Creativity", proficiency: 85 },
    { name: "Problem-solving", proficiency: 92 },
    { name: "Design", proficiency: 78 },
    { name: "Technology", proficiency: 88 },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-powered
            <br />
            career coach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gain insights into your skills and potential career paths through our intelligent AI mentor.
          </p>
        </div>

        {/* Right side - Skill Profile Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-8">Your Skill Profile</h3>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
