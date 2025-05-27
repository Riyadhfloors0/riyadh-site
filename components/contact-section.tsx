"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Building2, Phone, Mail } from "lucide-react"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Console log the form data
      console.log("Form Data Submitted:", {
        ...values,
        timestamp: new Date().toISOString(),
      })

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          timestamp: new Date().toISOString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
      )

      console.log("EmailJS Response:", result)

      // Show success message
      toast.success("Message sent successfully! We'll get back to you soon.")

      // Reset form
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send message. Please try again later.")
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="w-full px-4 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                          {...field}
                        />
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
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                          {...field}
                        />
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
                      <FormLabel className="sr-only">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Subject"
                          className="w-full px-4 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                          {...field}
                        />
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
                      <FormLabel className="sr-only">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={12}
                          className="w-full px-4 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-medium px-8 py-4 rounded-md transition-colors duration-200"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-orange-500 font-medium mb-2">Contact Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get In Touch With Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you are looking for a distinctive garden design that adds beauty to your outdoor space, do not
                hesitate to contact us at Riyadh Flooring Company. We offer you the best prices and highest quality with
                innovative and customized designs.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Location */}
              <div className="col-span-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-md flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kuta</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
صبةالخراسانه مطبوعه ديكورات صبة مرؤحه بالرياض

                    </p>
                  </div>
                </div>
              </div>

              {/* Call Us 1 */}
              <div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-md flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">(+966)0568912128</p>
                  </div>
                </div>
              </div>

              {/* Email Information */}
              <div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-md flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Information</h3>
                    <p className="text-gray-600 text-sm">alirahamndir1234@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Call Us 2 */}
              <div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-md flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">(+966)0599656273</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <Link href="https://wa.me/+9660568912128" target="_blank" rel="noopener noreferrer">
           <Button>
            Contact on Whatsapp
           </Button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
