interface ShopCardProps {
  title: string;
  image: string;
}

export default function ShopCard({
  title,
  image,
}: ShopCardProps) {
  return (
    <div className="group">
      <div
        className="
          relative
          overflow-hidden
          h-full
        "
        // style={{
        //   clipPath:
        //     "polygon(12% 0%,100% 0%,100% 100%,0% 100%,0% 12%)",
        // }}
      >
        <img
          src={image}
          alt={title}
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
          mt-4
          text-center
          text-[22px]
          font-medium
          text-white
        "
      >
        {title}
      </h3>
    </div>
  );
}