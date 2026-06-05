import { HeaderData, HeroData, SectionBlock, ProductShowcaseData, FooterData, TherapiesData, ParenteralNutritionData, MicrelCareTab, AmbulatoryInfusionData, PartnerCard, NewsInsightsData } from "../types";

export const headerContent: HeaderData = {
  logoUrl: "/micrel/header_logo%201.png",
  logoAlt: "Micrel Medical Devices",
  links: [
    { label: "Home", href: "#home" },
    { label: "Therapies", href: "#therapies" },
    { label: "Products", href: "#products" },
    { label: "Connected Health", href: "#connected-health" },
    { label: "E-Learning", href: "#e-learning" },
    { label: "Stories", href: "#stories" },
    { label: "News", href: "#news" },
    { label: "About Us", href: "#about-us" },
  ],
  buttonText: "Connect With Us",
  buttonHref: "#contact",
};

export const heroContent: HeroData = {
  title: "Freedom without clinical compromise",
  subtitle: "Micrel Medical Devices provides ambulatory infusion pumps, administration sets, accessories, and patient infusion management solutions for hospital and homecare use.",
  videoUrl: "https://cdn.clinicalvisuals.com/medical/soniquence/360.webm", // We can use one of our standard dynamic videos as a default background loop, or it will be resolved by the provider
  buttonText: "Explore Our Products",
  buttonHref: "#products",
};

export const whoWeAreContent: SectionBlock = {
  title: "Who we are",
  description: "Micrel Medical Devices SA is a dynamic medical technology company designing, manufacturing and marketing drug delivery systems. The company offers a full range of ambulatory infusion pumps and related disposables for a broad array of hospital and home-based patient treatments.",
  descriptionExtended: "Micrel is active in the areas of Pain Management and Analgesia, Parenteral Nutrition, Immunoglobulin Therapy, Parkinson's disease, Thalassemia, Primary Pulmonary Hypertension (PPH) and other infusion therapies.",
  buttonText: "Explore Benefits",
  buttonHref: "#benefits",
  imageUrl: "/micrel/image1.png",
  imageAlt: "Micrel Medical Devices Headquarters",
};

export const missionContent: SectionBlock = {
  title: "Our mission",
  description: "This is the one goal that we tirelessly work towards. We think every patient, the world over, deserves a safe and reliable infusion that allows them to enjoy as good a quality of life as possible, whether that be short term or life long.",
  descriptionExtended: "This means creating pumps and solutions that are discreet, ambulatory and connected, enabling HCPs to offer high standards of care no matter where the patient is. This mindset of freedom comes across in how we present ourself in our brand.",
  buttonText: "Discover Our Mission",
  buttonHref: "#mission",
  imageUrl: "/micrel/image2.png",
  imageAlt: "Patient enjoying freedom at sunset",
};

export const productShowcaseContent: ProductShowcaseData = {
  title: "New Rythmic™ Serena Green",
  description: "Home parenteral nutrition can create significant emotional and physical challenges for both patients and caregivers. That is why dependable ambulatory infusion therapy solutions are essential — not only to ensure safe and effective treatment delivery, but also to provide confidence, comfort, and peace of mind throughout the care journey.",
  specs: [
    "Designed with patient lifestyles in mind, these advanced solutions help make therapy more seamless, discreet, and convenient, enabling greater mobility, independence, and an improved quality of life during long-term treatment.",
    "With Rythmic™ Serena, you can offer your patients the confidence, peace of mind and dignity they deserve.",
  ],
  buttonText: "Explore Specifications",
  buttonHref: "#specifications",
  videoPlaceholderText: "360 deg Video",
  centerTitle: "See how Rythmic™ Serena empowers you to elevate parenteral nutrition",
  centerDescription: "Rythmic™ Serena provides the level of comfort, safety and efficiency that patients who require parenteral nutritional support, their caregivers and healthcare professionals deserve. Built for both homecare and clinical environments, Rythmic™ Serena simplifies daily treatment management for caregivers and healthcare professionals, improving overall patient experience and supporting high-quality nutritional care.",
  centerLinkText: "Learn More",
  centerLinkHref: "#learn-more",
};

