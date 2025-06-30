"use client";

export default function FooterSection() {
  return (
    <footer
      className="mx-auto max-w-[98vw] mb-4 w-full rounded-3xl bg-black text-white px-4 sm:px-6 py-8 sm:py-12 md:py-24 shadow-2xl"
      style={{ minHeight: 400 }}
    >
      {/* Top Row */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-8 gap-4 md:gap-0 text-center md:text-left">
          <h2 className="font-extrabold text-2xl md:text-3xl text-[#CCFF02] tracking-tight">
            DEVLOP.ME
          </h2>
          <div className="font-sporting">
            <h2 className=" text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left mb-10 md:mb-16 flex-1">
              As you can
            </h2>
            {/* Columns */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-24 mb-12 text-center md:text-left">
              {/* Say hello & Call */}
              <div className="flex flex-col gap-8 min-w-[180px] items-center md:items-start">
                <div>
                  <div className="font-semibold mb-1 text-[#757575]">
                    Say hello
                  </div>
                  <div className="text-sm md:text-base">
                    HELLO@DEVLOP.ME.COM
                  </div>
                  <div className="text-sm md:text-base">MAHBUBUL@ME.COM</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-[#757575]">Call</div>
                  <div className="text-sm md:text-base">+784549 4981 00</div>
                  <div className="text-sm md:text-base">+8845 0100 211</div>
                </div>
              </div>
              {/* Menu */}
              <div className="flex flex-col gap-2 min-w-[120px] items-center md:items-start">
                <div className="font-semibold mb-1 text-[#757575]">Menu</div>
                <a href="#" className="hover:underline">
                  HOME
                </a>
                <a href="#" className="hover:underline">
                  ABOUT
                </a>
                <a href="#" className="hover:underline">
                  PORTFOLIO
                </a>
                <a href="#" className="hover:underline">
                  BLOG
                </a>
              </div>
              {/* Social */}
              <div className="flex flex-col gap-2 min-w-[120px] items-center md:items-start">
                <div className="font-semibold mb-1 text-[#757575]">Social</div>
                <a href="#" className="hover:underline">
                  TWITTER
                </a>
                <a href="#" className="hover:underline">
                  INSTAGRAM
                </a>
                <a href="#" className="hover:underline">
                  FACEBOOK
                </a>
                <a href="#" className="hover:underline">
                  BEHANCE
                </a>
                <a href="#" className="hover:underline">
                  DRIBBBLE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 gap-2 md:gap-4 text-center md:text-left">
          <span className="font-bold text-lg tracking-widest">BESNIK</span>
          <span className="text-gray-400 text-sm text-[#757575] font-sporting">© devlop.me 2022</span>
          <span className="text-gray-400 text-sm text-[#757575] font-sporting">PRIVACY – TERMS</span>
        </div>
      </div>
    </footer>
  );
}
