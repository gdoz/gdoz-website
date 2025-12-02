import { Cloud, Code, Lock, Brain } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Custom software development with modern architectures and best practices for scalable, maintainable solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Strategic cloud infrastructure design and implementation for optimal performance, cost efficiency, and resilience.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Comprehensive security consulting, risk assessment, and implementation of robust protection frameworks.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "AI/ML solutions integration, from strategy to deployment, enabling intelligent automation and insights.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary mb-4 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-muted/30 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Consulting • Management • Development • Operations</p>
          <a href="mailto:contact@gdoz.net" className="inline-flex items-center gap-2 text-primary hover:underline">
            Get in touch to discuss your project
          </a>
        </div>
      </div>
    </section>
  )
}
