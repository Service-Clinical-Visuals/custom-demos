"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { Eye, X, Download, Check, CheckCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

type CategoryType = "all" | "disposable" | "equipment" | "accessories";

interface Product {
    id: string;
    category: "disposable" | "equipment" | "accessories";
    tags: string[];
    title: string;
    description: string;
    image: string;
    // Popup details
    breadcrumbCategory?: string;
    detailedDescription?: string[];
    features?: string[];
    gallery?: string[];
    brochureUrl?: string;
}

// 4 products for each category (total 12 products across the 3 categories)
const products: Product[] = [
    // ------------------ Category 1: Disposable and consumables (p1, p2, p3, p4) ------------------
    {
        id: "prod-1",
        category: "disposable",
        tags: ["Disposable and consumables", "Spirometers and accessories"],
        title: "BOFAP, cardboard viral-bacterial filters",
        description: "BV filter in recyclable cardboard, plastic-free, protects against viruses and bacteria. Hygienic, sustainable, and high-performance.",
        image: "/medical/lumed-srl/products/p1.webp",
        breadcrumbCategory: "Spirometers and accessories",
        brochureUrl: "/medical/lumed-srl/products/p1.pdf",
        detailedDescription: [
            "LUMED has invented, patented, and manufactures a device that eliminates the use of plastic in spirometry.",
            "The cardboard mouthpiece does not protect patients and operators from viral and bacterial contamination. Traditional bacterial and viral filters (BV filters) do offer this protection, but they are made from plastic."
        ],
        features: [
            "No compromise on quality and results",
            "Reduced transport and storage volume (1/5 of traditional solutions)",
            "Maximum protection for patients and operators",
            "Elimination of plastic use"
        ],
        gallery: [
            "/medical/lumed-srl/products/p1.webp",
            "/medical/lumed-srl/products/p2.webp",
            "/medical/lumed-srl/products/p3.webp",
            "/medical/lumed-srl/products/p4.webp"
        ]
    },
    {
        id: "prod-2",
        category: "disposable",
        tags: ["Disposable and consumables", "Spirometers and accessories"],
        title: "Plastic Viral Bacterial Filters",
        description: "Disposable spirometry filters with >99.99% efficiency. Low resistance and maximum protection for patients and instruments.",
        image: "/medical/lumed-srl/products/p2.webp",
        breadcrumbCategory: "Spirometers and accessories",
        brochureUrl: "/medical/lumed-srl/products/p2.pdf",
        detailedDescription: [
            "Disposable bacterial and viral filters designed for cardiopulmonary and spirometry testing.",
            "Engineered with ultra-low airflow resistance while delivering over 99.99% viral and bacterial filtration efficiency."
        ],
        features: [
            ">99.99% viral and bacterial filtration efficiency",
            "Ultra-low airflow resistance for precise measurements",
            "Compatible with standard spirometry equipment",
            "Individually sealed packaging for hygiene"
        ],
        gallery: [
            "/medical/lumed-srl/products/p2.webp",
            "/medical/lumed-srl/products/p1.webp",
            "/medical/lumed-srl/products/p3.webp",
            "/medical/lumed-srl/products/p4.webp"
        ]
    },
    {
        id: "prod-3",
        category: "disposable",
        tags: ["Disposable and consumables", "Spirometers and accessories"],
        title: "Cardboard Mouthpieces",
        description: "12-lead ECG with adjustable display, advanced connectivity, precise diagnostics, paperless, ideal for clinics and hospital departments.",
        image: "/medical/lumed-srl/products/p3.webp",
        breadcrumbCategory: "Spirometers and accessories",
        detailedDescription: [
            "Precision-engineered cardboard mouthpieces designed for single-patient spirometry testing.",
            "Offers comfortable patient engagement and eliminates cross-contamination risks across multiple pulmonary examinations."
        ],
        features: [
            "Smooth rounded edges for maximum patient comfort",
            "Biodegradable and eco-conscious construction",
            "Universal fit for popular turbine and flowmeter types",
            "High structural rigidity during deep inhalations/exhalations"
        ],
        gallery: [
            "/medical/lumed-srl/products/p3.webp",
            "/medical/lumed-srl/products/p1.webp",
            "/medical/lumed-srl/products/p2.webp",
            "/medical/lumed-srl/products/p4.webp"
        ]
    },
    {
        id: "prod-4",
        category: "disposable",
        tags: ["Disposable and consumables", "Spirometers and accessories"],
        title: "Nose Clips",
        description: "Disposable spirometry nose clips, improve test reliability by preventing air leaks, comfortable, safe, and hypoallergenic.",
        image: "/medical/lumed-srl/products/p4.webp",
        breadcrumbCategory: "Spirometers and accessories",
        detailedDescription: [
            "Ergonomic disposable nose clips formulated with soft, hypoallergenic padding to prevent air leakage during spirometry exams.",
            "Ensures true pulmonary function measurements by preventing unrecorded nasal airflow."
        ],
        features: [
            "Firm grip with gentle, pressure-distributing foam pads",
            "Hypoallergenic materials suitable for sensitive skin",
            "Universal tension suitable for pediatric to adult patients",
            "Disposable single-use format to prevent cross-infection"
        ],
        gallery: [
            "/medical/lumed-srl/products/p4.webp",
            "/medical/lumed-srl/products/p1.webp",
            "/medical/lumed-srl/products/p2.webp",
            "/medical/lumed-srl/products/p3.webp"
        ]
    },

    // ------------------ Category 2: Medical Equipment (p5, p6, p7, p8) ------------------
    {
        id: "prod-5",
        category: "equipment",
        tags: ["Medical Equipment", "ECG"],
        title: "3-channel electrocardiograph",
        description: "3-lead ECG with 7” display, USB memory, advanced diagnostics, compact and portable, with advanced connectivity.",
        image: "/medical/lumed-srl/products/p5.webp",
        breadcrumbCategory: "ECG Equipment",
        detailedDescription: [
            "EUROECG 301 is a professional 3-lead electrocardiograph that strikes the ideal balance between budget, portability, and reliable diagnostics.",
            "Built with advanced digital signal processing and intuitive controls for rapid reporting in clinics and bedside examinations."
        ],
        features: [
            "Vibrant 7-inch color graphic LCD screen",
            "Direct USB data transfer & digital archiving",
            "Automated arrhythmia and interval analysis",
            "Lightweight and portable with high-capacity battery"
        ],
        gallery: [
            "/medical/lumed-srl/products/p5.webp",
            "/medical/lumed-srl/products/p6.webp",
            "/medical/lumed-srl/products/p7.webp",
            "/medical/lumed-srl/products/p8.webp"
        ]
    },
    {
        id: "prod-6",
        category: "equipment",
        tags: ["Medical Equipment", "ECG"],
        title: "6-channel electrocardiograph",
        description: "6-lead ECG with 7” display, advanced connectivity, USB memory, flexible reports, ideal for specialists.",
        image: "/medical/lumed-srl/products/p6.webp",
        breadcrumbCategory: "ECG Equipment",
        detailedDescription: [
            "EUROECG 601 professional 6-lead ECG machine is the best compromise between high diagnostic performance and compact size.",
            "Features multi-channel thermal printing, simultaneous acquisition, and comprehensive cardiopulmonary software validation."
        ],
        features: [
            "Simultaneous 6-channel printing & real-time monitoring",
            "Comprehensive diagnostic software package",
            "Support for external barcode scanner & card reader",
            "Extensive internal storage for patient records"
        ],
        gallery: [
            "/medical/lumed-srl/products/p6.webp",
            "/medical/lumed-srl/products/p5.webp",
            "/medical/lumed-srl/products/p7.webp",
            "/medical/lumed-srl/products/p8.webp"
        ]
    },
    {
        id: "prod-7",
        category: "equipment",
        tags: ["Medical Equipment", "ECG"],
        title: "Cardboard Mouthpieces",
        description: "12-lead ECG with adjustable display, advanced connectivity, precise diagnostics, paperless, ideal for clinics and hospital departments.",
        image: "/medical/lumed-srl/products/p7.webp",
        breadcrumbCategory: "Medical Equipment",
        detailedDescription: [
            "EUROECG 1201A is designed for the demanding requirements of hospital cardiology wards and diagnostic practices.",
            "Equipped with comprehensive multi-lead analysis, customizable rhythm strips, and DICOM/HL7 network integration."
        ],
        features: [
            "Full 12-lead simultaneous diagnostic acquisition",
            "Paperless workflow with high-speed digital networking",
            "Advanced pacemaker detection and QT dispersion",
            "High-resolution high-contrast tiltable display"
        ],
        gallery: [
            "/medical/lumed-srl/products/p7.webp",
            "/medical/lumed-srl/products/p5.webp",
            "/medical/lumed-srl/products/p6.webp",
            "/medical/lumed-srl/products/p8.webp"
        ]
    },
    {
        id: "prod-8",
        category: "equipment",
        tags: ["Medical Equipment", "ECG"],
        title: "ECG Simulator",
        description: "ECG simulator with 32 waveforms, safe verification of cardiopulmonary devices, easy to use, long battery life.",
        image: "/medical/lumed-srl/products/p8.webp",
        breadcrumbCategory: "Diagnostic Equipment",
        detailedDescription: [
            "Phantom 320 simulator reproduces 32 distinct physiological and pathological ECG waveforms for testing and calibration.",
            "Designed for biomedical engineers, medical device distributors, and clinic maintenance personnel."
        ],
        features: [
            "32 selectable pathological and normal waveforms",
            "Multiple heart rate variations and rhythm anomalies",
            "Long-lasting battery life for portable calibration",
            "Standard snap/banana pin jacks for universal cables"
        ],
        gallery: [
            "/medical/lumed-srl/products/p8.webp",
            "/medical/lumed-srl/products/p5.webp",
            "/medical/lumed-srl/products/p6.webp",
            "/medical/lumed-srl/products/p7.webp"
        ]
    },

    // ------------------ Category 3: Accessories (p9, p10, p11, p12) ------------------
    {
        id: "prod-9",
        category: "accessories",
        tags: ["Accessories", "ECG"],
        title: "ECG simulator",
        description: "ECG simulator with 32 waveforms, safe verification of cardiopulmonary devices, easy to use, long battery life.",
        image: "/medical/lumed-srl/products/p9.webp",
        breadcrumbCategory: "ECG Accessories",
        detailedDescription: [
            "Essential calibration and signal verification simulator with dedicated lead outputs.",
            "Ensures cardiopulmonary devices operate with clinical-grade accuracy and strict calibration tolerances."
        ],
        features: [
            "Robust compact handheld enclosure",
            "32 accurate cardiac waveforms",
            "Quick verification of lead wire integrity",
            "Long standby and operational battery life"
        ],
        gallery: [
            "/medical/lumed-srl/products/p9.webp",
            "/medical/lumed-srl/products/p10.webp",
            "/medical/lumed-srl/products/p11.webp",
            "/medical/lumed-srl/products/p12.webp"
        ]
    },
    {
        id: "prod-10",
        category: "accessories",
        tags: ["Accessories", "ECG"],
        title: "6-channel electrocardiograph",
        description: "6-lead ECG with 7” display, advanced connectivity, USB memory, flexible reports, ideal for specialists.",
        image: "/medical/lumed-srl/products/p10.webp",
        breadcrumbCategory: "ECG Accessories",
        detailedDescription: [
            "Versatile accessory modules and patient cabling designed for multi-channel ECG monitoring.",
            "Shielded against RF interference and defibrillation protected for maximum patient safety."
        ],
        features: [
            "Defibrillation-proof signal transmission",
            "High durability flexible patient cable",
            "Color-coded lead terminations according to AHA/IEC",
            "High impedance shielding to minimize motion artifacts"
        ],
        gallery: [
            "/medical/lumed-srl/products/p10.webp",
            "/medical/lumed-srl/products/p9.webp",
            "/medical/lumed-srl/products/p11.webp",
            "/medical/lumed-srl/products/p12.webp"
        ]
    },
    {
        id: "prod-11",
        category: "accessories",
        tags: ["Accessories", "ECG"],
        title: "Cardboard Mouthpieces",
        description: "12-lead ECG with adjustable display, advanced connectivity, precise diagnostics, paperless, ideal for clinics and hospital departments.",
        image: "/medical/lumed-srl/products/p11.webp",
        breadcrumbCategory: "Spirometry Accessories",
        detailedDescription: [
            "Eco-friendly disposable spirometer mouthpieces compatible with leading clinical sensor heads.",
            "Manufactured to precise dimensional tolerances ensuring a leak-free seal during dynamic lung tests."
        ],
        features: [
            "Medical-grade pure cardboard without chemical odor",
            "Exact friction fit with standard bacterial filters",
            "Hygienic single-use individual wrapping",
            "100% recyclable after clinical use"
        ],
        gallery: [
            "/medical/lumed-srl/products/p11.webp",
            "/medical/lumed-srl/products/p9.webp",
            "/medical/lumed-srl/products/p10.webp",
            "/medical/lumed-srl/products/p12.webp"
        ]
    },
    {
        id: "prod-12",
        category: "accessories",
        tags: ["Accessories", "ECG"],
        title: "ECG Simulator",
        description: "ECG simulator with 32 waveforms, safe verification of cardiopulmonary devices, easy to use, long battery life.",
        image: "/medical/lumed-srl/products/p12.webp",
        breadcrumbCategory: "Accessories",
        detailedDescription: [
            "Professional cardiac testing simulator for verification, technician training, and functional safety checks.",
            "Generates true-to-life baseline shifts, arrhythmia pulses, and pacemaker spikes."
        ],
        features: [
            "High precision voltage output",
            "Built-in pacemaker pulse simulation",
            "Lightweight rugged field case",
            "Zero maintenance solid-state architecture"
        ],
        gallery: [
            "/medical/lumed-srl/products/p12.webp",
            "/medical/lumed-srl/products/p9.webp",
            "/medical/lumed-srl/products/p10.webp",
            "/medical/lumed-srl/products/p11.webp"
        ]
    }
];

