"use client";

export default function InspirationFooter() {

  return (
    <footer className="bg-[#5f6a6f] text-white px-6 lg:px-20 py-16">
      <div className="max-w-380 mx-auto">
        <div className="grid lg:grid-cols-6 gap-10" data-aos="fade-up">
          {/* LOGO + SUBSCRIBE */}
          <div className="lg:col-span-2">
                <img
                  src="/inspiration-healthcare/assets/inspiration-footer.png"
                  alt="Inspiration Healthcare Logo"
                  className="h-12 mb-6"
                />

            <p className="text-sm mb-3 opacity-80">Subscribe</p>

            <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none"
              />
              <button className="bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 transition">
                →
              </button>
            </div>
          </div>

          {/* LINKS */}
          <FooterColumn title="Group" items={groupLinks} />
          <FooterColumn title="Investors" items={investorLinks} />
          <FooterColumn title="Areas of Care" items={careLinks} />
          <FooterColumn title="News" items={newsLinks} />
          <FooterColumn title="Quick Links" items={quickLinks} />
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mt-12 pt-6 text-center text-xs opacity-80">
          Copyright © 2023 Inspiration Healthcare Group plc. All Rights
          Reserved. Inspiration Healthcare Group plc companies: Inspiration
          Healthcare Ltd | SLE Ltd | Viomedex Ltd
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm opacity-80">
        {items.map((item, i) => (
          <li key={i} className="hover:opacity-100 cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const groupLinks = [
  "Leadership Team",
  "Business Model",
  "ESG",
  "Careers",
  "Modern Slavery",
  "Ethical Business Statement",
];

const investorLinks = [
  "Shareprice",
  "Reports & Presentations",
  "Shareholder Data",
  "Advisors",
  "Aim 26",
];

const careLinks = [
  "Acute Care",
  "Infusion Therapies",
  "Technology Support",
];

const newsLinks = ["Analyst Research", "RNS"];

const quickLinks = [
  "Cookies",
  "Privacy Policy",
  "Legal",
  "Terms & Conditions",
  "Regulatory Policy",
  "Carbon Reduction Plan",
  "SECR Environmental Report",
];
