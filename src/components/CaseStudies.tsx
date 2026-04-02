const cases = [
  {
    bg: "/images/case-dovera-bg.webp",
    title: "DÔVERA",
    desc: "Priniesli sme klientovi Dôvera historicky najviac prihlášok",
    delay: "",
    extraPadding: false,
  },
  {
    bg: "/images/case-spp-bg.webp",
    title: "SPP",
    desc: "Kampaň s inovatívnymi mediálnymi formátmi s minimalizovaním uhlíkovej stopy",
    delay: "animation-delay-1",
    extraPadding: true,
  },
  {
    bg: "/images/case-grape-bg.webp",
    title: "GRAPE FESTIVAL",
    desc: "Komplexné zastrešenie mediálnej stratégie pre jeden z najväčších hudobných festivalov na Slovensku",
    delay: "animation-delay-2",
    extraPadding: false,
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#3d0088] py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-white text-[3.125rem] md:text-[4rem] font-bold mb-2">
            Case studies
          </h2>
          <p className="text-[#57fd05] text-[1.125rem] md:text-[1.25rem] mb-6">
            Niekoľko málo kampaní z našej dielne
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-3 rounded-full bg-white text-black font-heading font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Let&apos;s get to GROOW!
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`scroll-animate animate-fadeInUp ${c.delay} rounded-lg overflow-hidden bg-contain bg-no-repeat bg-top min-h-[400px] flex flex-col items-center justify-start ${c.extraPadding ? "pt-[6vw]" : "pt-[1vw]"}`}
              style={{
                backgroundImage: `url(${c.bg})`,
              }}
            >
              <img
                src="/images/case-logo.webp"
                alt={c.title}
                className="w-[65%] mb-6"
              />
              <h3 className="font-heading text-[#57fd05] text-[1.75rem] md:text-[2rem] font-bold text-center px-4 mb-2">
                {c.title}
              </h3>
              <p className="text-[#75ffe5] text-center px-6 text-[1.125rem] md:text-[1.25rem]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
