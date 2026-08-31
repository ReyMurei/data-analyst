import {
  Database,
  Server,
  Cloud,
  Eye,
  BarChart3,
  Monitor,
  BookOpen,
  FileSpreadsheet,
  Terminal,
  GitBranch,
  ClipboardList,
  Globe,
  Workflow,
  FileText,
  Code,
} from 'lucide-react';

const tools = [
  { name: 'Microsoft SQL', icon: Database, delay: '0s', duration: '4.2s' },
  { name: 'PostgreSQL', icon: Server, delay: '0.4s', duration: '3.8s' },
  { name: 'BigQuery', icon: Cloud, delay: '0.8s', duration: '4.5s' },
  { name: 'Looker', icon: Eye, delay: '1.2s', duration: '3.6s' },
  { name: 'Power BI', icon: BarChart3, delay: '0.2s', duration: '4s' },
  { name: 'PowerPoint', icon: Monitor, delay: '1s', duration: '3.9s' },
  { name: 'Jupyter Notebook', icon: BookOpen, delay: '0.6s', duration: '4.3s' },
  { name: 'Excel', icon: FileSpreadsheet, delay: '1.4s', duration: '3.7s' },
  { name: 'Google Colab', icon: Terminal, delay: '0.3s', duration: '4.1s' },
  { name: 'Git', icon: GitBranch, delay: '1.6s', duration: '3.5s' },
  { name: 'Google Sheets', icon: FileSpreadsheet, delay: '0.5s', duration: '4.4s' },
  { name: 'Google Forms', icon: ClipboardList, delay: '1.1s', duration: '3.8s' },
  { name: 'KoboToolbox', icon: Globe, delay: '0.9s', duration: '4.6s' },
  { name: 'Power Automate', icon: Workflow, delay: '0.1s', duration: '3.9s' },
  { name: 'MS Word', icon: FileText, delay: '1.3s', duration: '4.2s' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">

      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            My favorite{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              tools
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring the tools behind my analysis — the ones I rely on
            to collect, clean, analyse, and present data every day.
          </p>

        </div>

        {/* Floating Tools Cloud */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-card/60 border border-border/50 backdrop-blur-sm hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110 cursor-default select-none"
                style={{
                  animationName: 'float-tool',
                  animationDuration: tool.duration,
                  animationDelay: tool.delay,
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                }}
              >
                <Icon className="w-4 h-4 text-emerald-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="text-sm font-medium text-foreground/90 group-hover:text-emerald-400 transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            );
          })}

        </div>

      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Float Animation Keyframes */}
      <style>{`
        @keyframes float-tool {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

    </section>
  );
}
