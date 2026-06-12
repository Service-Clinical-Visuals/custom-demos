interface ProductCardProps {
  title: string;
  image: string;
}

export default function ProductCard({
  title,
  image,
}: ProductCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="group"
    >
      <div
        className="
          overflow-hidden
        "
        // style={{
        //   clipPath:
        //     "polygon(14% 0%,100% 0%,100% 100%,0% 100%,0% 14%)",
        // }}
      >
        <img
          src={image}
          alt=""
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-700
          "
        />
      </div>

      <h3
        className="
          mt-5
          text-center
          text-[22px]
          font-bold
          leading-snug
          text-black
        "
      >
        {title}
      </h3>
    </div>
  );
}