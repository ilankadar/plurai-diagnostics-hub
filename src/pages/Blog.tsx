import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Blog = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our blog updates.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9b87f5]/15 via-[#7E69AB]/10 to-white dark:from-[#6E59A5]/30 dark:to-gray-800 relative overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Welcome to the Plurai Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Stay ahead in Generative AI with expert insights, practical tips, and the latest trends in AI agents and chatbot optimization. 
              Our blog is your go-to resource for effortlessly elevating AI Agents performance and reliability.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/lovable-uploads/photo-1488590528505-98d2b5aba04b"
                alt="The Future of AI Development"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl">The Future of AI Development</CardTitle>
                <CardDescription className="line-clamp-2">
                  Discover how recent advances in AI are reshaping the development landscape and what skills you need to stay ahead. As we delve into the evolving world of artificial intelligence...
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img
                    src="/lovable-uploads/photo-1581091226825-a6a2a5aee158"
                    alt="Sarah Johnson"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Sarah Johnson</span>
                  <span>•</span>
                  <span>Mar 15, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a
                  href="https://linkedin.com/in/sarah-johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark flex items-center gap-1 text-sm"
                >
                  Read on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/lovable-uploads/photo-1486312338219-ce68d2c6f44d"
                alt="Optimizing AI Agents"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Optimizing AI Agents</CardTitle>
                <CardDescription className="line-clamp-2">
                  Learn the essential strategies for improving your AI agents' performance and user interaction capabilities. We explore the latest techniques in natural language processing...
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img
                    src="/lovable-uploads/photo-1498050108023-c5249f4df085"
                    alt="Michael Chen"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Michael Chen</span>
                  <span>•</span>
                  <span>Mar 12, 2024</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a
                  href="https://linkedin.com/in/michael-chen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark flex items-center gap-1 text-sm"
                >
                  Read on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/lovable-uploads/photo-1498050108023-c5249f4df085"
                alt="AI Integration Guide"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl">AI Integration Guide</CardTitle>
                <CardDescription className="line-clamp-2">
                  A comprehensive guide to integrating AI capabilities into your existing applications and workflows. From API integration to model deployment...
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img
                    src="/lovable-uploads/photo-1486312338219-ce68d2c6f44d"
                    alt="Emily Rodriguez"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Emily Rodriguez</span>
                  <span>•</span>
                  <span>Mar 10, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a
                  href="https://linkedin.com/in/emily-rodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark flex items-center gap-1 text-sm"
                >
                  Read on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/lovable-uploads/photo-1581091226825-a6a2a5aee158"
                alt="AI Security Best Practices"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl">AI Security Best Practices</CardTitle>
                <CardDescription className="line-clamp-2">
                  Essential security considerations and best practices for developing and deploying AI applications. Learn about data protection, model security...
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img
                    src="/lovable-uploads/photo-1488590528505-98d2b5aba04b"
                    alt="David Kim"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>David Kim</span>
                  <span>•</span>
                  <span>Mar 8, 2024</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a
                  href="https://linkedin.com/in/david-kim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark flex items-center gap-1 text-sm"
                >
                  Read on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Subscription Section */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 space-y-6 animate-fade-in border border-gray-100 dark:border-gray-700">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-900 dark:text-white font-medium">
                Stay inspired, stay informed, and never miss an update.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe now to receive expert insights straight to your inbox and take your chatbot agents to the next level!
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-background border-input"
              />
              <Button type="submit" className="whitespace-nowrap bg-primary hover:bg-primary-dark text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;