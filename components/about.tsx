export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest text-primary mb-4 block">Since 2013</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Over a Decade of Digital Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            GDOZ Technology Solutions is a specialized consultancy with more than 15 years of experience delivering
            strategic solutions in software engineering, cloud architecture, cybersecurity, and artificial intelligence.
            We partner with organizations to design, build, and operate mission-critical digital products with precision
            and reliability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4</div>
            <div className="text-sm text-muted-foreground">Core Specializations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Commitment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Operations Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
