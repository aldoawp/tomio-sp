import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Selamat datang di Tomio.Dengan mengakses atau menggunakan Situs Web
            dan Layanan kami, Anda setuju untuk terikat oleh Ketentuan ini dan
            Kondisi.{" "}
          </p>

          <h2>1. Layanan</h2>
          <p>
            Tomio menyediakan layanan konsultasi strategis untuk pemasaran media
            sosial, secara khusus berfokus pada Instagram dan Tiktok.Layanan
            kami termasuk, tetapi tidak terbatas pada, pengembangan strategi
            konten, penentuan posisi merek, dan konsultasi pemasaran.
          </p>

          <h2> 2.Tanggung Jawab Klien </h2>
          <p>
            Klien bertanggung jawab untuk memberikan informasi, materi, dan
            persetujuan yang diperlukan tepat waktu. Klien juga bertanggung
            jawab untuk menerapkan strategi dan rekomendasi yang disediakan oleh
            Tomio.
          </p>
          <h2> 3.Ketentuan Pembayaran </h2>
          <p>
            Ketentuan pembayaran akan diuraikan dalam Perjanjian Layanan yang
            disediakan untuk setiap klien.Umumnya, pembayaran diperlukan sebelum
            layanan dimulai, dan pembayaran berulang mungkin diperlukan untuk
            layanan yang sedang berlangsung.
          </p>

          <h2> 4.Kekayaan Intelektual </h2>
          <p>
            Semua bahan, strategi, dan konten yang dibuat oleh Tomio tetap
            Kekayaan intelektual Tomio sampai pembayaran penuh diterima.Setelah
            pembayaran, klien menerima lisensi untuk menggunakan materi ini
            untuk mereka tujuan bisnis.
          </p>

          <h2> 5.Kerahasiaan </h2>
          <p>
            Tomio setuju untuk menjaga kerahasiaan informasi klien.Demikian
            pula, Klien setuju untuk tidak berbagi strategi dan materi milik
            disediakan oleh Tomio dengan pihak ketiga tanpa izin tertulis.
          </p>

          <h2> 6.Keterbatasan Kewajiban </h2>
          <p>
            Tomio tidak bertanggung jawab atas langsung, tidak langsung,
            insidental, atau Kerusakan konsekuensial yang dihasilkan dari
            penggunaan layanan kami.Ketika Kami berusaha untuk memberikan
            strategi yang efektif, kami tidak dapat menjamin Hasil spesifik
            sebagai platform media sosial sering mengubahnya algoritma dan
            kebijakan.
          </p>

          <h2> 7.Penghentian </h2>
          <p>
            Salah satu pihak dapat mengakhiri perjanjian layanan dengan
            pemberitahuan tertulis sebagaimana ditentukan dalam Perjanjian
            Layanan.Biaya apa pun yang dibayarkan untuk layanan Belum diberikan
            mungkin dapat dikembalikan sebagaimana diuraikan dalam Layanan
            perjanjian.
          </p>

          <h2> 8.Hukum yang mengatur </h2>
          <p>
            Syarat dan Ketentuan ini diatur oleh hukum [Yurisdiksi].Perselisihan
            apa pun yang timbul dari ketentuan ini akan diselesaikan di
            pengadilan [yurisdiksi].
          </p>

          <h2> 9.Perubahan istilah </h2>
          <p>
            Tomio berhak untuk memodifikasi syarat dan ketentuan ini di mana
            saja waktu.Perubahan akan efektif segera setelah memposting ke kami
            situs web.Terus menggunakan layanan kami setelah perubahan merupakan
            penerimaan persyaratan baru.
          </p>

          <h2> 10.Informasi Kontak </h2>
          <p>
            Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini
            Hubungi kami di{" "}
            <Link
              href="mailto:contact@tomio.com"
              className="text-primary hover:underline"
            >
              contact@tomio.com
            </Link>
            .
          </p>

          <p className="mt-8">
            Terakhir diperbarui: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
