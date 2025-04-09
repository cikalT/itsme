
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";

// Import pages
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
// import Blog from "./pages/Blog";
// import BlogPostDetail from "./pages/BlogPostDetail";
import Contact from "./pages/Contact";
import Photography from "./pages/Photography";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Add font link
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light-ocean">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/blog/:slug" element={<BlogPostDetail />} /> */}
              <Route path="/photography" element={<Photography />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
