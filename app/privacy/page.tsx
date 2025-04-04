import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            At Tomio, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your
            personal information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, phone number, and
            business information when you fill out our contact form, subscribe to our newsletter, or engage our
            services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about our services, promotions, and events</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze how you use our website to improve user experience</li>
            <li>Protect against, identify, and prevent fraud and other illegal activity</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except in the
            following circumstances:
          </p>
          <ul>
            <li>
              With vendors, consultants, and service providers who need access to such information to carry out work on
              our behalf
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with any applicable
              law, regulation, or legal process
            </li>
            <li>
              If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of Tomio or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized
            access, disclosure, alteration, and destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the
            right to access, correct, or delete your personal information.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 16, and we do not knowingly collect personal information
            from children under 16.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
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

