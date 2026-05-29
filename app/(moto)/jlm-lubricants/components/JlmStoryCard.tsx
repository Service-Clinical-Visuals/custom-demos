interface StoryCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export default function JlmStoryCard({
  title,
  description,
  image,
  delay = 0,
}: StoryCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      className="
        group
        overflow-hidden
        border
        border-[#E7E7E7]
        bg-white
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-[350px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-5">
        <h3
          className="
            text-center
            text-xl
            font-bold
            leading-snug
            text-[#222]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-center
            text-[16px]
            leading-6
            text-[#666]
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}