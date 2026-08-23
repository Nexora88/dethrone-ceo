import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Hakkımda & Vizyon</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Merhaba, ben Nexora.
          </p>

          <p>
            Bu siteyi odamda, kendi imkanlarımla geliştirdim. Amacım basit:
            finans dünyasının en bilinen şirketlerini ve kripto varlıklarını
            eğlenceli, rekabetçi ve herkesin katılabileceği bir oyuna dönüştürmek.
          </p>

          <div className="border-l-4 border-white pl-5 py-2 my-8">
            <p className="text-white font-medium italic">
              “Bütün ümidim gençliktedir.”
            </p>
            <p className="text-sm text-gray-400 mt-2">— Mustafa Kemal Atatürk</p>
          </div>

          <p>
            Atatürk’ün bu sözü, benim için sadece bir alıntı değil.
            Gençlerin üretmesi, denemesi ve cesaret etmesi gerektiğine inanıyorum.
            dethrone.ceo da bu inancın küçük bir yansıması.
          </p>

          <p>
            Burada kimse gerçek bir CEO olmuyor. Ama bir anlığına da olsa
            Tesla’nın, Bitcoin’in veya Aselsan’ın tahtına oturmak,
            rekabet etmek ve “ben de varım” demek mümkün.
          </p>

          <p>
            Proje hâlâ gelişiyor. Boardroom Coup, Onur Anıtı ve yeni özellikler
            yolda. Geri bildirimleriniz benim için çok değerli.
          </p>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-3">Beni takip et:</p>
            <a
              href="https://x.com/nexora88team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
            >
              @nexora88team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
