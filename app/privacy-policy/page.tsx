import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Privacy Policy</h1>
        
        <p className="mb-4">
          This Privacy Policy describes how Arcane Tobacco (a part of Arcane Holdings) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
        </p>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Collecting Personal Information</h2>
        <p className="mb-4">
          When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your inquiries. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual as “Personal Information”.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Device information:</strong> examples of Personal Information collected include version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
          <li><strong>Contact information:</strong> examples of Personal Information collected include name, email address, and phone number, as provided through our contact forms.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Using Personal Information</h2>
        <p className="mb-4">
          We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.
        </p>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Sharing Personal Information</h2>
        <p className="mb-4">
          We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        </p>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Data Retention</h2>
        <p className="mb-4">
          When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information.
        </p>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">
          If you are a resident of certain jurisdictions, you may have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          This document is for placeholder purposes only and should be reviewed by a legal professional to ensure it meets all legal and regulatory requirements, such as GDPR, CCPA, etc.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
