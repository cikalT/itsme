
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const { name, email, subject, message } = data;

    const mailtoLink = `mailto:contact.cikalt@gmail.com?subject=${encodeURIComponent(subject || 'No Subject')}&body=${encodeURIComponent(
      `${message || 'No message provided.'}\n\nFrom: ${name || 'Anonymous'}\nEmail: ${email || 'No email provided'}`
    )}`;

    window.location.href = mailtoLink;

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  
  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Contact Me"
            subtitle="Let's get in touch"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <div className="bg-card rounded-lg p-6 shadow-md h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium">contact.cikalt@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Based On</p>
                      <p className="font-medium">Bali, Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252785.6185987231!2d115.16653340000001!3d-8.652531599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409f68651bb1%3A0xe1f39c36ef9fdc1!2sDenpasar%2C%20Denpasar%20City%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1712682707138!5m2!1sen!2sus" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0, borderRadius: "0.5rem" }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Based On"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="resize-none h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
