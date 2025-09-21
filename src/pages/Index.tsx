import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Target, Star, Heart, Gift, ArrowRight, BookOpen, Search, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-2xl font-bold text-primary">Logos Workshops</a>
          </div>
          <div className="flex items-center space-x-4">
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
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Die Bibel neu entdecken -{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Logos Workshops fürs echte Leben
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In diesen Workshops ist Logos unser Assistent, nicht der Star. Der Star ist Gottes Wort. Hier geht es um die Freude am Entdecken, um Aha- und Wow-Momente, die dein Herz berühren und deinen Glauben stärken. Perfekt für Gemeindefreizeiten, Themenwochenenden oder Kleingruppentage.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Workshops Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Anwendungsorientierte Fokus-Workshops</h2>
            <p className="text-xl text-muted-foreground">In diesen praxisorientierten Modulen geht es nicht um trockene Funktionslisten, sondern um deinen direkten Nutzen. Wir lösen gemeinsam reale Aufgaben und du lernst genau die Werkzeuge kennen, die du für deinen Alltag brauchst.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <BookOpen className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Fokus Predigtvorbereitung</h3>
                <p className="text-muted-foreground">
                  Von der Exegese zum fertigen Manuskript in Rekordzeit.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Textanalyse & Kontext verstehen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Theologische Zusammenhänge erkunden</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Predigt-Workflow optimieren</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Search className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Fokus Persönliches Bibelstudium</h3>
                <p className="text-muted-foreground">
                  Stelle die richtigen Fragen an den Text und finde fundierte Antworten.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Systematische Texterschließung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Persönliche Notizen verwalten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Lebensrelevante Anwendungen finden</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Star className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Fokus Akademisches Arbeiten</h3>
                <p className="text-muted-foreground">
                  Nutze die Originalsprachen, Zitationswerkzeuge und die ganze wissenschaftliche Power für deine Forschung.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Originalsprachen erforschen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Wissenschaftliche Zitation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Forschungsmethodik</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Workshop Section */}
      <section className="py-20">
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
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">
              Das Rundum-Sorglos-Paket für{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                deine Gemeinde
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Als Leiter weißt du: Deine wichtigste Ressource sind deine Mitarbeiter. Wenn sie im Wort Gottes wachsen, wächst die ganze Gemeinde. Meine Workshops sind eine nachhaltige Investition in die Menschen, die den Dienst vor Ort tragen.</p>
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

      {/* Workshop Examples */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Entdecke die Bibel neu – mit bewährten Themen</h2>
            <p className="text-xl text-muted-foreground">Beispiele aus unserem Workshop-Repertoire</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🐋",
                title: "Jona – Ein unbarmherziger Prophet",
                subtitle: "eines barmherzigen Gottes",
                description: "Warum wollte Jona nicht nach Ninive? Die überraschende Antwort verändert alles. Du wirst Gottes Barmherzigkeit mit völlig neuen Augen sehen."
              },
              {
                emoji: "🌱",
                title: "Wie alles begann",
                subtitle: "Entdeckungen in Genesis 1",
                description: "Sieben Tage, die die Welt bedeuten – und was du bisher übersehen hast. Entdecke Gottes Schöpfungsplan für dein Leben."
              },
              {
                emoji: "💪",
                title: "Ermahnen & Ermutigung",
                subtitle: "Die parakalew-Wortstudie",
                description: "Ein griechisches Wort, das dein Gemeindeleben revolutioniert. Lerne die Kunst der biblischen Seelsorge neu."
              },
              {
                emoji: "⭐",
                title: "Barnabas",
                subtitle: "Ein unbekannter Held",
                description: "Der Mann, der Paulus möglich machte – und was wir von ihm lernen können. Entdecke die Kraft der Ermutigung."
              },
              {
                emoji: "🌊",
                title: "Der Gott, der den Sturm verschläft",
                subtitle: "(Markus 4,35-41)",
                description: "Eine Geschichte, die alles über Vertrauen lehrt. Finde Ruhe in deinen Lebensstürmen."
              },
              {
                emoji: "🐑",
                title: "Warum die Menschen den guten Hirten töten wollten",
                subtitle: "Johannes 10",
                description: "Verstörend aktuell und lebensverändernd. Verstehe Jesu radikale Botschaft neu."
              }
            ].map((workshop, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <div className="text-4xl mb-4">{workshop.emoji}</div>
                  <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {workshop.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{workshop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Weitere Themen auf Anfrage – oder wir entwickeln gemeinsam dein Wunschthema.
            </p>
            <Card className="bg-gradient-card shadow-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Das Versprechen</h3>
                <p className="text-lg">
                  In jedem Workshop wirst du mindestens eine Bibelstelle völlig neu verstehen – 
                  <span className="text-primary font-semibold"> garantiert!</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Bereit für neue Entdeckungen?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lass uns gemeinsam einen Workshop entwickeln, der perfekt zu deinen Bedürfnissen passt.
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
            <h3 className="text-2xl font-bold text-primary">Logos Workshops</h3>
            <p className="text-muted-foreground">
              Mit Logos entdecken, mit Begeisterung teilen!
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

export default Index;