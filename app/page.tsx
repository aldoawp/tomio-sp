"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Instagram,
  TwitterIcon as TikTok,
  BarChart,
  Target,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const MotionDiv = motion.div;

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Grow Your Online Presence{" "}
                <span className="text-primary">Organically</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Strategic consulting to help entrepreneurs and small businesses
                thrive on Instagram & TikTok without paid ads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/home-hero.jpg"
                  alt="Digital marketing strategy session"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Average Growth</p>
                    <p className="text-xl font-bold">+127%</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50" ref={ref1}>
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We specialize in helping you grow your online presence through
              sustainable, non-paid strategies.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instagram Strategy</h3>
                  <p className="text-muted-foreground">
                    Develop a content strategy that increases engagement,
                    followers, and conversions on Instagram.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Content planning",
                      "Engagement tactics",
                      "Growth strategies",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <TikTok className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">TikTok Growth</h3>
                  <p className="text-muted-foreground">
                    Create viral-worthy content that expands your reach and
                    builds your brand on TikTok.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Trend analysis",
                      "Content creation",
                      "Audience building",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
                  <p className="text-muted-foreground">
                    Define your unique voice and position in the market to stand
                    out from competitors.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Brand identity",
                      "Competitive analysis",
                      "Audience targeting",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" ref={ref2}>
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven process to help you achieve sustainable growth on
              social media.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "We start with a free consultation to understand your business, goals, and current challenges.",
                delay: 0.1,
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "We create a customized strategy tailored to your specific business needs and target audience.",
                delay: 0.2,
              },
              {
                step: "03",
                title: "Implementation & Growth",
                description:
                  "We guide you through implementing the strategy and continuously optimize for maximum results.",
                delay: 0.3,
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: item.delay }}
                className="relative"
              >
                <div className="bg-muted p-8 rounded-xl h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </MotionDiv>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50" ref={ref3}>
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have
              achieved with our help.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                business: "Wellness Coach",
                quote:
                  "Working with Tomio transformed my social media presence. I've gained over 10,000 followers in just 3 months and my engagement has tripled!",
                image: "/people-1.webp",
                delay: 0.1,
              },
              {
                name: "Michael Chen",
                business: "E-commerce Store Owner",
                quote:
                  "The strategies Tomio provided helped me increase my conversion rate by 45%. My TikTok now drives consistent traffic to my store every day.",
                image: "/people-2.webp",
                delay: 0.2,
              },
              {
                name: "Emma Rodriguez",
                business: "Fitness Influencer",
                quote:
                  "Tomio helped me refine my brand messaging and content strategy. I'm now working with major brands and have doubled my income.",
                image: "/people-3.webp",
                delay: 0.3,
              },
            ].map((testimonial, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: testimonial.delay }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.business}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Online Presence?
              </h2>
              <p className="text-lg mb-8">
                Book a free consultation today and discover how we can help you
                achieve sustainable growth on Instagram and TikTok.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
