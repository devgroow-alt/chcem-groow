const logos = [
  [
    { src: "/images/client-01.svg", alt: "Client 1" },
    { src: "/images/client-02.svg", alt: "Client 2" },
    { src: "/images/client-03.png", alt: "Client 3" },
    { src: "/images/client-04.png", alt: "Client 4" },
  ],
  [
    { src: "/images/client-05.svg", alt: "Client 5" },
    { src: "/images/client-06.svg", alt: "Client 6" },
    { src: "/images/client-07.png", alt: "Client 7" },
    { src: "/images/client-08.png", alt: "Client 8" },
  ],
  [
    { src: "/images/client-09.svg", alt: "Client 9" },
    { src: "/images/client-10.png", alt: "Client 10" },
    { src: "/images/client-11.png", alt: "Client 11" },
    { src: "/images/client-12.svg", alt: "Client 12" },
  ],
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[3.125rem] md:text-[4rem] font-bold">
            <span className="text-white">Naši </span>
            <span className="text-[#57fd05]">klienti</span>
          </h2>
        </div>

        <div className="space-y-8">
          {logos.map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            >
              {row.map((logo, li) => (
                <div key={li} className="flex items-center justify-center p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-[80px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
