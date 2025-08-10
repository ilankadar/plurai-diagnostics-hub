
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DiagnosticFeature } from "./DiagnosticFeature";
import { diagnosticFeatures } from "./productData";
import { BookOpen } from "lucide-react";

export const DiagnosticsCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
      <CardHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex items-center justify-center">
              <img
                src="/lovable-uploads/ac963883-86f6-4ab7-b56c-638d4441b272.png"
                alt="Plurai Logo"
                className="w-48 h-48 object-contain"
              />
            </div>
            <div className="text-center">
              <CardDescription className="text-lg text-gray-600">
                Deploy Reliable & Impactful Agents You Can Trust
              </CardDescription>
            </div>
          </div>
          <div className="mb-6">
            <DiagnosticFeature features={diagnosticFeatures} />
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white whitespace-normal text-left h-auto py-2 flex items-center gap-2 rounded-full" 
              size="sm"
              onClick={() => window.open('https://plurai.substack.com/p/introducing-intellagent-your-agent', '_blank')}
            >
              <BookOpen className="h-4 w-4" />
              Learn More
            </Button>
            <Button
              className="bg-primary hover:bg-primary-dark text-white whitespace-normal text-left h-auto py-2 flex items-center gap-2 rounded-full"
              size="sm"
              onClick={() => navigate('/contact-us')}
            >
              Book A Demo
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
