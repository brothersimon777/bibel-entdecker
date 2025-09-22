import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { Mail, Calendar, MessageSquare, CheckCircle, Clock, Users, Target } from "lucide-react";

const Kontakt = () => {
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
            <Button variant="ghost" asChild>
              <a href="/kontakt">Kontakt</a>
            </Button>
            <Button 
              variant="gradient"
              onClick={() => window.open('https://tidycal.com/klickwinkel/video-call', '_blank')}
            >
              Beratungsgespräch
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
              KONTAKT
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Bereit für den{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                nächsten Schritt?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lass uns unverbindlich darüber sprechen, wie ein Workshop für dich oder deine Gemeinde aussehen könnte. Ich freue mich darauf, dich kennenzulernen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">3 einfache Wege, um zu starten</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
              <CardHeader className="text-center">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">1. Formular ausfüllen</CardTitle>
                <CardDescription className="text-base">
                  Beschreibe kurz deine Situation und Wünsche – ich melde mich innerhalb von 24 Stunden bei dir.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ContactFormDialog />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-2"></div>
              <CardHeader className="text-center">
                <Mail className="h-16 w-16 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">2. Direkte E-Mail</CardTitle>
                <CardDescription className="text-base">
                  Schreib mir einfach eine Mail mit deinen Fragen und Vorstellungen.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="gradient" 
                  className="w-full text-lg py-6"
                  onClick={() => window.location.href = 'mailto:logos@klickwinkel.net'}
                >
                  E-Mail senden
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2"></div>
              <CardHeader className="text-center">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">3. Direkter Video-Call</CardTitle>
                <CardDescription className="text-base">
                  Buche dir einen kostenlosen 15-Minuten-Slot für ein persönliches Gespräch.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="gradient" 
                  className="w-full text-lg py-6"
                  onClick={() => window.open('https://tidycal.com/klickwinkel/video-call', '_blank')}
                >
                  Termin buchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We'll Discuss */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">In unserem Gespräch klären wir</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Deine Ziele und Wünsche",
                  description: "Was möchtest du erreichen? Welche Herausforderungen hast du?"
                },
                {
                  icon: Clock,
                  title: "Die perfekte Workshop-Länge",
                  description: "Von 2-Stunden-Sessions bis zu mehrtägigen Intensiv-Workshops"
                },
                {
                  icon: Users,
                  title: "Dein Wunschthema",
                  description: "Logos-Training, Bibel-Workshops oder eine individuelle Kombination"
                },
                {
                  icon: CheckCircle,
                  title: "Alle organisatorischen Details",
                  description: "Termine, Teilnehmerzahl, technische Voraussetzungen"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Unverbindlich & Kostenfrei</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Keine Verpflichtungen",
                      "Ehrliche Beratung",
                      "Maßgeschneiderte Lösungen",
                      "Schnelle Antworten auf alle Fragen"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Häufige Fragen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Welche technischen Voraussetzungen brauchen wir?</p>
                    <p className="text-muted-foreground">Besprechen wir individuell</p>
                  </div>
                  <div>
                    <p className="font-semibold">Kann der Workshop online stattfinden?</p>
                    <p className="text-muted-foreground">Ja, sowohl online als auch vor Ort möglich</p>
                  </div>
                  <div>
                    <p className="font-semibold">Was ist, wenn wir kein Logos haben?</p>
                    <p className="text-muted-foreground">Auch mit Stift und Papier funktioniert Bibelentdeckung!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <Card className="bg-gradient-card shadow-card max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Begrenzte Termine verfügbar</h3>
              <p className="text-lg text-muted-foreground">
                Als Ein-Mann-Unternehmen kann ich nur eine begrenzte Anzahl von Workshops pro Monat durchführen. Sichere dir deinen Wunschtermin frühzeitig.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Wie deine Gemeinde die Bibel neu entdecken kann</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Eins ist sicher: Nach dem Workshop wirst du die Bibel mit anderen Augen lesen. Und das ist erst der Anfang!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactFormDialog />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => window.location.href = 'mailto:logos@klickwinkel.net'}
              >
                E-Mail schreiben
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">Logos Workshops</h3>
            <p className="text-muted-foreground">
              Ich freue mich darauf, dich kennenzulernen und gemeinsam zu entdecken, wie dein Workshop aussehen könnte.
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

export default Kontakt;