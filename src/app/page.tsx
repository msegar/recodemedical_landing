export default function Home() {
  return (
    <div className="relative z-[2]">
      {/* Header */}
      <header
        className="flex items-center justify-center py-10 px-8"
        style={{ animation: "fadeIn 1s ease-out" }}
      >
        <div className="flex items-center gap-2.5 font-sans font-medium text-[0.9rem] tracking-[0.25em] uppercase text-gold">
          <div className="flex flex-col gap-[3px]">
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
          </div>
          ReCODE Medical
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 sm:px-8 pb-24 pt-16">
          <p
            className="font-sans text-[0.95rem] font-medium tracking-[0.3em] uppercase text-gold mb-12"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          >
            An Important Update
          </p>
          <h1
            className="font-serif font-light text-white-warm leading-[1.1] tracking-[-0.01em] max-w-[800px] text-[clamp(2.8rem,7vw,5.5rem)]"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
          >
            ReCODE Medical Has Been Acquired
          </h1>
          <p
            className="font-serif italic font-light text-cream-soft mt-8 max-w-[500px] text-[clamp(1.3rem,3vw,1.8rem)]"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
          >
            The next chapter begins under new ownership.
          </p>
          <hr
            className="w-20 border-0 h-px bg-gold my-10 mx-auto"
            style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
          />
          <p
            className="font-sans text-[1.1rem] font-normal text-cream-soft max-w-[480px]"
            style={{ animation: "fadeInUp 0.8s ease-out 1s both" }}
          >
            The ReCODE Chat app has been retired as the technology moves forward under its new owner.
          </p>
        </section>

        {/* Letter */}
        <section
          className="max-w-[640px] mx-auto px-6 sm:px-8 pt-16 pb-24"
          style={{ animation: "fadeIn 1s ease-out 1.2s both" }}
        >
          <hr className="w-10 border-0 h-px bg-gold-dim mx-auto mb-12" />
          <div className="font-serif text-[1.4rem] font-normal leading-[1.85] text-cream">
            <p className="mb-6 first-letter:font-semibold first-letter:text-[3.8rem] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-[0.15em] first-letter:mt-[0.1em] first-letter:text-white-warm">
              ReCODE Medical is pleased to announce that it has
              been acquired. The ReCODE Chat application has been
              retired, and the technology will be brought to market
              as a completely new product under its new ownership.
            </p>
            <p className="mb-6">
              ReCODE Chat was built to give physicians and medical
              coders a faster, AI-powered way to navigate the
              complexities of medical coding. The platform was
              adopted by physicians and clinics across the United
              States, confirming a clear demand for smarter tools
              in the coding workflow.
            </p>
            <p className="mb-6">
              The new owner will be building an entirely new product
              from the ground up, informed by the insights and
              feedback gathered during ReCODE Chat&rsquo;s time in
              the field. While the ReCODE name will not carry
              forward, the mission it represented will.
            </p>
            <p className="mb-6">
              We are grateful to every physician and care team who
              trusted ReCODE Chat in their practice. Your
              willingness to adopt new technology and share candid
              feedback made this outcome possible.
            </p>
            <p className="mb-6">
              Thank you for being part of this journey.
            </p>
          </div>
        </section>

        {/* Team */}
        <section
          className="py-20 px-8 text-center border-t border-gold/15"
          style={{ animation: "fadeIn 1s ease-out 1.4s both" }}
        >
          <p className="font-sans text-[0.8rem] font-normal tracking-[0.35em] uppercase text-gold-dim mb-12">
            From the entire team
          </p>
          <div className="flex justify-center gap-16 flex-wrap max-w-[700px] mx-auto">
            <div className="min-w-[160px]">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Matt Segar, MD
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Founder &amp; Chief Executive Officer
              </p>
            </div>
            <div className="min-w-[160px]">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Luke Rouleau
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Founder &amp; Chief Technology Officer
              </p>
            </div>
            <div className="min-w-[160px]">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Nick Segar, MBA
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Chief Strategy Officer
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="pt-16 pb-12 px-8 text-center"
        style={{ animation: "fadeIn 1s ease-out 1.6s both" }}
      >
        <hr className="w-10 border-0 h-px bg-gold-dim mx-auto mb-10" />
        <p className="font-serif italic font-normal text-[1.5rem] text-gold">
          The mission continues
        </p>
        <p className="font-sans text-[1rem] text-gold-dim mt-8 tracking-[0.1em]">
          &copy; 2026 ReCODE Medical
        </p>
      </footer>
    </div>
  );
}
