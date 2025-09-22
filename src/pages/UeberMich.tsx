import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Target, CheckCircle, Heart, BookOpen, Zap } from "lucide-react";

const UeberMich = () => {
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
              ÜBER MICH
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Die Brücke zwischen{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Technik und Transformation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ich helfe dir und deiner Gemeinde, die Schätze der Bibel selbst zu heben – ob mit digitalen Profi-Werkzeugen oder einfach mit Stift und Papier. Technik dient dem Inhalt, nicht umgekehrt.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Meine Geschichte</h2>
                <p className="text-lg text-muted-foreground">
                  Als ehemaliger offizieller Logos-Trainer kenne ich nicht nur die Software, sondern auch die Hürden der Nutzer. Meine Leidenschaft ist es, die Brücke zwischen Technik und transformativem Bibelstudium zu bauen.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  In den letzten 6 Jahren habe ich über 60 Stunden Training geleitet und tausende Menschen dabei begleitet, die Bibel neu zu entdecken. Dabei ist mir eines immer wieder aufgefallen:
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Es geht nicht um die Software – es geht um Gottes Wort.</strong>
                </p>

                <p className="text-muted-foreground">
                  Die besten Tools der Welt nützen nichts, wenn sie nicht dazu führen, dass Menschen dem lebendigen Gott begegnen. Deshalb ist mein Ansatz anders: Ich zeige dir nicht nur, wie die Technik funktioniert, sondern wie sie dir hilft, Gottes Stimme zu hören.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/src/assets/simon-profile.jpeg" 
                  alt="Simon - Logos Workshop Trainer" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Meine Kernbotschaft</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg italic text-center">
                    "Ich helfe dir und deiner Gemeinde, die Schätze der Bibel selbst zu heben – ob mit digitalen Profi-Werkzeugen oder einfach mit Stift und Papier. Technik dient dem Inhalt, nicht umgekehrt."
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">6</p>
                  <p className="text-sm text-muted-foreground">Jahre als Trainer</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">60+</p>
                  <p className="text-sm text-muted-foreground">Stunden Training</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Teilnehmer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Meine Arbeitsweise</h2>
            <p className="text-xl text-muted-foreground">Was macht meine Workshops anders?</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Heart className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Bibelzentriert</h3>
                <p className="text-muted-foreground">
                  Die Software ist nur Werkzeug – Gottes Wort steht im Mittelpunkt. Wir nutzen Technik, um der Bibel zu dienen, nicht umgekehrt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Users className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Praxisorientiert</h3>
                <p className="text-muted-foreground">
                  Keine trockenen Feature-Listen, sondern reale Aufgaben. Du lernst genau die Werkzeuge kennen, die du für deinen Alltag brauchst.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center p-8">
              <CardContent className="space-y-6">
                <Target className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Individuell</h3>
                <p className="text-muted-foreground">
                  Jeder Workshop wird auf dein Level, deine Zielgruppe und deine Zeit zugeschnitten. Du bekommst genau das, was du brauchst.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold">
              Meine Vision:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Echte Transformation
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Was ich sehe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Menschen, die jahrelang dieselben Bibelstellen gelesen haben, entdecken plötzlich lebensverändernde Wahrheiten.</p>
                    <p className="text-muted-foreground">Pastoren finden frische Perspektiven für ihre Predigten.</p>
                    <p className="text-muted-foreground">Gemeindeglieder werden von passiven Zuhörern zu begeisterten Bibelentdeckern.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Was ich erlebe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Aus Kopfwissen wird Herzenserkenntnis.</p>
                    <p className="text-muted-foreground">Deine Predigt-Vorbereitung wird von mühsamer Pflicht zu spannender Entdeckungsreise.</p>
                    <p className="text-muted-foreground">Dein Bibelstudium wird von trockenem Wissen zu lebendiger Begegnung mit Gott.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Guarantee Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Meine Entdeckungs-Garantie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Wenn du in meinem Workshop nicht mindestens eine Bibelstelle völlig neu verstehst, bekommst du dein Geld zurück. So überzeugt bin ich von der Kraft der Bibelentdeckung.
                </p>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  100% GARANTIE
                </Badge>
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
              Lass uns gemeinsam herausfinden, wie ich dir helfen kann, die Bibel neu zu entdecken.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="/kontakt">Jetzt anfragen</a>
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
              Eins ist sicher: Nach dem Workshop wirst du die Bibel mit anderen Augen lesen. Und das ist erst der Anfang!
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

export default UeberMich;