import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const description = formData.get("message") as string;

    try {
      const response = await fetch(
        "https://m-s-sat-backend-e8q7.vercel.app/api/user/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, description }),
        }
      );

      if (!response.ok) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
        return;
      }

      toast({
        title: "Message sent!",
        description: `Thanks ${name}, I'll get back to you at ${email} soon.`,
      });

      form.reset();
    } catch {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:mrinalsatyarthi2005@gmail.com"
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    mrinalsatyarthi2005@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    Social Links
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/m-s-sat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <FaGithub className="w-5 h-5" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/mrinal-satyarthi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
