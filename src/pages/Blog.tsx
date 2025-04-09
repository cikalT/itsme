
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { blogPosts } from "@/data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Extract unique tags from blog posts
  const uniqueTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();
  
  // Filter blog posts based on search query and active tag
  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      
      return matchesSearch && matchesTag;
    });
    
    // Sort to show pinned posts first
    filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return 0;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, activeTag]);
  
  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Blog"
            subtitle="Thoughts, tutorials, and insights"
            center
          />

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center border rounded-md overflow-hidden bg-background">
              <div className="px-3">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                variant={activeTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTag(null)}
              >
                All Posts
              </Button>
              {uniqueTags.map(tag => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className={cn(
                      "border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow",
                      "animate-on-scroll",
                      post.isPinned && "border-primary/30 bg-primary/5"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <div className="h-full relative">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          {post.isPinned && (
                            <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 px-2 py-1 rounded-full flex items-center shadow">
                              <Pin className="h-3 w-3 mr-1" />
                              <span className="text-xs font-medium">Pinned</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-center mb-2 text-sm">
                          <span className="text-muted-foreground">{post.date}</span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-primary">{post.author}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button asChild size="sm">
                          <Link to={`/itsme/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No blog posts match your criteria.</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setActiveTag(null);
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
