import Image from "next/image";

const clients = [
  "client-1.png",
  "client-2.png",
  "client-3.png",
  "client-4.png",
  "client-5.png",
  "client-6.png",
  "client-7.png",
  "client-8.png",
];

export default function TrustedClientsSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Trusted by these fine institutions
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {clients.map((logo) => (
            <div
              key={logo}
              className="bg-white rounded-xl border p-8 flex items-center justify-center"
            >
              <Image
                src={`/images/clients/${logo}`}
                alt=""
                width={160}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}