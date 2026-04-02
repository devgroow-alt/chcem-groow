export default function AwardBanner() {
  return (
    <section className="bg-[#57fd05]">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div
            className="md:col-span-3 min-h-[200px] md:min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/award-bg.webp)",
            }}
          />
          <div className="md:col-span-9 flex items-center px-6 py-8 md:py-12 scroll-animate animate-fadeInRight">
            <h3 className="font-heading text-black text-[1.75rem] md:text-[2.5rem] font-bold text-center w-full">
              Vyhrali sme ZLATÝ Digital PIE 2024 za performance pre klienta
              Dôvera
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
