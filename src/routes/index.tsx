import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-nikola-tesla.png";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Globe2,
  Compass,
  Crown,
  HeartHandshake,
  Quote,
  ArrowRight,
} from "lucide-react";

const WA = "https://wa.me/524443206882";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colegio Nikola Tesla · Secundaria en San Luis Potosí" },
      {
        name: "description",
        content:
          "Secundaria presencial en San Luis Potosí. Formamos personas que saben quiénes son. Ciclo escolar 2026-2027. CCT 24PES0256E.",
      },
      { property: "og:title", content: "Colegio Nikola Tesla · Secundaria SLP" },
      {
        property: "og:description",
        content: "Formamos personas que saben quiénes son. Inscripciones ciclo 2026-2027.",
      },
    ],
  }),
  component: Landing,
});

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "purple" | "navy";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    purple:
      "bg-[oklch(0.52_0.18_290)] text-white hover:shadow-lg hover:shadow-[oklch(0.52_0.18_290)]/30",
    navy: "bg-navy text-white hover:bg-navy/90",
  };
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Colegio Nikola Tesla" className="h-10 sm:h-12 w-auto" />
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+524443206882"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              444 320 6882
            </a>
            <WhatsAppButton variant="primary" className="!px-4 !py-2 text-sm">
              Quiero información
            </WhatsAppButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 -z-0 opacity-60">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Inscripciones abiertas · Ciclo 2026-2027
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground">
            Formamos personas que saben{" "}
            <span className="italic text-primary">quiénes son.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secundaria presencial en San Luis Potosí · Ciclo 2026-2027
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <WhatsAppButton variant="primary">
              <MessageCircle className="h-4 w-4" />
              Solicitar información
            </WhatsAppButton>
            <a
              href="#modelo"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm sm:text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Conocer el modelo
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { icon: ShieldCheck, label: "CCT 24PES0256E" },
              { icon: Globe2, label: "Google for Education" },
              { icon: Sparkles, label: "Ciclo 2026-2027" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs sm:text-sm font-semibold text-foreground border border-border shadow-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE FORMAMOS */}
      <section id="modelo" className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Lo que formamos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground">
              El perfil de quien egresa del Colegio Nikola Tesla
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground">
              Aquí las calificaciones son consecuencia, no el objetivo. Lo que importa es el
              carácter que se construye en el camino.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n: "01", icon: ShieldCheck, t: "Disciplinado sin miedo", q: "La disciplina que dura nace del orgullo, no del miedo." },
              { n: "02", icon: Sparkles, t: "Valiente para lo nuevo", q: "Atreverse es un músculo. Se entrena." },
              { n: "03", icon: Globe2, t: "Global con raíces", q: "El mundo es su destino. San Luis es su origen." },
              { n: "04", icon: Compass, t: "Autónomo de verdad", q: "Sabe cuándo pedir ayuda y cuándo resolverlo solo." },
              { n: "05", icon: Crown, t: "Líder sin arrogancia", q: "Líder es quien hace que las cosas sucedan, con o sin título." },
              { n: "06", icon: HeartHandshake, t: "Con consciencia social", q: "El éxito personal y el compromiso con la comunidad se necesitan." },
            ].map(({ n, icon: Icon, t, q }) => (
              <article
                key={n}
                className="group relative bg-card rounded-2xl p-7 sm:p-8 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-bold text-primary tracking-wider">{n}</span>
                      <h3 className="font-serif text-xl sm:text-2xl text-foreground">{t}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">"{q}"</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Voces de la comunidad
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground">
              Lo que dicen quienes nos conocen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Abby",
                role: "Egresada Generación 2018",
                q: "Aprendí a trabajar en equipo de una manera dinámica y divertida, así como a manejar mi tiempo y ser eficiente en lo que hacía. Me gustó que además de aprender académicamente, aprendí cosas que me servirían para la vida cotidiana.",
                initials: "A",
              },
              {
                name: "Mamá de Alexander",
                role: "Familia de la comunidad",
                q: "Cuando nos mudamos a Polonia lo que más extrañamos fue el Colegio Nikola Tesla, por su atención cálida y humana y la forma en que mi hijo aprendió.",
                initials: "MA",
              },
              {
                name: "Mamá de Luis",
                role: "Familia de la comunidad",
                q: "Nos encanta compartirles que Luis se ha titulado de ingeniería con especialidad en Inteligencia Artificial, gracias a lo que aprendió en el Colegio Nikola Tesla.",
                initials: "ML",
              },
            ].map(({ name, role, q, initials }) => (
              <article
                key={name}
                className="bg-card rounded-2xl p-7 border border-border hover:shadow-xl transition-all flex flex-col"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 leading-relaxed flex-1">"{q}"</p>
                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <div className="flex items-center justify-center h-11 w-11 rounded-full bg-primary/10 text-primary font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground italic">
            Los nombres han sido cambiados para proteger la identidad y privacidad.
          </p>
        </div>
      </section>

      {/* ALIANZAS */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-8">
            Trabajamos con
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              "Google for Education",
              "Hour of Code International Partner",
              "PixanCode",
              "Sinapsis",
            ].map((name) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm sm:text-base font-semibold text-foreground border border-border shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER COURSE — BTS */}
      <section className="bg-lavender py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white/60 backdrop-blur rounded-3xl p-8 sm:p-12 border border-white shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.52_0.18_290)] text-white px-4 py-1.5 text-xs font-semibold mb-5">
              Para jóvenes ARMY · 12 a 17 años
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-lavender-foreground">
              Este verano: Fortalezas de Carácter con BTS
            </h2>
            <p className="mt-5 text-base sm:text-lg text-lavender-foreground/80 leading-relaxed">
              No es un club de fans. Es un espacio serio y cálido donde cada joven trabaja sus
              fortalezas de carácter a través del mensaje humano de BTS.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Fechas", "20 de julio al 14 de agosto de 2026"],
                ["Inversión", "$2,500 MXN"],
                ["Horarios", "Matutino 9:00-13:00 · Vespertino 16:00-20:00"],
                ["Cupo", "Limitado"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white/70 rounded-xl p-4 border border-white">
                  <dt className="text-xs uppercase tracking-wider font-bold text-[oklch(0.52_0.18_290)]">
                    {k}
                  </dt>
                  <dd className="mt-1 font-semibold text-lavender-foreground">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <WhatsAppButton variant="purple">
                <MessageCircle className="h-4 w-4" />
                Apartar mi lugar
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="bg-navy text-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--gold)] mb-4">
            Inscripciones abiertas
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Inscripciones ciclo 2026-2027
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto">
            Aprendizaje real. Cada estudiante tiene nombre, historia y seguimiento personalizado.
          </p>

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              ["1", "Escríbenos por WhatsApp", "Resolvemos tus dudas directamente."],
              ["2", "Agenda una visita", "Conoce el colegio y al equipo."],
              ["3", "Aparta tu lugar", "Asegura el cupo de tu hijo o hija."],
            ].map(([n, t, d]) => (
              <li
                key={n}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    {n}
                  </span>
                  <h3 className="font-serif text-xl">{t}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <WhatsAppButton variant="primary" className="!px-8 !py-4 !text-base sm:!text-lg">
              <MessageCircle className="h-5 w-5" />
              Escribir ahora · 444 320 6882
              <ArrowRight className="h-4 w-4" />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Estamos aquí
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Visítanos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-card rounded-2xl p-8 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">Colegio Nikola Tesla</h3>
                <div className="flex items-start gap-3 text-foreground/90 mb-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <address className="not-italic leading-relaxed">
                    Av. Himno Nacional 5305-A
                    <br />
                    Barrio de San Juan de Guadalupe
                    <br />
                    78359 San Luis Potosí, S.L.P.
                  </address>
                </div>
                <div className="flex items-center gap-3 text-foreground/90 mb-8">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Lunes a viernes · 8:00 a 14:00</span>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Av+Himno+Nacional+5305-A+San+Juan+de+Guadalupe+San+Luis+Potosi+SLP+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all self-start"
              >
                <MapPin className="h-4 w-4" />
                Abrir en Google Maps
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-lg min-h-[360px]">
              <iframe
                title="Ubicación Colegio Nikola Tesla"
                src="https://www.google.com/maps?q=Av+Himno+Nacional+5305-A,+Barrio+de+San+Juan+de+Guadalupe,+78359+San+Luis+Potosi,+SLP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-white/80 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-xl p-2">
                <img src={logo} alt="Colegio Nikola Tesla" className="h-12 w-auto" />
              </div>
              <p className="text-sm leading-relaxed">
                © 2026 Colegio Nikola Tesla
                <br />
                CCT 24PES0256E · San Luis Potosí, México
              </p>
            </div>
            <div className="md:text-right text-sm space-y-1">
              <a
                href="https://nikolatesla.edu.mx"
                className="block hover:text-white transition-colors"
              >
                nikolatesla.edu.mx
              </a>
              <a href="tel:+524443206882" className="block hover:text-white transition-colors">
                444 320 6882
              </a>
            </div>
          </div>
          <p className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/60 italic max-w-2xl mx-auto">
            Los nombres y rostros de nuestros estudiantes han sido cambiados para proteger su
            identidad y privacidad.
          </p>
        </div>
      </footer>
    </div>
  );
}
