import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ExternalLink, Search, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Superstore Sales Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 9,994 sales records across Furniture, Office Supplies, and Technology categories. Features shipping analysis, discount impact assessment, and regional performance metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Visualization',
    tags: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    date: 'August 2026',
    externalUrl: 'https://app.powerbi.com/reportEmbed?reportId=bdf76caf-e0e5-4237-8da7-94cd5b88c6d8&autoAuth=true&ctid=8fb5a1aa-c3d3-42ce-87df-4dbe3748c2be',
    featured: true,
  },
];

const categories = ['All', 'Visualization', 'SQL', 'Machine Learning', 'Automation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of data-driven work — dashboards, analyses, and
            automated solutions built to solve real problems.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, tools, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-secondary/30 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-14 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-0'
                  : 'border-emerald-500/30 text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Project — Large Banner Style */}
        {featuredProject && activeCategory === 'All' && !searchQuery && (
          <div className="mb-14">
            <a
              href={featuredProject.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Background Image with overlay */}
              <div className="relative h-[400px] md:h-[450px]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-emerald-600 text-white border-0">
                      Featured
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {featuredProject.category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {featuredProject.title}
                  </h3>

                  <p className="text-lg text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                      View Project <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Projects Grid — Dark Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p !== featuredProject || activeCategory !== 'All' || searchQuery)
            .map((project, index) => (
              <a
                key={project.id}
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl bg-card/40 border border-border/40 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />

                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-emerald-600/90 text-white border-0">
                      Featured
                    </Badge>
                  )}

                  {/* Hover overlay icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/30 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
