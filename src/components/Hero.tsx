export default function Hero() {
  return (
    <section
      className="bg-[#3d0088] bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/hero-bg.webp)",
      }}
    >
      {/* Hero top */}
      <div className="max-w-[1140px] mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="hidden md:block md:col-span-4" />
          <div className="md:col-span-8 text-left">
            <h1
              className="font-heading text-[#57fd05] text-[5rem] md:text-[6.5rem] font-bold leading-[0.95] uppercase animate-fadeInRight"
            >
              UNLEASH
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 my-2">
              <h1
                className="font-heading text-[#57fd05] text-[5rem] md:text-[6.5rem] font-bold leading-[0.95] uppercase animate-fadeInRight animation-delay-1"
              >
                YOUR
              </h1>
              <a
                href="#contact"
                className="inline-block w-full md:flex-1 text-center px-8 py-4 rounded-full bg-gradient-to-b from-[#3d0088] to-[#260055] border border-[#402266] text-[#57fd05] font-heading text-2xl md:text-3xl font-bold uppercase hover:opacity-90 transition-opacity"
              >
                Let it GROOW!
              </a>
            </div>
            <h1
              className="font-heading text-[#57fd05] text-[5rem] md:text-[6.5rem] font-bold leading-[0.95] uppercase animate-fadeInRight animation-delay-2"
            >
              POTENTIAL
            </h1>
          </div>
        </div>
      </div>

      {/* Sub-hero */}
      <div className="max-w-[1140px] mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 animate-fadeInLeft">
            <h2 className="font-heading text-white text-[3.125rem] md:text-[4rem] font-bold leading-tight">
              Robíme výnimočné kampane pre výnimočné firmy
            </h2>
          </div>
          <div className="hidden md:block md:col-span-2" />
          <div className="md:col-span-5 flex justify-end">
            <img
              src="/images/marcel-milo.webp"
              alt="Marcel Milo"
              className="w-[97%] rounded-[9px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
