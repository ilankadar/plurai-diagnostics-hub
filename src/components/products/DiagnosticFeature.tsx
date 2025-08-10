import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface DiagnosticFeatureProps {
  features: Feature[];
}

export const DiagnosticFeature = ({ features }: DiagnosticFeatureProps) => {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-3 transition-transform duration-200 hover:scale-105"
        >
          <feature.icon 
            className="h-5 w-5 mt-1 flex-shrink-0 text-primary"
          />
          <p className="text-center flex-1">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};