export const footerContent: FooterData = {
  logoUrl: "/micrel/footer_logo.png",
  logoAlt: "Micrel Medical Devices Logo",
  description: "Miracle Medical is a Saudi LLC providing high-quality medical equipment and consumables from globally recognized manufacturers.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Therapies", href: "#therapies" },
    { label: "Connected Health", href: "#connected-health" },
    { label: "E-Learning", href: "#e-learning" },
    { label: "Stories", href: "#stories" },
    { label: "News", href: "#news" }
  ],
  therapies: [
    { label: "Acute Pain Management", href: "#therapies" },
    { label: "Palliative Care", href: "#therapies" },
    { label: "Obstetrics", href: "#therapies" },
    { label: "Oncology", href: "#therapies" },
    { label: "Antibiotic Infusion Therapy", href: "#therapies" },
    { label: "Immunoglobulin Therapy", href: "#therapies" }
  ],
  products: [
    { label: "Rythmic™ Infusion Pumps", href: "#products" },
    { label: "MP Syringe Pumps", href: "#products" },
    { label: "All Rythmic™ Administrations Sets and Extension lines", href: "#products" },
    { label: "Accessories", href: "#products" },
    { label: "Technical Support & Training", href: "#products" }
  ],
  contact: {
    companyName: "Micrel Medical Devices SA",
    title: "Headquarters",
    address: [
      "42 Konstantinoupooleos Str,",
      "19441, Karella Industrial Area",
      "(VI.PE. Karella)",
      "Koropi, Athens, Greece"
    ],
    phones: ["+30 210 6032333", "+30 210 6032334"],
    email: "info@micrelmed.com"
  },
  bottom: {
    revision: "Revision: Rev5, Rel.Dt. 2025.03.18",
    copyright: "© 2026 Micrel Medical Devices SA",
    credits: "Designed by Another Circus"
  }
};


export const therapiesContent: TherapiesData = {
  title: "How can we help",
  description: "Delivering safe, precise, and reliable infusion therapy solutions for acute pain management, oncology, obstetrics, parenteral nutrition, palliative care, antibiotic infusion, hydration, and other specialized treatments supporting better care for every patient.",
  items: [
    { title: "Acute Pain Management", imageUrl: "/micrel/help_image1.png", imageAlt: "Elderly couple talking" },
    { title: "Obstetrics", imageUrl: "/micrel/help_image3.jpg", imageAlt: "Pregnant woman sitting comfortably" },
    { title: "Parenteral Nutrition", imageUrl: "/micrel/help_image4.png", imageAlt: "Woman outdoors looking thoughtful" },
    { title: "Oncology", imageUrl: "/micrel/help_image2.png", imageAlt: "Mother cuddling happy child" },
    { title: "Palliative Care", imageUrl: "/micrel/help_image5.png", imageAlt: "Older man and young boy laughing" },
  ],
};

export const parenteralNutritionContent: ParenteralNutritionData = {
  title: "A complete solution optimised for parenteral nutrition",
  paragraphs: [
    "The Rythmic™ Serena solution has been carefully developed with a strong patient-centered approach, focusing on improving every aspect of the treatment experience and enhancing overall quality of life.",
    "Designed to provide greater comfort, freedom, and confidence during therapy, the system combines advanced infusion technology with a lightweight, portable, and easy-to-use design that supports patients in maintaining their daily routines with minimal disruption. By prioritizing safety, reliability, and ease of management, Rythmic™ Serena helps reduce the complexity of parenteral nutrition therapy for both patients and caregivers.",
    "Its intuitive functionality and dependable performance allow healthcare professionals to deliver accurate and efficient care while supporting better treatment outcomes. Designed for hospital and homecare use, it improves patient comfort, mobility, and independence."
  ],
  buttonText: "View Details",
  buttonHref: "#products",
  videoPlaceholderText: "Video 01",
};

