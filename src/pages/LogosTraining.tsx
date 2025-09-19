import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Star, CheckCircle, ArrowRight, Zap, Search, BookOpen } from "lucide-react";
const LogosTraining = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-2xl font-bold text-primary">Logos-Workshops
          </a>
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
              LOGOS-TRAINING
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Vom digitalen Bücherregal zum{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                geistlichen Kraftwerk
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schluss mit der Frustration. In diesen praxisorientierten Modulen geht es nicht um trockene Funktionslisten, sondern um deinen direkten Nutzen. Wir lösen gemeinsam reale Aufgaben und du lernst genau die Werkzeuge kennen, die du für deinen Alltag brauchst.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Modul-Übersicht</h2>
            <p className="text-xl text-muted-foreground">Wähle das passende Level für deinen aktuellen Stand</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">STARTER</Badge>
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Modul 1: Starter</CardTitle>
                <CardDescription className="text-base">
                  Für alle, die Logos bereits haben, sich aber noch unsicher fühlen und die Grundlagen meistern wollen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Dein Ergebnis:</h4>
                  <p className="text-sm text-muted-foreground">
                    Du bewegst dich sicher in der Software, kennst die wichtigsten Werkzeuge und hast die ersten Hürden überwunden.
                  </p>
                </div>
                <div className="space-y-2">
                  {["Navigation & Benutzeroberfläche", "Grundlegende Suchen", "Wichtigste Ressourcen kennenlernen", "Erste praktische Übungen"].map((item, index) => <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">NEXT STEPS</Badge>
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Modul 2: Next Steps</CardTitle>
                <CardDescription className="text-base">
                  Für alle, die spüren, dass sie nur 10-15 % des Potenzials nutzen und jetzt richtig durchstarten wollen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Dein Ergebnis:</h4>
                  <p className="text-sm text-muted-foreground">
                    Du nutzt fortgeschrittene Suchen, verstehst die Verknüpfung der Ressourcen und dein Studium gewinnt massiv an Tiefe und Geschwindigkeit.
                  </p>
                </div>
                <div className="space-y-2">
                  {["Erweiterte Suchfunktionen", "Ressourcen intelligent verknüpfen", "Notizen & Highlights effektiv nutzen", "Workflows optimieren"].map((item, index) => <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">PROFI</Badge>
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Modul 3: Profi-Tipps & Hacks</CardTitle>
                <CardDescription className="text-base">
                  Für Power-Nutzer, die die letzten Geheimnisse lüften und ihren Workflow perfektionieren wollen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Dein Ergebnis:</h4>
                  <p className="text-sm text-muted-foreground">
                    Du kennst die Tricks der Profis, automatisierst Abläufe und nutzt Logos auf einem Level, das du nicht für möglich gehalten hast.
                  </p>
                </div>
                <div className="space-y-2">
                  {["Versteckte Features entdecken", "Automatisierung & Shortcuts", "Profi-Workflows", "Insider-Tricks & Hacks"].map((item, index) => <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Workshops Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Anwendungsorientierte Fokus-Workshops</h2>
            <p className="text-xl text-muted-foreground">Kein Training von der Stange – Wähle deinen Fokus</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">Bereit, Logos zu meistern?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lass uns gemeinsam das perfekte Training für deine Bedürfnisse finden.
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
              Technik dient dem Inhalt, nicht umgekehrt.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Impressum</a>
              <a href="#" className="hover:text-primary">Datenschutz</a>
              <a href="#" className="hover:text-primary">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LogosTraining;