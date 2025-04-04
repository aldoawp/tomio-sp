import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to Tomio. By accessing or using our website and services, you agree to be bound by these Terms and
            Conditions.
          </p>

          <h2>1. Services</h2>
          <p>
            Tomio provides strategic consulting services for social media marketing, specifically focused on Instagram
            and TikTok. Our services include, but are not limited to, content strategy development, brand positioning,
            and marketing consultation.
          </p>

          <h2>2. Client Responsibilities</h2>
          <p>
            Clients are responsible for providing necessary information, materials, and approvals in a timely manner.
            Clients are also responsible for implementing the strategies and recommendations provided by Tomio.
          </p>

          <h2>3. Payment Terms</h2>
          <p>
            Payment terms will be outlined in the service agreement provided to each client. Generally, payment is
            required before services begin, and recurring payments may be required for ongoing services.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All materials, strategies, and content created by Tomio remain the intellectual property of Tomio until full
            payment is received. After payment, clients receive a license to use these materials for their business
            purposes.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Tomio agrees to keep all client information confidential. Similarly, clients agree not to share proprietary
            strategies and materials provided by Tomio with third parties without written permission.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Tomio is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of
            our services. While we strive to provide effective strategies, we cannot guarantee specific results as
            social media platforms frequently change their algorithms and policies.
          </p>

          <h2>7. Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice as specified in the service agreement.
            Any fees paid for services not yet rendered may be refundable as outlined in the service agreement.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of [Jurisdiction]. Any disputes arising from these terms
            will be resolved in the courts of [Jurisdiction].
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            Tomio reserves the right to modify these Terms and Conditions at any time. Changes will be effective
            immediately upon posting to our website. Continued use of our services after changes constitutes acceptance
            of the new terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at{" "}
            <Link href="mailto:contact@tomio.com" className="text-primary hover:underline">
              contact@tomio.com
            </Link>
            .
          </p>

          <p className="mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

