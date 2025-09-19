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
        <div className="container relative">
          <div className="text-center py-20 space-y-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold tracking-tight text-foreground">
                Als Leiter investierst du in Menschen. Ich helfe dir, besser in dein{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  wichtigstes Werkzeug
                </span>{" "}
                zu investieren: das Wort Gottes.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Entdecke maßgeschneiderte Workshops, die dein Team befähigen, deine Gemeinde begeistern und dein persönliches Studium revolutionieren.
              </p>
            </div>

            {/* Two Pillars */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-card shadow-card border-0 overflow-hidden p-8 text-left">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Logos-Training: Die Software meistern</h3>
                    <p className="text-muted-foreground mb-6">
                      Du besitzt Logos, fühlst dich aber von den Möglichkeiten erschlagen? Ich zeige dir, wie du vom reinen "Besitzer" zum souveränen "Nutzer" wirst. Lerne die Funktionen kennen, die dir wirklich Zeit sparen und neue Erkenntnisse bringen.
                    </p>
                    <Button variant="gradient" className="w-full" asChild>
                      <a href="/logos-training">Zum Logos-Training</a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-card shadow-card border-0 overflow-hidden p-8 text-left">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Bibel-Workshops: Die Schrift entdecken</h3>
                    <p className="text-muted-foreground mb-6">
                      Du sehnst dich nach frischen Aha-Momenten in der Bibel? In diesen Workshops steht der biblische Text im Mittelpunkt. Wir entdecken gemeinsam Gottes Wort – Logos ist dabei unser optionaler, aber genialer Assistent. Auch mit Stift und Papier bist du hier goldrichtig.
                    </p>
                    <Button variant="gradient" className="w-full" asChild>
                      <a href="/bibel-workshops">Zu den Bibel-Workshops</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Für wen sind diese Workshops?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Pastoren & Prediger", desc: "Für eine tiefgründigere und effizientere Vorbereitung." },
              { icon: Target, title: "Gemeindeleiter & Ehrenamtliche", desc: "Um Teams auszurüsten und Kleingruppen zu stärken." },
              { icon: Star, title: "Theologiestudierende", desc: "Für den entscheidenden Vorteil im Studium und bei Hausarbeiten." },
              { icon: CheckCircle, title: "Jeden Bibelleser", desc: "Für alle, die einfach tiefer graben und mehr entdecken wollen." }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card shadow-card text-center p-6">
                <CardContent className="space-y-4">
                  <item.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              DEIN GUIDE
            </Badge>
            <h2 className="text-4xl font-bold">
              Dein Guide mit{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                6 Jahren Insider-Erfahrung
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Als ehemaliger offizieller Logos-Trainer kenne ich nicht nur die Software, sondern auch die Hürden der Nutzer. Meine Leidenschaft ist es, die Brücke zwischen Technik und transformativem Bibelstudium zu bauen.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Jahre als offizieller Trainer</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Webinare & Tutorials</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Begeisterte Teilnehmer</p>
              </div>
            </div>

            <Button variant="outline" size="lg" asChild>
              <a href="/ueber-mich">Mehr über mich erfahren</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lass uns unverbindlich darüber sprechen, wie ein Workshop für dich oder deine Gemeinde aussehen könnte. Ich freue mich darauf, dich kennenzulernen.
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