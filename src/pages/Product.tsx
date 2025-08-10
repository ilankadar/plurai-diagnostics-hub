
import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import { categorizedFeatures } from "@/components/products/productData";

const Product = () => {
  // Combine all features for backward compatibility
  const allFeatures = [
    ...categorizedFeatures.automatedTesting,
    ...categorizedFeatures.qualityAndRisk
  ];

  return (
    <div className="min-h-screen pt-16 bg-purple-muted">
      <Navigation />
      <Products features={allFeatures} />
    </div>
  );
};

export default Product;
