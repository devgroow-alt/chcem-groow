const features = [
  {
    title: "TAILOR-MADE CAMPAIGNS",
    desc: "Nepoužívame predpripravené riešenia. Naše kampane sú šité na mieru, aby sa tvoja značka stala nezabudnuteľnou.",
    delay: "animation-delay-1",
  },
  {
    title: "MULTI-CHANNEL MASTERY",
    desc: "Od webu cez sociálne siete až po tradičný a guerilla marketing – tvoje marketingové posolstvo bezproblémovo integrujeme naprieč všetkými platformami.",
    delay: "animation-delay-2",
  },
  {
    title: "DATA-DRIVEN APPROACH",
    desc: "Naše mediaplány nie sú rigidné. Dynamicky presúvame budgety podľa reálnych výsledkov tak, aby sme splnili alebo prekonali ciele kampane.",
    delay: "animation-delay-3",
  },
];

export default function GroowEfekt() {
  return (
    <section
      className="bg-[#3d0088] bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage: "url(/images/groow-efekt-bg.webp)",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="hidden md:block md:col-span-3" />
          <div className="md:col-span-9">
            <h2 className="font-heading text-white text-[3.125rem] md:text-[4rem] font-bold mb-6 scroll-animate animate-fadeInRight animation-delay-1">
              GROOW-EFEKT
            </h2>
            <p className="text-[#57fd05] text-[1.125rem] md:text-[1.25rem] mb-8 leading-relaxed">
              Pochopenie produktu klienta, stanovenie vhodnej stratégie,
              nasadenie a následne testovanie. To je náš prístup. Robíme
              desiatky experimentov, aby sme klientom priniesli vysoko
              nadštandardnú návratnosť investícií do marketingu, nazývame to
              GROOW Efekt.
            </p>

            <div className="md:col-span-8 mb-12">
              <a
                href="#contact"
                className="block w-full text-center px-8 py-4 rounded-full bg-white text-black font-heading font-bold text-lg hover:opacity-90 transition-opacity"
              >
                I want to GROOW
              </a>
            </div>

            {/* Features */}
            <div className="space-y-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`scroll-animate animate-fadeInRight ${f.delay}`}
                >
                  <h3 className="font-heading text-white text-[1.75rem] md:text-[2rem] font-bold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[#57fd05] text-[1.125rem] md:text-[1.25rem] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
