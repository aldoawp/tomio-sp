import Link from "next/link"

export default function GDPRPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">GDPR Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            At Tomio, we are committed to protecting and respecting your privacy in compliance with the EU General Data
            Protection Regulation (GDPR).
          </p>

          <h2>1. Data Controller</h2>
          <p>
            Tomio is the data controller for the personal information we collect and process. If you have any questions
            about this policy, or how we handle your personal data, please contact us at{" "}
            <Link href="mailto:contact@tomio.com" className="text-primary hover:underline">
              contact@tomio.com
            </Link>
            .
          </p>

          <h2>2. Your Rights Under GDPR</h2>
          <p>Under the GDPR, you have several rights regarding your personal data:</p>
          <ul>
            <li>
              <strong>Right to Access:</strong> You have the right to request a copy of the personal data we hold about
              you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate
              personal data we hold about you.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You have the right to request that we delete your personal data in
              certain circumstances.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the
              processing of your personal data in certain circumstances.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to request that we transfer your personal
              data to another service provider in certain circumstances.
            </li>
            <li>
              <strong>Right to Object:</strong> You have the right to object to the processing of your personal data in
              certain circumstances.
            </li>
          </ul>

          <h2>3. Data We Collect</h2>
          <p>We collect and process the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Identity Data:</strong> Including first name, last name, username or similar identifier.
            </li>
            <li>
              <strong>Contact Data:</strong> Including email address, telephone number, and address.
            </li>
            <li>
              <strong>Technical Data:</strong> Including internet protocol (IP) address, browser type and version, time
              zone setting and location, browser plug-in types and versions, operating system and platform, and other
              technology on the devices you use to access our website.
            </li>
            <li>
              <strong>Usage Data:</strong> Including information about how you use our website and services.
            </li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We will only process your personal data when the law allows us to. Most commonly, we will use your personal
            data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and
              fundamental rights do not override those interests.
            </li>
            <li>Where we need to comply with a legal obligation.</li>
            <li>Where you have given us consent to process your personal data for a specific purpose.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h2>6. International Transfers</h2>
          <p>
            We may transfer your personal data to countries outside the European Economic Area (EEA). Whenever we
            transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by
            ensuring at least one of the following safeguards is implemented:
          </p>
          <ul>
            <li>
              We will only transfer your personal data to countries that have been deemed to provide an adequate level
              of protection for personal data by the European Commission.
            </li>
            <li>
              Where we use certain service providers, we may use specific contracts approved by the European Commission
              which give personal data the same protection it has in Europe.
            </li>
          </ul>

          <h2>7. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your
            personal data to those employees, agents, contractors, and other third parties who have a business need to
            know.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this GDPR Policy from time to time. We will notify you of any changes by posting the new
            policy on this page and updating the "Last Updated" date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this GDPR Policy, please contact us at{" "}
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

