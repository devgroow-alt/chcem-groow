export default function CtaSection() {
  return (
    <section className="bg-[#57fd05] py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="font-heading text-[#3d0088] text-[3rem] md:text-[4.5rem] font-bold leading-tight">
              Pripravení na novú úroveň mediálnych nákupov?
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-[#0e383b] text-[1.125rem] md:text-[1.25rem] mb-6 leading-relaxed">
              Naše riešenia pre veľkých korporátnych klientov úspešne
              aplikujeme aj na segment SMB.
            </p>
            <a
              href="#contact"
              className="block w-full text-center px-8 py-4 rounded-full bg-gradient-to-b from-[#3d0088] to-[#260055] border border-[#402266] text-[#57fd05] font-heading font-bold text-xl hover:opacity-90 transition-opacity"
            >
              Chcem GROOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
