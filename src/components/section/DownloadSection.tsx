import { DownloadSectionProps } from "@/types/types";
import { qrCodes } from "@/utils/data/cardData";
import QRCodeItem from "../ui/Images/QRCodeItem";
import CustomVideoPlayer from "../ui/Video/VideoPlayer";


export default function DownloadSection({

 
}) {
  return (
    <section className="py-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Sol Kısım: Açıklama ve QR Kodlar */}
          <div className="flex-1">
            <p className="text-gray-700 leading-6 mb-6">
              KART BAKİYENİZDEN KAMPANYALARA, EN YAKIN ÜYE İŞ YERİNDEN BAKİYE YÜKLEME İŞLEMLERİNE KADAR,
              TÜM İSTEKLERİNİZİ <span className="font-semibold italic text-yellow-500">PTTEMKART MOBİL</span>{' '}
              UYGULAMA ARACILIĞIYLA CEP TELEFONUNUZDAN KOLAYLIKLA GERÇEKLEŞTİRİN.
            </p>
            <div className="flex space-x-6">
              {qrCodes.map((item, index) => (
                <QRCodeItem
                  key={index}
                  qrImage={item.qrImage}
                  storeImage={item.storeImage}
                  altText={item.altText}
                />
              ))}
            </div>
          </div>

          {/* Sağ Kısım: Video */}
          <div className="flex-1 flex justify-center">
            <CustomVideoPlayer
              videoUrl="/assets/videos/finalmobile.mp4"

            />
          </div>


        </section>
  );
}
