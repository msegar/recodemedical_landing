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
              in the medical coding workflow.
            </p>
            <p className="mb-6">
              As part of the transition, we will be building an entirely new product
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
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/matthewsegar/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/mattsegar" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div className="min-w-[160px]">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Luke Rouleau
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Founder &amp; Chief Technology Officer
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/luke-rouleau/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/RouleauLuke" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div className="min-w-[160px]">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Nick Segar, MBA
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Chief Strategy Officer
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/nicholas-segar/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/NickSegar_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
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
