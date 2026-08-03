import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';

// Helper function to create URL-friendly slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/-+/g, '-');          // Remove multiple consecutive hyphens
}

const projects = [
  {
    id: 1,
    title: 'Superstore Sales Dashboard',
    description: 'Interactive Power BI dashboard analyzing 9,994 sales records across Furniture, Office Supplies, and Technology categories. Features shipping analysis, discount impact assessment, and regional performance metrics with dynamic filtering.',
    content: `
## Project Overview

Built a comprehensive sales analytics solution using Power BI that transformed raw Superstore data into actionable business insights across three interconnected reports.

## Key Features
- **3 Interactive Reports:** Sales Overview, Shipping & Delivery Analysis, Discount & Profitability Deep Dive
- **Dynamic Filtering:** Slicers for Region, Category, Segment, and Ship Mode across all pages
- **Shipping Analysis:** Calculated shipping duration (Order Date vs Ship Date) with breakdown by Category, Location, Segment, and Quantity
- **Discount Impact Assessment:** Identified that all three categories (Furniture, Office Supplies, Technology) become unprofitable when discounts are applied (avg 48.1%, range 10%-80%)
- **Geographic Visualization:** Filled map showing sales and shipping performance by state
- **Custom DAX Measures:** Shipping Days, Profit Margin, Discount Bins, Quantity Bins

## Data Cleaning & Preparation
- Loaded CSV via Power Query
- Fixed date formats and removed duplicates
- Created calculated columns: Shipping Days, Quantity Bin, Discount Bin, Profit Margin
- Standardized text fields and handled blank values
- Verified data types for all columns

## Key Findings
- **West region** leads in total sales but **East region** has the highest profit margin
- **Technology** is the most profitable category; **Furniture** has the lowest margins
- **All negative profits have discounts applied** — average discount on unprofitable orders is 48.1%
- **Shipping delays correlate with lower profit** — orders with >5 day shipping show reduced profitability
- **California and New York** are top-performing states
- Sales show strong seasonal patterns with Q4 peaks

## Recommendations
- Cap discounts at 15% for Furniture, 20% for Office Supplies, 25% for Technology
- Invest in Technology category expansion, particularly in the East region
- Review Furniture pricing strategy — reduce discounts or increase prices
- Prepare inventory for Q4 seasonal surge, especially in CA and NY
- Investigate Central region shipping delays (longest average shipping time)

## Technologies Used
Power BI, Power Query, DAX, Excel
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=bdf76caf-e0e5-4237-8da7-94cd5b88c6d8&autoAuth=true&ctid=8fb5a1aa-c3d3-42ce-87df-4dbe3748c2be',
    githubUrl: '#',
    featured: true,
  },
];

const categories = ['All', 'Visualization'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Handle URL hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Match #projects/slug-name pattern
      const match = hash.match(/#projects\/(.+)/);
      if (match) {
        const slug = match[1];
        // Find project by matching slug
        const project = projects.find(p => createSlug(p.title) === slug);
        if (project) {
          setSelectedProject(project);
        }
      } else if (hash === '#projects') {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL when project changes
  useEffect(() => {
    if (selectedProject) {
      const slug = createSlug(selectedProject.title);
      window.location.hash = `#projects/${slug}`;
    } else if (window.location.hash.includes('/')) {
      window.location.hash = '#projects';
    }
  }, [selectedProject]);

  // Lock body scroll when project is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => {
        if (activeCategory === 'Visualization') return p.tags.some(t => ['Power BI', 'Tableau', 'Looker', 'Matplotlib', 'ggplot2'].includes(t));
        return true;
      });

  return (
    <>
      {/* FULL PAGE VIEW */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] bg-background overflow-y-auto">
          {/* Back Button */}
          <div className="fixed top-4 left-4 z-50">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => setSelectedProject(null)}
              className="bg-background/95 backdrop-blur border-border hover:bg-emerald-500/10 hover:border-emerald-500/30"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Button>
          </div>

          <div className="min-h-screen">
            {/* Hero Image - NO FADE, clean edges */}
            <div className="relative h-[50vh] w-full overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              {/* NO gradient overlay - clean image */}
            </div>

            {/* Title Section - Below image */}
            <div className="bg-background border-b border-border">
              <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {selectedProject.featured && (
                    <Badge className="bg-emerald-600 text-white text-sm px-3 py-1">Featured</Badge>
                  )}
                  {selectedProject.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                  {selectedProject.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-background">
              <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-16">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Dashboard
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-border text-foreground font-semibold text-lg hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>

                {/* Power BI Embed */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Live Dashboard</h3>
                  <div className="w-full overflow-hidden rounded-xl border border-border shadow-lg">
                    <iframe 
                      title="Superstore Report" 
                      width="100%" 
                      height="541" 
                      src="https://app.powerbi.com/reportEmbed?reportId=bdf76caf-e0e5-4237-8da7-94cd5b88c6d8&autoAuth=true&ctid=8fb5a1aa-c3d3-42ce-87df-4dbe3748c2be" 
                      frameBorder="0" 
                      allowFullScreen={true}
                      className="w-full"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Interactive Power BI dashboard — use the navigation tabs and slicers to explore the data.
                  </p>
                </div>

                {/* Full Content */}
                <div className="prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GRID VIEW */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of data-driven projects demonstrating expertise in analytics, 
              visualization, and statistical modeling.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white'
                    : 'border-emerald-500/30 hover:bg-emerald-500/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-emerald-600/90 text-white">
                      Featured
                    </Badge>
                  )}

                  <div className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2 text-lg">
                      View Project <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