export default function ProductsGrid() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
    const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
    const [modalActiveImage, setModalActiveImage] = useState<string>("");

    // Provide 4 distinct cards for each category, duplicated once to 8 items so Swiper's infinite loop has plenty of buffer slides
    const baseProducts = selectedCategory === "all"
        ? [products[0], products[1], products[4], products[8]]
        : products.filter((p) => p.category === selectedCategory);

    // Duplicate array with unique keys for flawless infinite loop cycling
    const loopProducts = [
        ...baseProducts.map((p, i) => ({ ...p, slideKey: `${p.id}-a-${i}` })),
        ...baseProducts.map((p, i) => ({ ...p, slideKey: `${p.id}-b-${i}` }))
    ];

    const openModal = (prod: Product) => {
        setActiveModalProduct(prod);
        setModalActiveImage(prod.image);
    };

    const closeModal = () => {
        setActiveModalProduct(null);
    };

    const renderProductCard = (prod: Product) => (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 2xl:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 h-full select-none">
            {/* Card Upper Section: Image & Eye Icon */}
            <div className="flex flex-col flex-1">
                <div className="w-full aspect-[493/318] rounded-xl overflow-hidden relative bg-gray-50 border border-gray-100 group shrink-0">
                    <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Eye Icon Preview Button */}
                    <button
                        type="button"
                        onClick={() => openModal(prod)}
                        className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-11 h-9 sm:w-14 sm:h-11 rounded-lg bg-white/95 hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 z-10"
                        title="Quick View"
                    >
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#4277C2]" />
                    </button>
                </div>

                {/* Card Tags / Badges */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 px-1 min-h-[38px] sm:min-h-[44px]">
                    {prod.tags.map((tag, tIdx) => (
                        <span
                            key={tIdx}
                            className="px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-[13px] 2xl:text-sm font-semibold text-[#4277C2] border border-[#4277C2]/40 bg-white inline-block text-center whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Card Title */}
                <h3 className="text-center font-bold text-gray-900 text-sm sm:text-base lg:text-lg 2xl:text-xl mt-3 sm:mt-4 px-1 sm:px-2 font-geist min-h-[44px] sm:min-h-[52px] flex items-center justify-center line-clamp-2">
                    {prod.title}
                </h3>

                {/* Card Description */}
                <p className="text-center text-xs sm:text-sm 2xl:text-base text-[#666666] font-normal font-[400] mt-2 sm:mt-2.5 px-1 sm:px-2 leading-relaxed font-space-grotesk min-h-[80px] sm:min-h-[96px] flex items-center justify-center line-clamp-4">
                    {prod.description}
                </p>
            </div>

            {/* Card Bottom CTA: View Product Details Button */}
            <div className="mt-5 sm:mt-6 pt-2 shrink-0">
                <button
                    type="button"
                    onClick={() => openModal(prod)}
                    className="w-full py-2.5 sm:py-3 2xl:py-3.5 rounded-lg bg-[#4277C2] hover:bg-[#3465a8] text-white text-xs sm:text-sm 2xl:text-base font-semibold transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                    View Product Details
                </button>
            </div>
        </div>
    );

    return (
        <section className="lumed-root w-full py-14 sm:py-16 md:py-20 lg:py-24 2xl:py-32 bg-white z-30" id="all-products">
            <div className="custom-container mx-auto px-4 sm:px-6 md:px-8 2xl:px-12 space-y-8 sm:space-y-10 max-w-[1440px] 2xl:max-w-[1800px]">

                {/* Section Header */}
                <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto space-y-3" data-aos="fade-up">
                    <span className="text-primary font-bold text-xs sm:text-sm 2xl:text-base tracking-wider uppercase font-space-grotesk block">
                        04 / Products
                    </span>
                    <Typography variant="h2" color="dark" className="leading-tight font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                        Discover Our Comprehensive Products Solutions
                    </Typography>
                    <Typography variant="body" color="muted" className="leading-relaxed text-xs sm:text-sm md:text-base 2xl:text-lg max-w-2xl 2xl:max-w-3xl mx-auto">
                        A complete range of cardiopulmonary diagnostic equipment designed to meet the needs of healthcare professionals.
                    </Typography>
                </div>

                {/* Filter Pill Tabs - 2 cols on mobile/tablet (up to 1040px) and single row on desktop (>1040px) */}
                <div className="flex justify-center px-2" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-2 min-[1041px]:flex min-[1041px]:flex-row items-center bg-[#4277C2] p-1.5 sm:p-2 rounded-2xl w-full max-w-xl min-[1041px]:max-w-max shadow-sm gap-1.5 sm:gap-2 relative">
                        {[
                            { id: "all", label: "All" },
                            { id: "disposable", label: "Disposable and consumables" },
                            { id: "equipment", label: "Medical Equipment" },
                            { id: "accessories", label: "Accessories" }
                        ].map((tab) => {
                            const isActive = selectedCategory === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(tab.id as CategoryType)}
                                    className={`relative z-10 w-full min-[1041px]:w-auto px-3 sm:px-6 min-[1041px]:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm min-[1041px]:text-base 2xl:text-lg font-semibold transition-colors duration-200 text-center cursor-pointer ${
                                        isActive ? "text-[#121212]" : "text-white hover:text-white/80"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategoryPill"
                                            className="absolute inset-0 bg-white rounded-xl shadow-md -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Autoscrolling Carousel for the Cards with Smooth Fade-Slide Switch Animation */}
                <div className="pt-2 sm:pt-4" data-aos="fade-up" data-aos-delay="200">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                speed={800}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                    el: ".lumed-products-pagination",
                                    bulletClass: "inline-block w-6 sm:w-8 h-1 rounded-full bg-gray-300 mx-1 transition-all duration-300 cursor-pointer",
                                    bulletActiveClass: "!bg-[#4277C2] !w-8 sm:!w-10",
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    1041: {
                                        slidesPerView: 3,
                                        spaceBetween: 28,
                                    },
                                    1536: {
                                        slidesPerView: 3,
                                        spaceBetween: 32,
                                    },
                                }}
                                className="pb-4"
                            >
                                {loopProducts.map((prod) => (
                                    <SwiperSlide key={prod.slideKey} className="h-auto">
                                        {renderProductCard(prod)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination / Dots indicator */}
                    <div className="lumed-products-pagination flex items-center justify-center pt-4 sm:pt-6"></div>
                </div>

            </div>

            {/* Product Details Modal / Popup with Smooth Framer-Motion Backdrop & Dialog Animation */}
            <AnimatePresence>
                {activeModalProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 15 }}
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            className="bg-white rounded-2xl w-full xl:max-w-[70%] max-w-5xl 2xl:max-w-6xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer z-10"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Breadcrumbs */}
                            <div className="text-[11px] sm:text-xs text-gray-400 font-medium mb-3 sm:mb-4 flex flex-wrap items-center gap-1 sm:gap-1.5 pr-8">
                                <span>All products</span>
                                <span>&gt;</span>
                                <span>{activeModalProduct.breadcrumbCategory || activeModalProduct.tags[0]}</span>
                                <span>&gt;</span>
                                <span className="text-gray-600 truncate">{activeModalProduct.title}</span>
                            </div>

                            {/* Modal Body: Left gallery / image + Right info */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-8 items-stretch">

                                {/* Left: Thumbnails + Main Image (col-span 7) */}
                                <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-3 h-full">
                                    {/* Thumbnails Column / Row on Mobile */}
                                    {activeModalProduct.gallery && activeModalProduct.gallery.length > 1 && (
                                        <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible w-full sm:w-16 2xl:w-20 shrink-0">
                                            {activeModalProduct.gallery.map((thumb, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setModalActiveImage(thumb)}
                                                    className={`w-14 h-12 sm:w-16 sm:h-14 2xl:w-20 2xl:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-gray-50 shrink-0 ${
                                                        modalActiveImage === thumb
                                                            ? "border-[#4277C2] shadow-sm scale-102"
                                                            : "border-gray-200 hover:border-gray-300 opacity-80"
                                                    }`}
                                                >
                                                    <img
                                                        src={thumb}
                                                        alt="Thumbnail"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Main Active Image Frame with image switch animation (fills height) */}
                                    <div className="flex-1 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 relative min-h-[300px] sm:min-h-[400px] h-full flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={modalActiveImage || activeModalProduct.image}
                                                src={modalActiveImage || activeModalProduct.image}
                                                alt={activeModalProduct.title}
                                                initial={{ opacity: 0.4 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0.4 }}
                                                transition={{ duration: 0.2 }}
                                                className="w-full h-full object-cover absolute inset-0"
                                            />
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Right: Title, Description, Buttons, Features (col-span 5) */}
                                <div className="md:col-span-5 space-y-3 sm:space-y-4 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h2 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-gray-900 leading-snug font-geist">
                                            {activeModalProduct.title}
                                        </h2>

                                        <div className="space-y-2 text-xs sm:text-sm 2xl:text-base text-gray-600 leading-relaxed font-space-grotesk">
                                            {activeModalProduct.detailedDescription && activeModalProduct.detailedDescription.map((p, idx) => (
                                                <p key={idx}>{p}</p>
                                            ))}
                                        </div>

                                        {/* Action Buttons: Brochure + Get Inquiry */}
                                        <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                                            {activeModalProduct.brochureUrl ? (
                                                <a
                                                    href={activeModalProduct.brochureUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-[#4277C2] hover:bg-[#3465a8] text-white text-xs sm:text-sm 2xl:text-base font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-98"
                                                >
                                                    <span>Brochure</span>
                                                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                </a>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-[#4277C2] hover:bg-[#3465a8] text-white text-xs sm:text-sm 2xl:text-base font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-98"
                                                >
                                                    <span>Brochure</span>
                                                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-[#121212] hover:bg-black text-white text-xs sm:text-sm 2xl:text-base font-semibold transition-all shadow-sm cursor-pointer text-center hover:shadow-md active:scale-98"
                                            >
                                                Get Inquiry
                                            </button>
                                        </div>
                                    </div>

                                    {/* Main Features Card - in blue theme matching Figma */}
                                    {activeModalProduct.features && (
                                        <div className="rounded-xl p-4 sm:p-5 bg-[#4277C2] text-white mt-4 space-y-3 shadow-sm">
                                            <h4 className="text-sm sm:text-base 2xl:text-lg font-bold font-geist !text-white" style={{ color: "#ffffff" }}>
                                                Main Features
                                            </h4>
                                            <hr className="border-t border-white/25 my-2" />
                                            <ul className="space-y-2 text-xs sm:text-sm !text-white/95 font-space-grotesk">
                                                {activeModalProduct.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2 !text-white">
                                                        <CheckCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                                        <span className="!text-white">{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
