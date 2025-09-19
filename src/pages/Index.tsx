import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Users, Clock, Target, Star, Calendar, Mail, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-primary">BibelDiscovery</h2>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Über mich</Button>
            <Button variant="ghost">Workshops</Button>
            <Button variant="ghost">Testimonials</Button>
            <Button variant="gradient">Beratungsgespräch</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Inspired by Kajabi */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-foreground">
                  Logos lieben lernen, statt nur{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Logos haben
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Verwandle deine Bibelarbeit in ein lebendiges Abenteuer der Entdeckung
                </p>
                <p className="text-lg text-muted-foreground">
                  Individuell buchbare Workshops für Gemeinden, Pastoren und Bibelschulen – 
                  mit 6 Jahren Logos-Erfahrung und hunderten begeisterten Teilnehmern.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenloses Beratungsgespräch buchen
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Workshop-Beispiele ansehen
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Über 500 begeisterte Teilnehmer
                </p>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="relative">
              <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
                <div className="bg-gradient-hero h-2"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">WORKSHOP</Badge>
                    <Badge variant="outline">LIVE</Badge>
                  </div>
                  <CardTitle className="text-xl">Jona – Ein unbarmherziger Prophet</CardTitle>
                  <CardDescription>
                    Entdecke die überraschende Wahrheit hinter Jonas Widerstand
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>15 Teilnehmer</span>
                    <Clock className="h-4 w-4" />
                    <span>4 Stunden</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Historischer Kontext</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Griechische Wortstudien</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Praktische Anwendung</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Du kennst das Problem:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Logos liegt ungenutzt auf dem Computer",
              "Die Predigt-Vorbereitung dauert ewig",
              "Immer die gleichen oberflächlichen Erkenntnisse",
              "Die Gemeinde hört passiv zu, statt selbst zu entdecken",
              "Bibelstudium fühlt sich trocken und theoretisch an",
              "Du liest die Bibel, aber sie berührt dich nicht mehr",
              "Bekannte Geschichten langweilen, statt zu inspirieren",
              "Du suchst nach Tiefe, findest aber nur Oberfläche"
            ].map((problem, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  DIE LÖSUNG
                </Badge>
                <h2 className="text-4xl font-bold">
                  Workshops, die wirklich{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    funktionieren
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Nicht noch ein Funktions-Tutorial – sondern echte Bibelentdeckung!
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Mit 6 Jahren Erfahrung als offizieller Logos-Trainer und hunderten Webinaren 
                  weiß ich: Es geht nicht um Software-Features, sondern darum, die Bibel neu zu entdecken.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Hier passiert echte Transformation: Menschen, die jahrelang dieselben Bibelstellen 
                  gelesen haben, entdecken plötzlich lebensverändernde Wahrheiten.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Target, text: "Sofort anwendbar: Du nimmst konkrete Erkenntnisse mit nach Hause" },
                  { icon: Users, text: "Zum Mitmachen: Aktive Entdeckung statt passives Zuhören" },
                  { icon: Star, text: "Individuell angepasst: Dein Level, deine Zielgruppe, deine Zeit" },
                  { icon: CheckCircle, text: "Bibelzentriert: Die Software ist nur Werkzeug – Gottes Wort steht im Mittelpunkt" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">6 JAHRE</Badge>
                    <span>Offizieller Logos-Trainer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">500+</p>
                      <p className="text-sm text-muted-foreground">Webinare</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">1000+</p>
                      <p className="text-sm text-muted-foreground">Teilnehmer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Das Versprechen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-center">
                    In jedem Workshop wirst du mindestens eine Bibelstelle völlig neu verstehen – 
                    <span className="text-primary"> garantiert!</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lass uns gemeinsam entdecken, wie dein Workshop aussehen könnte.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
                  <CardTitle className="text-white">Workshop anfragen</CardTitle>
                  <CardDescription className="text-white/80">
                    Beschreibe kurz deine Situation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Formular ausfüllen
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
                  <CardTitle className="text-white">Direkte E-Mail</CardTitle>
                  <CardDescription className="text-white/80">
                    Schreib mir deine Fragen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    E-Mail senden
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardHeader className="text-center">
                  <Video className="h-12 w-12 mx-auto mb-4 text-white" />
                  <CardTitle className="text-white">Video-Call (15 Min)</CardTitle>
                  <CardDescription className="text-white/80">
                    Persönliches Gespräch buchen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Termin buchen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">BibelDiscovery</h3>
            <p className="text-muted-foreground">
              Eins ist sicher: Nach dem Workshop wirst du die Bibel mit anderen Augen lesen. 
              Und das ist erst der Anfang!
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