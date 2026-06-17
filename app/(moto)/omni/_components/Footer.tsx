import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pb-10 pt-8 bg-white">
      <div className="custom-container">

        {/* Main Footer Wrapper */}
        <div className="border-2 border-gray-200 rounded-[2rem] bg-white px-8 md:px-12 py-10 shadow-sm" data-aos="fade-up">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-10">

            {/* Column 1: Logo and Text */}
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <img
                src="/moto/omni/footerlogo.png"
                alt="OMNI Specialty Packaging, LLC"
                className="w-70 object-contain"
              />
              <p className="font-(family-name:--font-exo-2) footer-text text-[#333] mt-2 leading-normal">
  Since 1978, OMNI Specialty Packaging has blended
  <br />
  performance, precision, and partnership into every drop.
</p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-1 flex flex-col space-y-4 lg:pl-4">
              <h4 className="font-(family-name:--font-bebas-neue) footer-heading text-[#333333] !font-normal uppercase tracking-wide">
  QUICK LINKS
</h4>
              <ul className="flex flex-col space-y-3">
                {["Home", "About", "Products", "Services", "See All"].map((link) => (
                  <li key={link}>
                    <Link
  href="#"
  className="font-(family-name:--font-exo-2) footer-text text-[#333] leading-normal"
>
  {link}
</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="lg:col-span-1 flex flex-col space-y-4">
              <h4 className="font-(family-name:--font-bebas-neue) footer-heading text-[#333333] !font-normal uppercase tracking-wide">
PRODUCTS</h4>
              <ul className="flex flex-col space-y-3">
                {["Pure Guard", "Xtra Rev"].map((link) => (
                  <li key={link}>
                    <Link
  href="#"
  className="font-(family-name:--font-exo-2) footer-text text-[#333] leading-normal"
>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="lg:col-span-1 flex flex-col space-y-4">
             <h4 className="font-(family-name:--font-bebas-neue) footer-heading text-[#333333] !font-normal uppercase tracking-wide">
CONTACT US</h4>
              <ul className="flex flex-col space-y-3">
                <li>
                  <span className="font-(family-name:--font-exo-2) text-gray-900 !lg:text-[16px] !xl:text-[22px]">
                    <span className="font-semibold text-gray-900  ">Phone:</span> +1 (318) 524-1100
                  </span>
                </li>
                <li>
                  <span className="font-(family-name:--font-exo-2) text-gray-900 !lg:text-[16px] !xl:text-[22px]">
                    Shreveport, Louisiana, USA
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 5: Specialties */}
            <div className="lg:col-span-1 flex flex-col space-y-4">
              <h4 className="font-(family-name:--font-bebas-neue) footer-heading text-[#333333] !font-normal uppercase tracking-wide">
SPECIALTIES</h4>
              <ul className="flex flex-col space-y-3">
                {["Manufacturing", "Blending", "Private Label Packaging"].map((link) => (
                  <li key={link}>
                    <Link
  href="#"
  className="font-(family-name:--font-exo-2) footer-text text-[#333] leading-normal"
>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-6"></div>

          {/* Copyright */}
          <div className="font-(family-name:--font-exo-2) footer-copyright text-center text-gray-700">
  © 2006-2022 Omni Specialty Packaging, LLC |
  <Link href="#" className="hover:text-gray-600">
    Contact Us
  </Link>
</div>

        </div>

      </div>
    </footer>
  );
}
