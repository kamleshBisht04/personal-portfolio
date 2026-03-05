import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="container-custom relative z-10">
        {/* section header  */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-primary text-xl font-semibold tracking-wider uppercase">
            Contact
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Let's work{" "}
            <span className="font-serif text-white italic"> together</span>
          </h2>

          <p className="text-muted-foreground text-[17px]">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I’d love to hear from you.
          </p>
        </div>

        {/* contact layout */}
        <div className="mx-auto grid max-w-6xl gap-28 md:grid-cols-2">
          {/* contact info */}
          <div className="space-y-8">
            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <Mail className="text-primary h-6 w-6" />
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium">kamleshbisht04@gmail.com</p>
              </div>
            </div>

            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <Phone className="text-primary h-6 w-6" />
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="font-medium"> 7895709188</p>
              </div>
            </div>

            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <MapPin className="text-primary h-6 w-6" />
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-medium"> India</p>
              </div>
            </div>
          </div>

          {/* right section  contact from*/}
          <form className="glass space-y-2 rounded-2xl p-8">
            <div>
              <labal className="text-muted-foreground text-sm">Name</labal>
              <input
                type="text"
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <labal className="text-muted-foreground text-sm">Email</labal>
              <input
                type="email"
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <labal className="text-muted-foreground text-sm">Email</labal>
              <textarea
                rows={4}
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="Enter your message..."
              />
            </div>
            {/* button */}
            <button className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 transition hover:opacity-90">
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
