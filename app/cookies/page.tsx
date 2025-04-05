import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Kebijakan cookie ini menjelaskan bagaimana Tomio menggunakan cookie
            dan teknologi serupa untuk mengenali Anda saat Anda berkunjung Situs
            web kami.Ini menjelaskan apa teknologi ini dan mengapa kami
            menggunakannya, serta hak Anda untuk mengendalikan kita
            menggunakannya.
          </p>

          <h2> 1.Apa itu cookie? </h2>
          <p>
            Cookie adalah file data kecil yang ditempatkan di komputer atau
            perangkat seluler Anda saat Anda mengunjungi situs web. Cookie
            banyak digunakan oleh pemilik situs web untuk membuat situs web
            mereka berfungsi, atau juga bekerja lebih efisien untuk memberikan
            informasi pelaporan.
          </p>

          <h2> 2.Mengapa kita menggunakan cookie? </h2>
          <p> Kami menggunakan cookie karena beberapa alasan: </p>
          <ul>
            <li>
              {" "}
              Cookie Esensial: Ini diperlukan agar situs web ini berfungsi
              dengan baik{" "}
            </li>
            <li>
              Cookie Analitik/Kinerja: Ini memungkinkan kami untuk mengenali dan
              menghitung jumlah pengunjung dan melihat caranya Pengunjung
              bergerak di sekitar situs web kami
            </li>
            <li>
              {" "}
              Cookie Fungsi: Ini digunakan untuk mengenali Anda saat Anda
              kembali ke situs web kami{" "}
            </li>
            <li>
              Menargetkan Cookie: Ini mencatat kunjungan Anda ke situs web kami,
              halaman yang telah Anda kunjungi, dan tautan Anda telah mengikuti
            </li>
          </ul>

          <h2> 3.Jenis cookie yang kami gunakan </h2>
          <p>
            {" "}
            Jenis cookie spesifik yang disajikan melalui situs web kami dan
            tujuan yang mereka lakukan meliputi:{" "}
          </p>
          <ul>
            <li>
              <strong> cookie sesi: </strong> cookie ini bersifat sementara dan
              kedaluwarsa setelah Anda menutup browser Anda
            </li>
            <li>
              <strong> cookie persisten: </strong> cookie ini tetap ada di
              perangkat Anda sampai Anda menghapusnya atau mereka berakhir
            </li>
            <li>
              <strong> cookie pihak pertama: </strong> ini adalah cookie milik
              Tomio
            </li>
            <li>
              <strong> cookie pihak ketiga: </strong> Ini adalah cookie yang
              ditempatkan oleh pihak lain di perangkat Anda Situs web kami
            </li>
          </ul>

          <h2> 4.Cara mengontrol cookie </h2>
          <p>
            Anda dapat mengatur atau mengubah kontrol browser web Anda untuk
            menerima atau menolak cookie.Jika Anda memilih untuk menolak cookie,
            Anda mungkin masih menggunakan situs web kami melalui akses Anda ke
            beberapa fungsi dan area situs web kami terbatas.
          </p>

          <h2> 5.Pembaruan Kebijakan Cookie ini </h2>
          <p>
            Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu
            untuk mencerminkan, misalnya, perubahan pada cookie Kami menggunakan
            atau untuk alasan operasional, hukum, atau peraturan lainnya.Oleh
            karena itu mohon kunjungi kembali kebijakan cookie ini Secara
            teratur untuk tetap mendapat informasi tentang penggunaan cookie dan
            teknologi terkait kami.
          </p>

          <h2> 6.Hubungi kami </h2>
          <p>
            Jika Anda memiliki pertanyaan tentang penggunaan cookie atau
            teknologi lainnya, silakan hubungi kami di{" "}
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
