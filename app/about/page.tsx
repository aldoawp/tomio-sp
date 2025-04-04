"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Lightbulb, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const MotionDiv = motion.div;

export default function AboutPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Tomio
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We help entrepreneurs and small businesses grow their online
                presence through strategic, organic marketing.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16" ref={ref1}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/teams-about.jpg"
                  alt="Tomio team working together"
                  fill
                  className="object-cover"
                />
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At Tomio, we believe that every business deserves to thrive in
                the digital landscape without relying on expensive paid
                advertising.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower entrepreneurs and small businesses
                with the strategies, knowledge, and support they need to build a
                strong online presence organically.
              </p>
              <p className="text-lg text-muted-foreground">
                We focus on sustainable growth tactics that create genuine
                connections with your audience, turning followers into loyal
                customers.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50" ref={ref2}>
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Tomio.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Client-Centered Approach",
                description:
                  "We put our clients' needs first, creating customized strategies that align with their unique goals and vision.",
                delay: 0.1,
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "Innovation & Creativity",
                description:
                  "We stay ahead of trends and constantly explore new ways to help our clients stand out in crowded digital spaces.",
                delay: 0.2,
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Sustainable Growth",
                description:
                  "We focus on long-term strategies that build genuine connections rather than quick, unsustainable gains.",
                delay: 0.3,
              },
            ].map((value, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: value.delay }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With years of experience in digital marketing, we bring
              specialized knowledge to help your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Social Media Strategy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Content planning and creation that resonates with your
                      target audience
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Engagement tactics that build community and foster loyalty
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Analytics and performance tracking to continuously
                      optimize results
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Brand Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Brand positioning that differentiates you from competitors
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Messaging that clearly communicates your unique value
                      proposition
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Visual identity guidance that creates a cohesive brand
                      experience
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8">
              Let's discuss how we can help you achieve your digital marketing
              goals and grow your online presence.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
