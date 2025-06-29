import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - AIHeadshotGen',
  description: 'Privacy Policy for AIHeadshotGen AI headshot generator platform',
  openGraph: {
    title: 'Privacy Policy - AIHeadshotGen',
    description: 'Privacy Policy for AIHeadshotGen AI headshot generator platform',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#22223b] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 22, 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">1. Introduction</h2>
            <p className="mb-6">
              AIHeadshotGen ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our AI headshot generation service.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="font-semibold text-blue-800 mb-2">🔒 Privacy First Promise</p>
              <p className="text-blue-700">
                Your photos are automatically deleted within 24 hours. We never use your images to train AI models. 
                Your privacy is not for sale.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">2.1 Photos and Images</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Original Photos:</strong> Images you upload for AI processing</li>
              <li><strong>Generated Images:</strong> AI-created headshots based on your photos</li>
              <li><strong>Automatic Deletion:</strong> All images are permanently deleted within 24 hours</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">2.2 Technical Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address (for security and fraud prevention)</li>
              <li>Browser type and version</li>
              <li>Device information (mobile/desktop)</li>
              <li>Usage analytics (pages visited, features used)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">2.3 Account Information (Optional)</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Email address (for premium accounts only)</li>
              <li>Payment information (processed by secure third-party providers)</li>
              <li>Usage history and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">3.1 Service Provision</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Generate AI headshots from your uploaded photos</li>
              <li>Provide background replacement and styling options</li>
              <li>Deliver high-quality image downloads</li>
              <li>Process payments for premium features</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyze usage patterns to improve user experience</li>
              <li>Monitor service performance and uptime</li>
              <li>Develop new features and templates</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">3.3 What We DON'T Do</h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <ul className="list-disc pl-6 text-red-700">
                <li><strong>NO AI Model Training:</strong> We never use your photos to train our AI models</li>
                <li><strong>NO Data Selling:</strong> We never sell your personal information to third parties</li>
                <li><strong>NO Permanent Storage:</strong> Your images are not kept beyond 24 hours</li>
                <li><strong>NO Facial Recognition Database:</strong> We don't build profiles or databases of faces</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">4. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">4.1 Encryption</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>End-to-end encryption for all photo uploads</li>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Encrypted storage during processing (maximum 24 hours)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">4.2 Access Controls</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Strict employee access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure cloud infrastructure with enterprise-grade protection</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">4.3 Automatic Deletion</h3>
            <p className="mb-6">
              All uploaded photos and generated images are automatically and permanently deleted from our servers within 24 hours of upload. 
              This deletion is irreversible and complete.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">5. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">5.1 GDPR Rights (EU Users)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right to Access:</strong> Request information about your data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Data Portability:</strong> Download your data</li>
              <li><strong>Right to Object:</strong> Opt out of certain data processing</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">5.2 CCPA Rights (California Users)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right to Know:</strong> What personal information we collect</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of sale of personal information (we don't sell data)</li>
              <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">5.3 How to Exercise Your Rights</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Email:</strong> privacy@aiheadshotgen.com</p>
              <p><strong>Response Time:</strong> Within 30 days</p>
              <p><strong>Verification:</strong> We may require identity verification for security</p>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">6. Cookies and Tracking</h2>
            
            <h3 className="text-xl font-semibold text-[#22223b] mb-3">6.1 Essential Cookies</h3>
            <p className="mb-4">
              We use essential cookies to provide our service, including session management and security features.
            </p>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">6.2 Analytics Cookies</h3>
            <p className="mb-4">
              We use analytics cookies to understand how users interact with our service and improve user experience. 
              You can opt out through your browser settings.
            </p>

            <h3 className="text-xl font-semibold text-[#22223b] mb-3">6.3 Third-Party Services</h3>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Google Analytics:</strong> Website usage analytics (anonymized)</li>
              <li><strong>Payment Processors:</strong> Secure payment processing (Stripe, PayPal)</li>
              <li><strong>Cloud Storage:</strong> Temporary image processing (AWS, Google Cloud)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">7. International Data Transfers</h2>
            <p className="mb-4">
              Your data may be processed in countries other than your residence. We ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
              <li>Adequacy decisions where applicable</li>
              <li>Enterprise-grade security regardless of processing location</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">8. Children's Privacy</h2>
            <p className="mb-6">
              Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. 
              Users aged 13-17 must have parental consent to use our service.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">9. Data Retention</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="font-semibold text-green-800 mb-2">🗑️ Automatic Deletion Schedule</p>
              <ul className="list-disc pl-6 text-green-700">
                <li><strong>Photos & Generated Images:</strong> Deleted within 24 hours</li>
                <li><strong>Account Data:</strong> Retained while account is active</li>
                <li><strong>Analytics Data:</strong> Anonymized and aggregated after 30 days</li>
                <li><strong>Payment Records:</strong> Retained for legal compliance (7 years)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">10. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
              We will notify users of significant changes via email or website notice 30 days in advance.
            </p>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">11. Contact Us</h2>
            <p className="mb-4">
              For privacy-related questions or concerns, contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Email:</strong> privacy@aiheadshotgen.com</p>
              <p><strong>Data Protection Officer:</strong> dpo@aiheadshotgen.com</p>
              <p><strong>Website:</strong> https://aiheadshotgen.com</p>
              <p><strong>Response Time:</strong> Within 72 hours</p>
            </div>

            <h2 className="text-2xl font-semibold text-[#22223b] mb-4">12. Regulatory Compliance</h2>
            <p className="mb-4">This Privacy Policy complies with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>General Data Protection Regulation (GDPR) - EU</li>
              <li>California Consumer Privacy Act (CCPA) - California, USA</li>
              <li>Personal Information Protection and Electronic Documents Act (PIPEDA) - Canada</li>
              <li>Privacy Act 1988 - Australia</li>
              <li>Other applicable international privacy laws</li>
            </ul>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                By using AIHeadshotGen, you acknowledge that you have read and understood this Privacy Policy 
                and consent to the collection and use of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 