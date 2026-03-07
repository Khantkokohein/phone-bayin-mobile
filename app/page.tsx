export default function Home() {
  const categories = [
    { label: "iPhone", icon: "📱", active: false },
    { label: "Samsung", icon: "📱", active: true },
    { label: "Accessories", icon: "🎧", active: false },
    { label: "Smart Watch", icon: "⌚", active: false },
    { label: "Charger", icon: "🔌", active: false },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#d11d1d] via-[#b01212] to-[#8d0c0c] px-4 py-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* MOBILE / DESKTOP NAV */}
        <header className="mb-6">
          <div className="glass-nav flex items-center justify-between  rounded-t-3xl px-4 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/logo.svg"
                alt="ဖုန်းဘုရင်"
                className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
              />

              <div className="min-w-0 leading-tight text-white">
                <p className="truncate text-xl font-extrabold md:text-2xl">
                  ဖုန်းဘုရင်
                </p>
                <p className="text-sm text-yellow-100 md:text-base">Mobile</p>
              </div>
            </div>

            <button className="btn-gold shrink-0 rounded-[18px] px-5 py-3 text-lg font-extrabold md:px-6 md:py-3">
              Order Now
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[34px] border-4 border-yellow-300 shadow-[0_0_35px_rgba(255,215,100,0.45)]">
          <div className="absolute inset-0 hero-red" />
          <div className="gold-line absolute top-0 left-0 h-0.75 w-full" />
          <div className="gold-line absolute bottom-0 left-0 h-0.75 w-full" />

          {/* mobile-safe curtains */}
          <div className="curtain-left-mobile" />
          <div className="curtain-right-mobile" />

          <div className="spotlight" />

          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            <span className="fall-star left-[10%]"></span>
            <span className="fall-star left-[22%]"></span>
            <span className="fall-star left-[36%]"></span>
            <span className="fall-star left-[48%]"></span>
            <span className="fall-star left-[62%]"></span>
            <span className="fall-star left-[78%]"></span>
            <span className="fall-star left-[88%]"></span>
          </div>

          <div className="relative z-20 flex flex-col items-center px-4 pt-10 pb-20 text-center text-white md:px-6 md:pt-12 md:pb-24">
            <img
              src="/logo.svg"
              alt="ဖုန်းဘုရင်"
              className="mx-auto w-32 gold-glow md:w-44"
            />

            <h1 className="mt-3 text-4xl font-extrabold leading-none md:text-6xl">
              ဖုန်းဘုရင်
            </h1>

            <h2 className="mt-2 text-3xl font-extrabold leading-none md:text-4xl">
              Mobile
            </h2>

            <p className="mt-3 max-w-[90%] text-lg leading-tight md:text-lg">
              ဖုန်းနှင့် Accessories ရောင်းဝယ်ရေး
            </p>

            <div className="mt-8 flex w-full  max-w-130 flex-row justify-center gap-4">
              <button className="flex-1 rounded-[20px] bg-blue-600 px-4 py-4 text-xl font-extrabold text-white shadow-lg transition hover:bg-blue-700 md:flex-none md:px-8 md:text-lg">
                Messenger
              </button>

              <button className="btn-gold flex-1 rounded-[20px] px-4 py-4 text-xl font-extrabold md:flex-none md:px-8 md:text-lg">
                Contact
              </button>
            </div>
          </div>

          {/* stage */}
          <div className="stage-floor absolute bottom-0 left-1/2 h-14 w-[64%] -translate-x-1/2  rounded-t-3xl md:h-16 md:w-[70%] md:rounded-t-[28px]" />
          <div className="absolute bottom-0 left-0 h-8 w-18 rounded-tr-xl bg-linear-to-r from-[#d8a32a] to-[#8f5c09] md:h-10 md:w-28" />
          <div className="absolute right-0 bottom-0 h-8 w-18 rounded-tl-xl bg-linear-to-l from-[#d8a32a] to-[#8f5c09] md:h-10 md:w-28" />
        </section>

        {/* CATEGORY GRID */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
            {categories.map((item) => (
              <button
                key={item.label}
                className={`rounded-[22px] px-5 py-5 text-left text-xl font-extrabold shadow-lg transition hover:scale-[1.02] md:px-6 md:py-4 md:text-lg ${
                  item.active
                    ? "bg-yellow-300 text-black"
                    : "bg-white text-black"
                } ${item.label === "Charger" ? "col-span-2 md:col-span-1" : ""}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}