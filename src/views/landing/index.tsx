'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/banner';
import CardSection from '@/components/ui/Card';
import CampaignSection from '@/components/section/CampaignSection';
import BrandsSection from '@/components/section/BrandsSection';
import FeaturesSection from '@/components/section/FeaturesSection';
import DarkSectionWithButton from '@/components/section/DarkSectionWithButton';
import { actions, brands, brands1, campaigns, features, slides } from '@/utils/data/cardData';
import FaqSection from '@/components/section/FaqSection';
import DownloadSection from '@/components/section/DownloadSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Animasyon tetikleme mesafesi
      delay: 0, // Başlangıç gecikmesi (ms)
      duration: 1000, // Animasyon süresi (ms)
      easing: 'ease-in-out', // Animasyon hız eğrisi
      once: true, // Animasyon sadece bir kez çalışır
      mirror: false, // Scroll geri gelirse animasyon tekrarlar
    });
    
  }, []);
  return (
    <div>
      <Header />
      <main className=" mt-8">
        <Banner slides={slides} />
        <CardSection 
          title="PTTEMKART NEDİR?" id="about"
          description="PTTEMKART 3500'Ü AŞAN MAĞAZA, 100'Ü AŞKIN ÜYE İŞ YERİ İLE BİNLERCE SEÇKİN MARKANIN ÜRÜNLERİNİ ÖZEL AVANTAJLARLA SUNAN HEDİYE KART PLATFORMUDUR."
          points={[
            { icon: '💳', text: "Çalışanlarınız için ayni yardımlarınızı PttemKart Kurumsal ile gerçekleştirebilirsiniz." },
            { icon: '🎁', text: "Bireysel HediyeKart ile sevdiklerinize kolayca hediye verin." },
          ]}
          imageUrl="/assets/images/hero_1.png"
        />
        <FeaturesSection features={features} id="feature" />
        <CampaignSection
          title="SİZE ÖZEL KAMPANYALAR"
          description={[
            { text: "HEDİYE ALMAK HİÇ BU KADAR " },
            { text: "AVANTAJLI", highlight: true },
            { text: " OLMAMIŞTI" },
          ]}
          campaigns={campaigns}
          bgColor="bg-gray-50"
        />
        <FeaturesSection
          title="ONLİNE İŞLEMLER"
          id="online"
          features={actions}
        />
        <FaqSection
          title="PTTEMKART MOBİL UYGULAMA İLE"
          description={[
            { text: "HER AN  " },
            { text: "HEDİYE KARTINIZ", highlight: true },
            { text: " CEBİNİZDE.." },
          ]}
        />
        <DownloadSection />
        <BrandsSection
          title="NERELERDE GEÇERLİDİR?" id="locations"
          description={[
            { text: "TÜRKİYE’NİN 81 İLİNDE " },
            { text: "3500’Ü AŞKIN", highlight: true },
            { text: " GLOBAL, ULUSAL VE YEREL ÜYE İŞ YERİMİZLE BİNLERCE MARKAMIZLA HİZMETİNİZDEYİZ …" },
          ]}
          brands={brands}
          bgColor="bg-gray-50"
        />
        <DarkSectionWithButton
          text="HER TARZA VE İHTİYACA UYGUN ÜRÜNLER, SEÇKİN MAĞAZALAR.. TÜRKİYE GENELİ TÜM ÜYE İŞYERLERİ."
          buttonText="LİSTELE"
          onButtonClick={() => alert('Listeleme işlemi başlatıldı!')}
        />
        <BrandsSection
          title="KİMLER PTTEMKART'I TERCİH ETTİ?" id="option"
          description={[{ text: "2020 YILINDA PTTEMKART AİLESİNE KATILAN KAMU KURUM VE KURULUŞLARINDAN BAZILARI" }]}
          brands={brands1}
          bgColor="bg-white"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
