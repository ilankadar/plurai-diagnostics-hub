
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-16">
        {/* Content Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Privacy Policy
              </h1>
              <p className="text-gray-400 mb-6">Effective Date: January 1st, 2025</p>

              <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  At Plurai Inc ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Account credentials</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Providing and maintaining our services</li>
                  <li>Improving user experience</li>
                  <li>Communicating with you about updates and changes</li>
                  <li>Analyzing usage patterns and trends</li>
                </ul>
              </section>

              <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        {/* Let's Get Started Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-black/80">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Let's Get Started
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            At Plurai, we're committed to accelerating GenAI adoption. Let's make your agents reliable, aligned with your business needs, and ready for confident deployment. Book a demo to see how we can help!
            </p>
            <Link to="/contact-us">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-black font-medium px-8 rounded-full"
              >
                Book A Demo
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
