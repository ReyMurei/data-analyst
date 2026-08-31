export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">

      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Curious about data,{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              focused on its story
            </span>
          </h2>

        </div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Personal Introduction */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A little about me
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-5">
              I'm Audrey, a data analyst with a genuine curiosity about
              how data can be used to understand problems, uncover patterns,
              and support better decisions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-5">
              My journey into data has grown from working with real-world
              datasets where information is rarely perfect. I've learned
              that meaningful analysis starts long before a chart or
              dashboard — with understanding the question, investigating
              the data, and making sure the information can be trusted.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-5">
              I enjoy the process of taking something messy and unfamiliar,
              breaking it down, finding the story within it, and turning
              that story into something clear and useful.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm continuously learning and expanding my understanding of
              analytics, data engineering, and business intelligence. What
              keeps me interested is that there's always another problem to
              solve, another dataset to explore, and another way to make
              information more useful.
            </p>

          </div>

          {/* Visual - Bento Grid */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              {/* Data Collection */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-600/15 to-emerald-600/5 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📥
                </div>
                <h4 className="font-semibold text-emerald-400 mb-1">
                  Collect
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gathering and structuring raw data from multiple sources
                </p>
              </div>

              {/* Analysis */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-600/15 to-cyan-600/5 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  🔍
                </div>
                <h4 className="font-semibold text-cyan-400 mb-1">
                  Analyse
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Finding patterns, trends, and actionable insights
                </p>
              </div>

              {/* Visualisation */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-600/15 to-cyan-600/5 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h4 className="font-semibold text-cyan-400 mb-1">
                  Visualise
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building dashboards and reports that tell the story
                </p>
              </div>

              {/* Automation */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-600/15 to-emerald-600/5 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h4 className="font-semibold text-emerald-400 mb-1">
                  Automate
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Streamlining workflows and reducing manual work
                </p>
              </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl" />

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl" />

          </div>

        </div>

        {/* What Drives Me */}
        <div className="mt-20">

          <div className="text-center mb-10">

            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
              What Drives Me
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              More than just numbers
            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-7 rounded-2xl bg-card/50 border border-border/50">
              <h4 className="text-xl font-semibold mb-3">
                Curiosity
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                I like asking why something happened, what the data is
                really telling us, and what we might be missing.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-card/50 border border-border/50">
              <h4 className="text-xl font-semibold mb-3">
                Problem Solving
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                I enjoy breaking complicated problems into smaller pieces,
                finding patterns, and working towards practical solutions.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-card/50 border border-border/50">
              <h4 className="text-xl font-semibold mb-3">
                Continuous Learning
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                Data is constantly evolving, and so am I. I'm always
                exploring new concepts, techniques, and better ways of
                working with data.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
