import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Zap, Star, CheckCircle, ArrowRight, BookOpen, Target, Clock } from "lucide-react";

const BibelWorkshops = () => {
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
              <a href="/">Homepage</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/ueber-mich">Über mich</a>
            </Button>
            <Button variant="gradient" asChild>
              <a href="/kontakt">Jetzt anfragen</a>
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
              BIBEL-WORKSHOPS
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Die Bibel (neu) entdecken.{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Mit Begeisterung teilen.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In diesen Workshops ist Logos unser Assistent, nicht der Star. Der Star ist Gottes Wort. Hier geht es um die Freude am Entdecken, um Aha- und Wow-Momente, die dein Herz berühren und deinen Glauben stärken. Perfekt für Gemeindefreizeiten, Themenwochenenden oder Kleingruppentage.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Unsere Workshop-Formate</h2>
            <p className="text-xl text-muted-foreground">Für jeden Anlass das passende Format</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Flaggschiff Workshop */}
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">FLAGGSCHIFF</Badge>
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">"Honig fürs Herz"</CardTitle>
                <CardDescription className="text-base font-medium">
                  So liest und entdeckst du die Bibel auf eine Weise, die dich verändert.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Für wen?</h4>
                  <p className="text-sm text-muted-foreground">
                    Für alle Bibelleser und Entdecker, die sich nach neuen Impulsen sehnen.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Format:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>3-Stunden-Intensiv-Session</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Wochenend-Workshop</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Reihe mit 7 Einheiten</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Praxis Workshop */}
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">PRAXIS</Badge>
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">"Werkstatt Ehrenamt"</CardTitle>
                <CardDescription className="text-base font-medium">
                  Bibelfundiert, Christuszentriert, Veränderungsorientiert.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Für wen?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ehrenamtliche in der Kinder-, Jugend- und Kleingruppenarbeit.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Inhalte:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Andachten für Jugendgruppen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Geschichten für Kindergottesdienst</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Kleingruppenstunden vorbereiten</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intensiv Workshop */}
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">INTENSIV</Badge>
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">"Meisterklasse Predigt"</CardTitle>
                <CardDescription className="text-base font-medium">
                  Vom Text zur Kanzel – ein ganzheitlicher Ansatz.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Für wen?</h4>
                  <p className="text-sm text-muted-foreground">
                    Pastoren und Prediger, die ihr Handwerk verfeinern wollen.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Mehr als Logos-Training:</h4>
                  <p className="text-sm text-muted-foreground">
                    Exegetische Methoden kombiniert mit homiletischen Prinzipien. Wie wird aus einer soliden Exegese eine Predigt, die Herzen bewegt?
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default BibelWorkshops;