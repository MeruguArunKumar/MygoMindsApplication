export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Get your quality</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Skills certificate from the <br />
                <span className="italic">MyGo Minds</span>
              </h2>
              <button className="btn-primary bg-brand-accent hover:bg-white hover:text-brand-primary">Get Started Now</button>
            </div>
            <div className="hidden lg:block">
              <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775209171/ChatGPT_Image_Apr_3_2026_03_09_11_PM_ebwdbp.png" className="rounded-3xl shadow-2xl rotate-3" alt="CTA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}