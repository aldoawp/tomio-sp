import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            This Cookie Policy explains how Tomio uses cookies and similar technologies to recognize you when you visit
            our website. It explains what these technologies are and why we use them, as well as your rights to control
            our use of them.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well
            as to provide reporting information.
          </p>

          <h2>2. Why Do We Use Cookies?</h2>
          <p>We use cookies for several reasons:</p>
          <ul>
            <li>Essential cookies: These are necessary for the website to function properly</li>
            <li>
              Analytical/performance cookies: These allow us to recognize and count the number of visitors and see how
              visitors move around our website
            </li>
            <li>Functionality cookies: These are used to recognize you when you return to our website</li>
            <li>
              Targeting cookies: These record your visit to our website, the pages you have visited, and the links you
              have followed
            </li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <p>The specific types of cookies served through our website and the purposes they perform include:</p>
          <ul>
            <li>
              <strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser
            </li>
            <li>
              <strong>Persistent Cookies:</strong> These cookies remain on your device until you delete them or they
              expire
            </li>
            <li>
              <strong>First-Party Cookies:</strong> These are cookies that belong to Tomio
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> These are cookies that another party places on your device through
              our website
            </li>
          </ul>

          <h2>4. How to Control Cookies</h2>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
            you may still use our website though your access to some functionality and areas of our website may be
            restricted.
          </p>

          <h2>5. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at{" "}
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

