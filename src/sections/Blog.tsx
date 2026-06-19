import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, ArrowRight, Search, ExternalLink } from 'lucide-react';

const EXTERNAL_BLOG_URL = 'https://your-blog-site.com'; // <-- REPLACE WITH YOUR ACTUAL BLOG URL

const blogPosts = [
  {
    id: 1,
    title: 'Predicting Customer Churn: A Machine Learning Approach',
    excerpt: 'How I built a Random Forest classifier to identify at-risk customers with 89% accuracy, saving the company $500K in retention costs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    category: 'Machine Learning',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Classification'],
    author: 'Audrey Murigi',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    featured: true,
    externalUrl: `${EXTERNAL_BLOG_URL}/predicting-customer-churn`, // <-- Your article URL
  },
];

const categories = ['All', 'Machine Learning', 'SQL', 'Visualization', 'Statistics', 'Tutorial', 'Data Engineering'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
            Data Insights &{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Tutorials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing lessons learned, technical deep-dives, and practical guides from the world of data analytics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Category Filter */}
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
                  : 'border-gray-200 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && !searchQuery && (
          <div className="mb-12">
            <a 
              href={featuredPost.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="text-emerald-600 font-medium">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                    Read Article <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(p => p !== featuredPost || activeCategory !== 'All' || searchQuery).map((post, index) => (
            <a
              key={post.id}
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover "Read Article" */}
                <div className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2 text-lg">
                    Read Article <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                    {post.category}
                  </Badge>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </section>
  );
}
