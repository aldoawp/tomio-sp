import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, TwitterIcon as TikTok, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tomio</h3>
            <p className="text-muted-foreground text-sm">
              Konsultasi Strategis untuk Pengusaha dan UMKM untuk menumbuhkan
              kehadiran online mereka melalui pemasaran organik.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Tautan cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/hubungi"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Hubungi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legalitas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/syarat"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="/privasi"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kebijakan Cookie
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kebijakan GDPR
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium mb-4">
              Siap untuk mengembangkan bisnis Anda?
            </h4>
            <Button asChild>
              <Link href="/hubungi">Booking Konsultasi Gratis</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Tomio. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
