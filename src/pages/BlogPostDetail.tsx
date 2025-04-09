
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { blogPosts } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Pin, User } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "@/components/LanguageSelector";

const BlogPostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<string>("eng");
  
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  // Get available languages
  const availableLanguages = post.contentMultiLang?.map(content => content.lang) || [];
  
  // Get content in current language or fallback to default content
  const getContent = () => {
    if (post.contentMultiLang && post.contentMultiLang.length > 0) {
      const langContent = post.contentMultiLang.find(content => content.lang === currentLang);
      return langContent ? langContent.content : post.content;
    }
    return post.content;
  };
  
  return (
    <Layout>
      <article className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 animate-on-scroll">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="animate-on-scroll">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
                {post.isPinned && (
                  <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                    <Pin className="h-4 w-4 mr-1" />
                    <span>Pinned</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center mb-6 text-muted-foreground">
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
              
              {availableLanguages.length > 0 && (
                <LanguageSelector
                  currentLang={currentLang}
                  availableLanguages={availableLanguages}
                  onChange={setCurrentLang}
                  className="mb-6"
                />
              )}
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: getContent() }} />
              </div>
              
              <div className="border-t pt-6 mt-8">
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className={cn(
                        "bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm",
                        "hover:bg-secondary/80 transition-colors"
                      )}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostDetailPage;
