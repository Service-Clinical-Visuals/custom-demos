"use client";

import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle, ChevronRight } from "lucide-react";

const partners = [
  {
    name: "Bound Tree",
    image: "/pulmo/pulmo-partner-1.png",
  },
  {
    name: "Emergency Medical Products",
    image: "/pulmo/pulmo-partner-2.png",
  },
  {
    name: "Henry Schein",
    image: "/pulmo/pulmo-partner-3.png",
  },
  {
    name: "Life Assist",
    image: "/pulmo/pulmo-partner-4.png",
  },
  {
    name: "Mckesson",
    image: "/pulmo/pulmo-partner-5.png",
  },
  {
    name: "EMS",
    image: "/pulmo/pulmo-partner-6.png",
  },
];

const PAGE_SIZE = 3;

export default function PulmoPartners() {
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const totalPages = Math.ceil(partners.length / PAGE_SIZE);
  const visible = partners.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function navigate(next: number) {
    setFading(true);
    setTimeout(() => {
      setPage(next);
      setFading(false);
    }, 200);
  }

  return (
    <section className="overflow-hidden bg-[#F5F5F5] py-28">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr]">
          {/* ================================================= */}
          {/* IMAGE SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-[20px] shadow-[0_16px_34px_rgba(0,0,0,0.08)]"
          >
            {/* IMAGE */}
            <div className="aspect-[1.22/0.82] w-full">
              <img
                src="/pulmo/pulmo-partner.png"
                alt="Distribution"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* FUTURE IMAGE */}
              {/*
              <Image
                src="/distribution/distribution-mask.jpg"
                alt="Distribution"
                fill
                className="object-cover"
              />
              */}
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/[0.02]" />

            {/* LIGHT DEPTH */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%)]" />
          </div>

          {/* ================================================= */}
          {/* CONTENT SIDE */}
          {/* ================================================= */}

          <div className="max-w-[760px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-2px] text-[#2B2B2B]">
                World Wide Distribution
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-7 text-[16px] leading-[2] text-[#666666]">
                Pulmodyne Products Are Sold Exclusively By Distribution Partners
                In Defined Geographic Areas Worldwide. To Inquire About The
                Products We Offer, Locate A Distributor In Your Area, Or For
                Inquiries About Areas Available For Distribution, Please Contact
                The Appropriate Sales Manager Below For Your Geographical Area.
              </p>
            </div>

            {/* ================================================= */}
            {/* PARTNER PANEL */}
            {/* ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="220"
              className="mt-10 overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.05)]"
            >
              {/* ================================================= */}
              {/* PANEL HEADER */}
              {/* ================================================= */}

              <div className="flex items-center justify-between border-b border-[#EFEFEF] px-7 py-6">
                {/* TITLE */}
                <h3 className="text-2xl font-semibold tracking-[-1px] text-[#0068A8]">
                  Our Partners
                </h3>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="cursor-pointer flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#0068A8] transition-all duration-300 hover:bg-[#0068A8] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <ArrowLeftCircle size={26} strokeWidth={2.3} />
                  </button>

                  <button
                    onClick={() => navigate(Math.min(totalPages - 1, page + 1))}
                    disabled={page === totalPages - 1}
                    className="cursor-pointer flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#0068A8] transition-all duration-300 hover:bg-[#0068A8] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <ArrowRightCircle size={26} strokeWidth={2.8} />
                  </button>
                </div>
              </div>

              {/* ================================================= */}
              {/* PARTNERS GRID */}
              {/* ================================================= */}

              <div
                className="grid gap-5 p-6 md:grid-cols-3 transition-opacity duration-200"
                style={{ opacity: fading ? 0 : 1 }}
              >
                {visible.map((partner, index) => (
                  <div
                    key={index}
                    className="group flex min-h-[110px] items-center justify-center rounded-[10px] border border-[#F0F0F0] bg-[#FAFAFA] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8E8F4] hover:bg-white hover:shadow-[0_12px_22px_rgba(0,0,0,0.05)]"
                  >
                    {/* LOGO */}
                    <div className="text-center">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="mx-auto h-[42px] w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      {/* FUTURE LOGO */}
                      {/*
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={120}
                        height={42}
                        className="object-contain"
                      />
                      */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
