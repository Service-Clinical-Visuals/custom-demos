"use client";

import JlmStoryCard from "./JlmStoryCard";


export default function JlmLatestStories() {
  const stories = [
    {
      title:
        "JLM Lubricants Launches New Car Care Range",
      description:
        "With the new Car Care products we now...",
      image: "/jlm/jlm-story-1.png",
    },
    {
      title:
        "JLM Lubricants Joins FIA ERC as Official Liquid Tools Partner",
      description:
        "JLM Lubricants is proud to announce its partnership with the FIA European Rally Championship (ERC), becoming the Official Liquid Tools Partner.",
      image: "/jlm/jlm-story-2.png",
    },
    {
      title:
        "Why Choose JLM Oil-Based Engine Flush Over Solvent-Based Flushes?",
      description:
        "When it comes to maintaining a clean and efficient engine, using an engine oil flush before an oil change is a smart decision.",
      image: "/jlm/jlm-story-3.png",
    },
  ];

  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1600px] px-6 py-20">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2
            className="
              text-[38px]
              font-bold
              text-[#222]
            "
          >
            Latest Stories
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stories.map((story, index) => (
            <JlmStoryCard
              key={story.title}
              {...story}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}