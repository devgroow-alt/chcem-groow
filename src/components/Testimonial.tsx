export default function Testimonial() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div
            className="hidden md:block md:col-span-3 min-h-[300px] bg-contain bg-no-repeat bg-top"
            style={{
              backgroundImage: "url(/images/quote-graphic.png)",
            }}
          />
          <div className="md:col-span-9 scroll-animate animate-fadeInRight">
            <h3 className="font-heading text-white text-[1.75rem] md:text-[2rem] font-bold mb-6">
              Čo nás robí výnimočnými?
            </h3>
            <h3 className="font-heading text-[#98f470] text-[1.75rem] md:text-[2rem] font-bold mb-6 leading-snug">
              Poskytujeme komplexné mediálne služby, ktoré sú založené na dátach
              a podporené technológiami. Robíme marketing viac vedeckým na
              všetkých úrovniach - od plánovania, cez exekutívu až po
              vyhodnocovanie kampaní.
            </h3>
            <h3 className="font-heading text-white text-[1.75rem] md:text-[2rem] font-bold">
              Marcel Milo - CEO, GROOW
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
