import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Star, CheckCircle, ArrowRight, Heart, Clock, Gift } from "lucide-react";

const GemeindenLeiter = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-2xl font-bold text-primary">BibelDiscovery</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/logos-training">Logos-Training</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/bibel-workshops">Bibel-Workshops</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/gemeinden-leiter">Für Gemeinden</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/ueber-mich">Über mich</a>
            </Button>
            <Button variant="gradient" asChild>
              <a href="/kontakt">Beratungsgespräch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              FÜR GEMEINDEN & LEITER
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Gebt euren Mitarbeitern{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Handwerkszeug und eine Bibliothek
              </span>{" "}
              mit nach Hause
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Als Leiter weißt du: Deine wichtigste Ressource sind deine Mitarbeiter. Wenn sie im Wort Gottes wachsen, wächst die ganze Gemeinde. Meine Workshops sind eine nachhaltige Investition in die Menschen, die den Dienst vor Ort tragen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Workshop Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Warum ein Workshop vor Ort die beste Investition ist</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Clock className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Gemeinsam Zeit investieren</h3>
                <p className="text-muted-foreground">
                  Alleine zu Hause nimmt man sich oft nicht die Zeit. Ein fester Termin schafft Fokus und Verbindlichkeit – wie ein gemeinsamer Trainingstag im Fitness-Studio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Star className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Ein besonderer Anreiz</h3>
                <p className="text-muted-foreground">
                  Ein "Bibelstudium mit einer App" klingt moderner und spannender als ein klassischer Bibelabend. Es motiviert auch technik-affine Menschen, sich neu mit der Schrift zu beschäftigen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Users className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Mitarbeiter nachhaltig befähigen</h3>
                <p className="text-muted-foreground">
                  Deine Leute bekommen nicht nur Wissen, sondern auch die digitalen Werkzeuge und eine Bibliothek mit nach Hause. Plus die Fähigkeit, beides souverän zu nutzen. Das ist Zurüstung, die bleibt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rundum-Sorglos Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">
              Das Rundum-Sorglos-Paket für{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                deine Gemeinde
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Individuelle Planung",
                    description: "Wir schneidern den Workshop genau auf die Bedürfnisse deines Teams zu."
                  },
                  {
                    icon: ArrowRight,
                    title: "Kombinierbare Inhalte",
                    description: "Wie wäre es mit einem Logos-Starter-Modul am Vormittag und einem Praxis-Workshop \"Andachtsvorbereitung\" am Nachmittag?"
                  },
                  {
                    icon: Gift,
                    title: "Exklusive Vorteile",
                    description: "Nach Absprache organisiere ich kostenlose Testversionen und Rabatte für deine Teilnehmer."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Workshop-Beispiel: Gemeindetag</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">09:00-12:00</Badge>
                      <span className="font-medium">Logos-Starter für Anfänger</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">13:00-16:00</Badge>
                      <span className="font-medium">Praxis-Workshop: Andachtsvorbereitung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">16:30-17:30</Badge>
                      <span className="font-medium">Offene Fragerunde & nächste Schritte</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Inklusive Pausenversorgung, Arbeitsunterlagen und individueller Beratung für jeden Teilnehmer.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <span>Das Ergebnis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Deine Mitarbeiter sind sofort einsatzbereit",
                      "Neue Begeisterung für das Bibelstudium",
                      "Konkrete Werkzeuge für den Gemeindedienst",
                      "Langfristige Befähigung und Wachstum"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Was Gemeindeleiter sagen</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic">
                    "Der Workshop hat unser Bibelstudium revolutioniert. Aus passiven Zuhörern sind aktive Entdecker geworden. Unsere Hauskreise sind jetzt voller Leben und Entdeckerfreude!"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Gemeindeleitung</p>
                    <p className="text-sm text-muted-foreground">NRW</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic">
                    "Endlich verstehe ich, wie Logos wirklich funktioniert – und noch wichtiger: Ich entdecke die Bibel völlig neu! Nach 20 Jahren Pastorendienst dachte ich, ich kenne die Geschichten. Aber dieser Workshop hat mir gezeigt, wie viel ich übersehen habe."
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Pastor M.</p>
                    <p className="text-sm text-muted-foreground">Bayern</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Formats */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Flexible Formate für jeden Bedarf</h2>
            <p className="text-xl text-muted-foreground">Von der Schnupper-Session bis zum Wochenend-Intensiv</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Schnupper-Workshop digital",
                duration: "2-4 Stunden",
                description: "Perfekt zum Reinschnuppern",
                format: "Online"
              },
              {
                title: "Workshop Light",
                duration: "4 Stunden",
                description: "Kompakt und kraftvoll",
                format: "Vor Ort"
              },
              {
                title: "Ganztags-Vertiefung",
                duration: "8 Stunden",
                description: "Tief eintauchen und durchstarten",
                format: "Vor Ort"
              },
              {
                title: "Wochenend-Seminar",
                duration: "6-8 Stunden",
                description: "Freitag-Abend & Samstag",
                format: "Intensiv"
              },
              {
                title: "Power-Workshop",
                duration: "2-3 Tage",
                description: "Mit Predigt am Sonntag",
                format: "Vollausstattung"
              },
              {
                title: "Maßgeschneidert",
                duration: "Nach Absprache",
                description: "Ganz nach euren Bedürfnissen",
                format: "Individuell"
              }
            ].map((format, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{format.format}</Badge>
                  <CardTitle className="text-xl">{format.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {format.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Bereit, eure Gemeinde zu stärken?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lass uns gemeinsam den perfekten Workshop für eure Gemeinde entwickeln. Unverbindlich und kostenfrei.
            </p>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
              <a href="/kontakt">Jetzt kostenloses Erstgespräch anfragen</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">BibelDiscovery</h3>
            <p className="text-muted-foreground">
              Investiere in deine wichtigste Ressource: Menschen, die im Wort Gottes wachsen.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Impressum</a>
              <a href="#" className="hover:text-primary">Datenschutz</a>
              <a href="#" className="hover:text-primary">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GemeindenLeiter;