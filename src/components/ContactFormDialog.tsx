import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactFormDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent("Anfrage für Logos Workshop");
    const body = encodeURIComponent(`
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Organisation: ${formData.organization}

Nachricht:
${formData.message}
    `);
    
    const mailtoLink = `mailto:logos@klickwinkel.net?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "E-Mail wird geöffnet",
      description: "Ihr E-Mail-Programm wird mit der ausgefüllten Nachricht geöffnet.",
    });
    
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          Anfrage senden
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Workshop-Anfrage</DialogTitle>
          <DialogDescription>
            Teilen Sie mir Ihre Wünsche mit. Ich melde mich schnellstmöglich bei Ihnen.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Gemeinde/Organisation</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Ihre Nachricht *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            E-Mail senden
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}