export const micrelCareContent: MicrelCareTab[] = [
  {
    id: "patient-care",
    label: "Supported patient care",
    title: "MICRELCARE transforms exceptional patient monitoring into routine practice",
    buttonText: "See Product In Action",
    buttonHref: "#products",
    items: [
      {
        title: "Reporting",
        description: "Access reports to follow infusion trends and regimen compliance in accordance with ESPEN Guidelines.",
        iconName: "reporting"
      },
      {
        title: "Therapy feedback & monitoring",
        description: "Therapy feedback through on-pump custom questionnaires enables real-time patient insights that support faster, smarter clinical decision-making and more personalized care.",
        iconName: "feedback"
      },
      {
        title: "Pressure tracking",
        description: "Track line pressure in real time to ensure safe, accurate, and optimal infusion performance at all times with enhanced monitoring and reliable therapy delivery.",
        iconName: "pressure"
      }
    ]
  },
  {
    id: "patient-confidence",
    label: "improved patient care",
    title: "MICRELCARE transforms exceptional patient monitoring into routine practice",
    buttonText: "See Product In Action",
    buttonHref: "#products",
    items: [
      {
        title: "Safety",
        description: "Parents and caregivers can monitor infusion in real-time and receive SMS and/or email alerts",
        iconName: "safety"
      },
      {
        title: "Infusion  Monitoring",
        description: "Infusion monitoring supports safe patient discharge while providing confidence, comfort, and reassurance during home-based therapy care.",
        iconName: "infusion monitoring"
      },
      {
        title: "Patient Portal",
        description: "Patients can access and manage their infusion data, promoting greater independence, confidence, and therapy autonomy.",
        iconName: "patient portal"
      }
    ]
  },
  {
    id: "workflow-efficiency",
    label: "Optimised workflow efficiency",
    title: "MICRELCARE transforms exceptional patient monitoring into routine practice",
    buttonText: "See Product In Action",
    buttonHref: "#products",
    items: [
      {
        title: "Alarm Management",
        description: "Full visibility of infusion status and alarms enables faster responses, efficient management, and safer therapy delivery.",
        iconName: "alarm"
      },
      {
        title: "Fleet Management",
        description: "Automatically identify pumps in service to support efficient tracking, proactive maintenance, and reliable therapy management.",
        iconName: "fleet"
      },
      {
        title: "Ease of Documenting",
        description: "Remote and automated data downloads help reduce manual tasks, improve workflow efficiency, and free up valuable nurse time for enhanced patient care.",
        iconName: "documenting"
      }
    ]
  }
];

