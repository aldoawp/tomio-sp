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
                Tentang Tomio{" "}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Kami membantu pengusaha dan usaha kecil tumbuh secara online
                Kehadiran melalui pemasaran organik yang strategis.{" "}
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
              <h2 className="text-3xl md:text-4xl font-bold">Misi kami</h2>
              <p className="text-lg text-muted-foreground">
                Di Tomio, kami percaya bahwa setiap bisnis layak untuk
                berkembang lanskap digital tanpa mengandalkan bayaran mahal
                iklan.{" "}
              </p>
              <p className="text-lg text-muted-foreground">
                Misi kami adalah memberdayakan pengusaha dan usaha kecil dengan
                strategi, pengetahuan, dan dukungan yang mereka butuhkan untuk
                membangun a Kehadiran online yang kuat secara organik.{" "}
              </p>
              <p className="text-lg text-muted-foreground">
                Kami fokus pada taktik pertumbuhan berkelanjutan yang
                menciptakan asli Koneksi dengan audiens Anda, mengubah pengikut
                menjadi loyal pelanggan.{" "}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai -nilai kita</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prinsip -prinsip yang memandu semua yang kami lakukan di Tomio.{" "}
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Pendekatan yang berpusat pada klien",
                description:
                  "Kami mengutamakan kebutuhan klien kami, menciptakan strategi khusus yang selaras dengan tujuan dan visi unik mereka.",
                delay: 0.1,
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "Inovasi & Kreativitas",
                description:
                  "Kami tetap di depan tren dan terus mengeksplorasi cara -cara baru untuk membantu klien kami menonjol di ruang digital yang ramai.",
                delay: 0.2,
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Pertumbuhan berkelanjutan",
                description:
                  "Kami fokus pada strategi jangka panjang yang membangun koneksi asli daripada keuntungan yang cepat dan tidak berkelanjutan.",
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
              Keahlian kami{" "}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dengan pengalaman bertahun -tahun dalam pemasaran digital, kami
              bawa Pengetahuan khusus untuk membantu bisnis Anda berhasil.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Strategi Media Sosial{" "}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Perencanaan dan pembuatan konten yang beresonansi dengan
                      Anda Target audiens{" "}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Taktik keterlibatan yang membangun komunitas dan
                      menumbuhkan loyalitas{" "}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Analitik dan pelacakan kinerja terus menerus
                      mengoptimalkan hasil{" "}
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Pengembangan Merek</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>Posisi merek yang membedakan Anda dari pesaing </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Pesan yang dengan jelas mengomunikasikan nilai unik Anda
                      dalil{" "}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p>
                      Bimbingan identitas visual yang menciptakan merek yang
                      kohesif pengalaman{" "}
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
              Siap bekerja dengan kami?{" "}
            </h2>
            <p className="text-lg mb-8">
              Mari kita bahas bagaimana kami dapat membantu Anda mencapai
              pemasaran digital Anda tujuan dan menumbuhkan kehadiran online
              Anda.{" "}
            </p>
            <Button size="lg" asChild>
              <Link href="/hubungi">Hubungi kami hari ini</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
