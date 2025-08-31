import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const companyDetails = {
  name: "A & E Insurance Group",
  address: "28441 S Tamiami Trail, Suite 109, Bonita Springs, FL 34134",
  phone: "239-591-1225",
  email: "Contact@aeinsurancegroup.net",
  hours: [
    { day: "M-Thur", time: "9am - 3pm EST" },
    { day: "Fri", time: "9am - 12pm EST" }
  ]
};

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We're here to help. Reach out to us by phone, email, or visit our office in Bonita Springs.
          </p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">{companyDetails.name}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=28441+S+Tamiami+Trail,+Suite+109,+Bonita+Springs,+FL+34134" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {companyDetails.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <a href={`tel:${companyDetails.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{companyDetails.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <a href={`mailto:${companyDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">{companyDetails.email}</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
              <div className="space-y-4">
                {companyDetails.hours.map((item) => (
                  <div key={item.day} className="flex items-center">
                    <Clock className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <p className="font-medium">{item.day}</p>
                      <p className="text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
