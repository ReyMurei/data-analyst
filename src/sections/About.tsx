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
        <div className="max-w-3xl mx-auto text-center">

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

        {/* What I Do */}
        <div className="mt-20">

          <div className="text-center mb-10">

            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
              What I Do
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              From raw data to real insights
            </h3>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Data Collection & Management */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">📥</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Data Collection & Management
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gathering data from multiple sources, organising it into structured formats, and ensuring it's stored securely and accessibly for analysis.
              </p>
            </div>

            {/* Data Quality & Validation */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">✅</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Data Quality & Validation
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cleaning datasets, handling missing values, removing inconsistencies, and building validation rules to ensure data is accurate and reliable.
              </p>
            </div>

            {/* Data Analysis */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🔍</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Data Analysis
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploring datasets to uncover trends, patterns, and correlations using statistical analysis, segmentation, and hypothesis testing to reveal what's really happening.
              </p>
            </div>

            {/* Data Visualization */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Data Visualization
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing dashboards, charts, and interactive reports that make complex information easy to understand and act on at a glance.
              </p>
            </div>

            {/* Reporting & Documentation */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">📝</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Reporting & Documentation
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creating clear, structured reports and documentation that capture methodology, findings, and recommendations for future reference and transparency.
              </p>
            </div>

            {/* Stakeholder Communication & Data Storytelling */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">💬</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Stakeholder Communication
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Translating technical findings into actionable insights for non-technical teams, using data storytelling to drive understanding and better decisions.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
