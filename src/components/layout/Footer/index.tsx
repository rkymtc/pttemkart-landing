const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6" id="contact">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between px-6 items-center text-center space-y-4 md:space-y-0 md:space-x-12">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/logo.png"
            alt="PTTEM Kart"
            className="h-10"
          />
        </div>

        {/* Adres */}
        <div className="text-left">
          <p className="font-bold text-yellow-400 pb-3">📍 PTTEM KART</p>
          <p>BEYTEPE, BEYLER CD. NO:1, 06800 ÇANKAYA/ANKARA</p>
        </div>

        {/* E-posta ve Telefon */}
        <div className="text-left">
          <p className="pb-3">
            ✉️ <a href="mailto:PTTEMKART@PTTEM.COM" className="text-gray-300 hover:text-yellow-400 ">PTTEMKART@PTTEM.COM</a>
          </p>
          <p>
            📞 <a href="tel:+905314502222" className="text-gray-300 hover:text-yellow-400">0531 450 22 22</a>
          </p>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="bg-gray-900 text-center py-3 mt-4">
        <p className="text-sm text-gray-400">
          © PTTEM TEKNOLOJİ VE ELEKTRONİK HİZMETLERİ ANONİM ŞİRKETİ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
