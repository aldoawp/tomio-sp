import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Di Tomio, kami menganggap serius privasi Anda.Kebijakan Privasi ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            Anda informasi pribadi.
          </p>

          <h2> 1.Informasi yang kami kumpulkan </h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan langsung kepada kami,
            seperti nama Anda, alamat email, nomor telepon, dan Informasi Bisnis
            Saat Anda mengisi formulir kontak kami, berlangganan buletin kami,
            atau melibatkan kami Layanan.
          </p>

          <h2> 2.Bagaimana kami menggunakan informasi Anda </h2>
          <p> Kami menggunakan informasi yang kami kumpulkan untuk: </p>
          <ul>
            <li> Menyediakan, memelihara, dan meningkatkan layanan kami </li>
            <li>
              {" "}
              Berkomunikasi dengan Anda tentang layanan, promosi, dan acara kami{" "}
            </li>
            <li> Menanggapi komentar, pertanyaan, dan permintaan Anda </li>
            <li>
              {" "}
              Analisis bagaimana Anda menggunakan situs web kami untuk
              meningkatkan pengalaman pengguna{" "}
            </li>
            <li>
              {" "}
              Lindungi dari, identifikasi, dan cegah penipuan dan aktivitas
              ilegal lainnya{" "}
            </li>
          </ul>

          <h2> 3.Berbagi Informasi </h2>
          <p>
            Kami tidak menjual, memperdagangkan, atau mentransfer informasi
            pribadi Anda ke pihak luar kecuali di keadaan berikut:
          </p>
          <ul>
            <li>
              Dengan vendor, konsultan, dan penyedia layanan yang membutuhkan
              akses ke informasi tersebut untuk melakukan pekerjaan nama kami
            </li>
            <li>
              Menanggapi permintaan informasi jika kami yakin pengungkapan
              sesuai dengan apa pun yang berlaku hukum, peraturan, atau proses
              hukum
            </li>
            <li>
              Jika kami yakin tindakan Anda tidak konsisten dengan perjanjian
              atau kebijakan pengguna kami, atau untuk melindungi hak, properti,
              dan keselamatan Tomio atau orang lain
            </li>
            <li>
              Sehubungan dengan, atau selama negosiasi, setiap merger, penjualan
              aset perusahaan, pembiayaan, atau Akuisisi semua atau sebagian
              dari bisnis kami oleh perusahaan lain
            </li>
            <li> Dengan persetujuan Anda atau atas arahan Anda </li>
          </ul>

          <h2> 4.Keamanan Data </h2>
          <p>
            Kami mengambil tindakan yang wajar untuk membantu melindungi
            informasi tentang Anda dari kehilangan, pencurian, penyalahgunaan,
            dan tidak sah akses, pengungkapan, perubahan, dan penghancuran.
          </p>

          <h2> 5.Hak Anda </h2>
          <p>
            Bergantung pada lokasi Anda, Anda mungkin memiliki hak tertentu
            mengenai informasi pribadi Anda, seperti Hak untuk mengakses,
            memperbaiki, atau menghapus informasi pribadi Anda.
          </p>

          <h2> 6.Privasi Anak </h2>
          <p>
            Layanan kami tidak diarahkan kepada anak -anak di bawah 16 tahun,
            dan kami tidak secara sadar mengumpulkan informasi pribadi dari anak
            -anak di bawah 16.
          </p>

          <h2> 7.Perubahan Kebijakan Privasi ini </h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
            waktu.Kami akan memberi tahu Anda tentang perubahan apa pun dengan
            memposting yang baru Kebijakan Privasi di halaman ini dan
            memperbarui tanggal "Terakhir Diperbarui".
          </p>

          <h2> 8.Hubungi kami </h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan
            hubungi kami di{" "}
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
