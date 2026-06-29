import Container from "./Container";

const footerLinks = [
  {
    title: "Products",
    links: [
      "About Our Products",
      "Blades & Scalpels",
      "Blood Collection",
      "Needles & Syringes",
      "Sharps Safety",
      "Wound Closure",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Diversity & Inclusion",
      "History & Awards",
      "Strategic Partners",
      "Medical Advisory Board",
      "News & Events",
    ],
  },
  {
    title: "Contact",
    links: ["How To Order", "Contact Sales", "Request Sample", "Contact Us"],
  },
  {
    title: "More",
    links: ["Patents", "Careers", "Terms of Business", "Quality Policy"],
  },
];


function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#005B8E] text-white">
      <Container>
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_1fr] lg:grid-cols-[30fr_20fr_20fr_20fr_10fr] gap-10 py-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4 content-white font-normal!">
            <img
              src="/medical/myco-medical/logo.png"
              alt="Myco Medical"
              className="h-26 w-auto object-contain self-start"
            />
            <p>
              Some medical devices are not licensed for sale in Canada.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPinIcon  />
                <span>2015 Production Drive, Apex, NC 27539</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span>919.460.2535</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-[24px]! content-white mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="content-white hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/25 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="content-white font-bold">Follow Us On</span>
            <div className="flex items-center gap-3">
              {[
                { src: "/medical/myco-medical/socials/facebook.png", label: "Facebook" },
                { src: "/medical/myco-medical/socials/twitter.png", label: "Twitter" },
                { src: "/medical/myco-medical/socials/linkedin.png", label: "LinkedIn" },
                { src: "/medical/myco-medical/socials/youtube.png", label: "YouTube" },
              ].map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={src} alt={label} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="content-white font-medium!">
            © 2026 MYCO Medical Supplies, Inc. – All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
