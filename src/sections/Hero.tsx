import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Database,
  BarChart3,
  Workflow,
} from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.7,
    }));

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        // Data points
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = 'rgba(16, 185, 129, 0.45)';
        ctx.fill();

        // Connections between data points
        particles.slice(index + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            const opacity = 0.15 * (1 - distance / 140);
            ctx.strokeStyle = 'rgba(16, 185, 129, ' + opacity + ')';

            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollTo = (section: string) => {
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse-glow" />

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          {/* Small introduction */}
          <div className="mb-8 inline-flex">
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium flex items-center gap-2">
              <Database className="w-4 h-4" />
              Turning Data Into Decisions
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            I turn{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              messy data
            </span>{' '}
            into clear decisions.
          </h1>

          {/* Professional title */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Data Analyst
            <span className="text-emerald-400"> | </span>
            Business Intelligence
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-5">
            I analyse complex datasets, uncover patterns and trends,
            and translate findings into practical insights that help
            organisations understand performance and make better decisions.
          </p>

          <p className="text-base md:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
            From data preparation and quality checks to reporting,
            visualisation and workflow automation, I focus on turning
            information into something people can actually use.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">

            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 shadow-lg shadow-emerald-500/20"
              onClick={() => scrollTo('projects')}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Explore My Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/40 hover:bg-emerald-500/10 px-8"
              onClick={() => scrollTo('about')}
            >
              About Me
            </Button>

          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">

            {/* Analysis */}
            <div className="group p-5 rounded-xl bg-secondary/30 border border-border/40 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">

              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="font-semibold mb-1">
                Analyse
              </h3>

              <p className="text-sm text-muted-foreground">
                Find patterns, trends and performance gaps hidden in data.
              </p>

            </div>

            {/* Visualise */}
            <div className="group p-5 rounded-xl bg-secondary/30 border border-border/40 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">

              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="font-semibold mb-1">
                Visualise
              </h3>

              <p className="text-sm text-muted-foreground">
                Turn complex information into clear, useful reports and dashboards.
              </p>

            </div>

            {/* Automate */}
            <div className="group p-5 rounded-xl bg-secondary/30 border border-border/40 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">

              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="font-semibold mb-1">
                Improve
              </h3>

              <p className="text-sm text-muted-foreground">
                Streamline reporting and reduce repetitive manual work.
              </p>

            </div>

          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-secondary/50 hover:bg-emerald-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-secondary/50 hover:bg-emerald-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="p-3 rounded-full bg-secondary/50 hover:bg-emerald-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
            </a>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>

    </section>
  );
}