export const ambulatoryInfusionContent: AmbulatoryInfusionData = {
  title: "A full range of ambulatory infusion solutions",
  description: "Micrel provides a complete range of ambulatory infusion solutions, including advanced infusion pumps, syringe drivers, administration sets, and accessories designed for safe, reliable, and comfortable therapy delivery in both hospital and homecare settings.",
  tabLabels: ["Rythmic™ Infusion Pumps", "Rythmic™ Administration Sets", "MP Portable Syringe Pumps/Drivers", "..."],
  products: [
    // Pumps
    {
      id: "1",
      title: "Rythmic™ Evolution (Blue)",
      description: "Rythmic™ Evolution Blue is an ambulatory infusion pump designed ...",
      imageUrl: "/micrel/product1.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "pumps"
    },
    {
      id: "2",
      title: "Rythmic™ Evolution (Yellow)",
      description: "Aiming to reduce the risk of medication errors in epidural and...",
      imageUrl: "/micrel/product2.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "pumps"
    },
    {
      id: "3",
      title: "Mini Rythmic™ PN+",
      description: "The Mini Rythmic™ PN+ simplifies self-administration for patients requiring ...",
      imageUrl: "/micrel/product3.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "pumps"
    },
    {
      id: "4",
      title: "Rythmic™ Perf+",
      description: "Rythmic™ Perf+ is designed to meet the safety, reliability and comfort ...",
      imageUrl: "/micrel/product4.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "pumps"
    },
    // Sets
    {
      id: "5",
      title: "Rythmic™ Yellow PCA Set",
      description: "Color-coded PCA set with built-in air-eliminating filters and...",
      imageUrl: "/micrel/product2.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "sets"
    },
    {
      id: "6",
      title: "Rythmic™ Chemotherapy Set",
      description: "All-in-one administration set with integrated air-vented...",
      imageUrl: "/micrel/product4.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "sets"
    },
    {
      id: "7",
      title: "Rythmic™ PN Nutrition Set",
      description: "High-flow Parenteral Nutrition delivery sets with embedded ...",
      imageUrl: "/micrel/product3.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "sets"
    },
    {
      id: "8",
      title: "Rythmic™ Extension Tubing",
      description: "Advanced lightweight tube extensions for outpatient ...",
      imageUrl: "/micrel/product1.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "sets"
    },
    // Syringe Drivers
    {
      id: "9",
      title: "Micropump™ MP mlh+",
      description: "Multi-syringe ambulatory driver designed...",
      imageUrl: "/micrel/product1.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "syringe"
    },
    {
      id: "10",
      title: "MP Thalapump 20",
      description: "Specialized, highly precise ambulatory ....",
      imageUrl: "/micrel/product2.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "syringe"
    },
    {
      id: "11",
      title: "Micropump™ MP 101+",
      description: "Ambulatory syringe pump optimized for palliative ...",
      imageUrl: "/micrel/product3.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "syringe"
    },
    {
      id: "12",
      title: "Micropump™ MP Daily+",
      description: "Compact daily syringe driver optimized for patient comfort, ease-of-use...",
      imageUrl: "/micrel/product4.png",
      linkText: "Read More",
      linkHref: "#products",
      category: "syringe"
    }
  ]
};

export const partnersContent = {
  title: "Therapies",
  description: "Covering a wide range of therapy areas and their specific requirements, Micrel offers diverse infusion solutions and services for in and outpatient care.",
  buttonText: "Get in Touch",
  buttonHref: "#contact",
  backgroundImageUrl: "/micrel/therapy-banner.png",
  partners: [
    { label: "Pharmaceutical companies", iconName: "pharmaceutical" },
    { label: "Healthcare professionals", iconName: "healthcare" },
    { label: "Research centers", iconName: "research" },
    { label: "Medical Device manufacturers", iconName: "device" },
    { label: "Distribution partners", iconName: "distribution" }
  ] as PartnerCard[]
};

export const newsInsightsContent: NewsInsightsData = {
  title: "News, Blog & Insights",
  description: "Stay updated with the latest news, product innovations, industry trends, and medical advancements from Micrel Medical Devices SA. Explore expert insights, company updates, educational resources, and healthcare developments designed to support professionals, caregivers, and patients in modern infusion therapy and drug delivery solutions.",
  buttonText: "Latest Insights",
  buttonHref: "#news",
  cards: [
    {
      id: "news-1",
      title: "Introducing Our New Microsite",
      date: "November 5, 2025",
      imageUrl: "/micrel/Rectangle%20101.png",
      linkText: "Read More >>",
      linkHref: "#news"
    },
    {
      id: "news-2",
      title: "ESPEN Congress 2024 - Milan",
      date: "August 7, 2024",
      imageUrl: "/micrel/Rectangle%20102.png",
      linkText: "Read More >>",
      linkHref: "#news"
    },
    {
      id: "news-3",
      title: "ESRA Congress 2024 - Prague",
      date: "August 7, 2024",
      imageUrl: "/micrel/Rectangle%20103.png",
      linkText: "Read More >>",
      linkHref: "#news"
    },
    {
      id: "news-4",
      title: "ESRA Congress 2023 - Paris",
      date: "July 7, 2023",
      imageUrl: "/micrel/Rectangle%20104.png",
      linkText: "Read More >>",
      linkHref: "#news"
    }
  ]
};


