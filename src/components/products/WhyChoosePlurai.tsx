
import { LucideIcon } from "lucide-react";
import { features } from "./productData";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WhyChoosePlurai = () => {
  return (
    <div className="text-center mb-20">
      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple mb-4">
        Why Choose Plurai?
      </h3>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Our platform combines cutting-edge AI capabilities with industry expertise to deliver solutions that drive real impact.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature: Feature, index) => (
          <div 
            key={feature.title} 
            className="relative bg-gradient-to-br from-white/5 to-primary/5 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/20 dark:border-primary/10 group"
          >
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary/20 to-purple/20 dark:from-primary/30 dark:to-purple/30 p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
              <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary/90 dark:text-primary/90 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
