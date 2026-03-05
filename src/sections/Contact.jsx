import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "bb3501cd-d745-46c7-9331-d7fff858acad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

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
          <form onSubmit={onSubmit} className="glass space-y-2 rounded-2xl p-8">
            <div>
              <label className="text-muted-foreground text-sm">Name</label>
              <input
                type="text"
                name="Name"
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="text-muted-foreground text-sm">Email</label>
              <input
                type="email"
                name="Email"
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="text-muted-foreground text-sm">Message</label>
              <textarea
                name="Message"
                rows={4}
                className="focus:border-primary mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:outline-none"
                placeholder="Enter your message..."
                required
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
