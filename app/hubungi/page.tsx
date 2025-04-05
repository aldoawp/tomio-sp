"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

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
                Hubungi kami
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ada pertanyaan atau siap untuk memulai?Kami di sini untuk
                membantu Anda menumbuhkan kehadiran online Anda.{" "}
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Hubungi</h2>
                  <p className="text-muted-foreground">
                    Isi formulir dan tim kami akan menghubungi Anda dalam waktu
                    24 jam.{" "}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <Link
                        href="mailto:contact@tomio.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@tomio.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telepon</h3>
                      <Link
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +62-818-299-281
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Lokasi</h3>
                      <p className="text-muted-foreground">
                        Jl. Merah Putih No.19, DKI Jakarta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Pesan terkirim!
                      </h3>
                      <p className="text-muted-foreground">
                        Terima kasih telah menjangkau.Kami akan menghubungi Anda
                        kembali segera.{" "}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nama depan</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nama Belakang</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telepon (opsional)</Label>
                        <Input id="phone" type="tel" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Layanan tertarik</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instagram">
                              Strategi Instagram
                            </SelectItem>
                            <SelectItem value="tiktok">
                              Pertumbuhan Tiktok
                            </SelectItem>
                            <SelectItem value="brand">Posisi Merek</SelectItem>
                            <SelectItem value="consultation">
                              Konsultasi Umum
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Pesan</Label>
                        <Textarea id="message" rows={4} required />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" /> Kirim pesan
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Pertanyaan yang sering diajukan{" "}
              </h2>
              <p className="text-muted-foreground">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami.{" "}
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question:
                    "Berapa lama waktu yang dibutuhkan untuk melihat hasilnya?",
                  answer:
                    "Meskipun setiap bisnis berbeda, sebagian besar klien mulai melihat hasil awal dalam waktu 4-6 minggu setelah mengimplementasikan strategi kami. Pertumbuhan yang signifikan biasanya terjadi dalam 3-6 bulan eksekusi yang konsisten.",
                },
                {
                  question: "Apakah Anda menawarkan dukungan berkelanjutan?",
                  answer:
                    "Ya, kami menawarkan berbagai paket dukungan untuk membantu Anda menerapkan dan mempertahankan strategi media sosial Anda. Tujuan kami adalah tidak hanya memberi Anda rencana tetapi untuk memastikan Anda memiliki dukungan yang diperlukan untuk melaksanakannya secara efektif.",
                },
                {
                  question: "Berapa biaya layanan Anda?",
                  answer:
                    "Harga kami bervariasi berdasarkan kebutuhan dan tujuan spesifik Anda. Kami menawarkan paket khusus mulai dari $ x per bulan. Hubungi kami untuk penawaran yang dipersonalisasi berdasarkan kebutuhan Anda.",
                },
                {
                  question:
                    "Apakah Anda bekerja dengan bisnis di industri apa pun?",
                  answer:
                    "Kami bekerja dengan bisnis di berbagai industri, tetapi kami berspesialisasi dalam sektor -sektor tertentu di mana kami telah mencapai hasil terbaik. Hubungi kami untuk membahas industri spesifik Anda dan bagaimana kami dapat membantu.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
