import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - AIHeadshotGen',
  description: 'Terms of Service for AIHeadshotGen AI headshot generator platform',
  openGraph: {
    title: 'Terms of Service - AIHeadshotGen',
    description: 'Terms of Service for AIHeadshotGen AI headshot generator platform',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#22223b] mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 22, 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using AIHeadshotGen ("Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              AIHeadshotGen is an AI-powered headshot generation service that transforms your photos into professional portraits.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">2. Description of Service</h2>
            <p className="mb-4">AIHeadshotGen provides:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>AI-powered professional headshot generation</li>
              <li>Background replacement and enhancement tools</li>
              <li>Multiple professional styling templates</li>
              <li>High-resolution image downloads</li>
              <li>Free preview tier with watermarked images</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">3.1 Eligible Use</h3>
            <p className="mb-4">You must be at least 18 years old to use this service. If you are between 13-17 years old, you may only use the service with parental consent and supervision.</p>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">3.2 Photo Upload Requirements</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>You must own or have permission to use all uploaded photos</li>
              <li>Photos must not contain illegal, harmful, or inappropriate content</li>
              <li>You cannot upload photos of other people without their explicit consent</li>
              <li>Photos must comply with applicable laws in your jurisdiction</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">4. AI Generation and Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">4.1 Generated Images</h3>
            <p className="mb-4">
              You retain ownership of your original uploaded photos. Generated headshots are created using AI technology, 
              and you receive a non-exclusive license to use the generated images for personal and commercial purposes.
            </p>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">4.2 Model Training</h3>
            <p className="mb-6">
              <strong>We do NOT use your uploaded photos or generated images to train our AI models.</strong> 
              All user content is processed for generation purposes only and automatically deleted within 24 hours.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">5. Privacy and Data Protection</h2>
            <p className="mb-4">We are committed to protecting your privacy:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>All uploaded photos are encrypted during transmission and storage</li>
              <li>Original photos and generated results are automatically deleted within 24 hours</li>
              <li>No personal data is sold or shared with third parties</li>
              <li>See our Privacy Policy for detailed information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">6. Prohibited Uses</h2>
            <p className="mb-4">You agree not to use the service for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Creating deepfakes or misleading content</li>
              <li>Impersonating others without permission</li>
              <li>Generating content that violates any laws</li>
              <li>Commercial fraud or deceptive practices</li>
              <li>Harassment, defamation, or harmful activities</li>
              <li>Reverse engineering or attempting to extract our AI models</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">7. Payment and Refunds</h2>
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">7.1 Free Tier</h3>
            <p className="mb-4">
              Our free tier provides unlimited watermarked previews. No payment or registration required for basic testing.
            </p>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">7.2 Paid Services</h3>
            <p className="mb-4">
              Premium features require payment through our secure payment processors. 
              Refunds are provided within 7 days if you're unsatisfied with the quality of generated images.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">8. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">8.1 AI Technology Limitations</h3>
            <p className="mb-4">
              AI-generated images may not always be perfect. Results depend on input photo quality, 
              lighting, and other factors. We provide unlimited regeneration attempts to achieve satisfactory results.
            </p>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">8.2 Service Availability</h3>
            <p className="mb-6">
              We strive for 99% uptime but cannot guarantee uninterrupted service. 
              We reserve the right to modify or discontinue features with reasonable notice.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">9. Compliance with Laws</h2>
            <p className="mb-4">This service complies with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>General Data Protection Regulation (GDPR) for EU users</li>
              <li>California Consumer Privacy Act (CCPA) for California residents</li>
              <li>Federal Trade Commission (FTC) guidelines for AI services</li>
              <li>Applicable international data protection laws</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">10. Termination</h2>
            <p className="mb-6">
              Either party may terminate this agreement at any time. Upon termination, 
              your access to the service will cease, and any remaining credits will be refunded pro-rata.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">11. Changes to Terms</h2>
            <p className="mb-6">
              We may modify these terms with 30 days notice via email or website announcement. 
              Continued use after changes constitutes acceptance of new terms.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Email:</strong> legal@aiheadshotgen.com</p>
              <p><strong>Website:</strong> https://aiheadshotgen.com</p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">13. Governing Law</h2>
            <p className="mb-6">
              These terms are governed by the laws of [YOUR JURISDICTION], 
              and any disputes will be resolved in the courts of [YOUR JURISDICTION].
            </p>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                By using AIHeadshotGen, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 