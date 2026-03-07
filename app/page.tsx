export default function Home() {
  const categories = [
    { label: "iPhone", icon: "📱", active: false },
    { label: "Samsung", icon: "📱", active: true },
    { label: "Accessories", icon: "🎧", active: false },
    { label: "Smart Watch", icon: "⌚", active: false },
    { label: "Charger", icon: "🔌", active: false },
  ];

  const phones = [
    {
      name: "iPhone 15 Pro Max",
      price: "3,299,000 Ks",
      spec: "256GB • Natural Titanium",
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Samsung S24 Ultra",
      price: "3,999,000 Ks",
      spec: "512GB • Titanium Black",
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1706376346904-bbbea6c97f31?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Xiaomi 14 Pro",
      price: "2,699,000 Ks",
      spec: "256GB • White",
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Vivo V30 Pro",
      price: "2,199,000 Ks",
      spec: "256GB • Purple",
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const accessories = [
    {
      name: "Wireless Earbuds",
      price: "89,000 Ks",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Smart Watch",
      price: "149,000 Ks",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Fast Charger",
      price: "39,000 Ks",
      image:
        "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Bluetooth Speaker",
      price: "119,000 Ks",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const slides = [
    {
      title: "NEW ARRIVAL",
      subtitle: "iPhone 15 Pro Max 256GB",
      cta: "အခုပဲ စုံစမ်းရန်",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "HOT DEAL",
      subtitle: "Samsung S24 Ultra",
      cta: "အထူးစျေးနှုန်း",
      image:
        "https://images.unsplash.com/photo-1706376346904-bbbea6c97f31?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "ACCESSORIES PROMO",
      subtitle: "Earbuds • Watch • Charger",
      cta: "ပစ္စည်းသစ်များ",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Vivo",
    "OPPO",
    "Realme",
    "Huawei",
    "Honor",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#d11d1d] via-[#b01212] to-[#8d0c0c] px-4 py-6">
      <div className="mx-auto w-full max-w-7xl">
        {/* NAVBAR */}
        <header className="mb-6">
          <div className="glass-nav flex items-center justify-between rounded-3xl px-4 py-4">
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

          <div className="relative z-20 flex flex-col items-center px-4 pt-10 pb-12 text-center text-white md:px-6 md:pt-12 md:pb-16">
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

            <div className="mt-8 flex w-full max-w-130 flex-row justify-center gap-4">
              <button className="flex-1 rounded-[20px] bg-blue-600 px-4 py-4 text-xl font-extrabold text-white shadow-lg transition hover:bg-blue-700 md:flex-none md:px-8 md:text-lg">
                Messenger
              </button>

              <button className="btn-gold flex-1 rounded-[20px] px-4 py-4 text-xl font-extrabold md:flex-none md:px-8 md:text-lg">
                Contact
              </button>
            </div>
          </div>

          <div className="stage-floor absolute bottom-0 left-1/2 h-10 w-[64%] -translate-x-1/2 rounded-3xl md:h-14 md:w-[70%]" />
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
                } ${item.label === "Charger" ? "col-span-2" : ""}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </section>

        {/* BRAND SLIDER */}
        <section className="mt-10 overflow-hidden max-w-130 border border-yellow-200/20 bg-white/10 py-4 shadow-[0_0_25px_rgba(255,210,120,0.2)] backdrop-blur">
          <div className="brand-track">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`${brand}-${idx}`}
                className="mx-3 rounded-2xl bg-white/90 px-6 py-3 text-sm font-extrabold text-[#8f0f10] shadow-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* NEW ARRIVAL */}
        <section className="mt-10">
          <div className="mb-4 text-center">
            <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
              New Arrival
            </h3>
            <p className="mt-1 text-sm text-yellow-100">
              TV style auto sliding promotion
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-yellow-200/30 bg-black/10 shadow-[0_0_30px_rgba(255,210,120,0.25)] backdrop-blur">
            <div className="slider-track">
              {[...slides, ...slides].map((slide, idx) => (
                <div
                  key={`${slide.title}-${idx}`}
                  className="slide-item bg-linear-to-r from-[#c51616] via-[#ff5b1a] to-[#c51616]"
                >
                  <div className="grid h-full items-center gap-6 p-6 md:grid-cols-2 md:p-10">
                    <div className="text-white">
                      <p className="text-sm font-bold tracking-[0.2em] text-yellow-200">
                        {slide.title}
                      </p>
                      <h4 className="mt-3 text-3xl font-extrabold md:text-5xl">
                        {slide.subtitle}
                      </h4>
                      <p className="mt-5 inline-block rounded-xl bg-yellow-300 px-5 py-3 font-bold text-[#5a2b00] shadow-lg">
                        {slide.cta}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.subtitle}
                        className="floating-phone h-56 w-auto rounded-3xl object-cover shadow-2xl md:h-80"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHONES */}
        <section className="mt-12">
          <div className="mb-5 text-center">
            <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
              Featured Phones
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {phones.map((item) => (
              <div
                key={item.name}
                className="product-card rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-black/5"
              >
                <div className="relative">
                  <span
                    className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-lg ${
                      item.badge === "HOT" ? "bg-red-600" : "bg-emerald-600"
                    }`}
                  >
                    {item.badge}
                  </span>

                  <div className="flex h-64 items-center justify-center rounded-3xl bg-[#faf6f2] p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <h4 className="mt-4 text-xl font-extrabold text-[#2e1a13]">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm text-[#6d4d42]">{item.spec}</p>

                <p className="mt-3 text-3xl font-extrabold text-[#d21f25]">
                  {item.price}
                </p>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
                    Messenger
                  </button>

                  <button className="btn-gold rounded-xl px-4 py-3 text-sm font-semibold">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACCESSORIES */}
        <section className="mt-12">
          <div className="mb-5 text-center">
            <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
              Accessories
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="product-card rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-black/5"
              >
                <div className="flex h-56 items-center justify-center rounded-3xl bg-[#faf6f2] p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-auto rounded-2xl object-cover"
                  />
                </div>

                <h4 className="mt-4 text-xl font-extrabold text-[#2e1a13]">
                  {item.name}
                </h4>

                <p className="mt-3 text-2xl font-extrabold text-[#d21f25]">
                  {item.price}
                </p>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
                    Messenger
                  </button>

                  <button className="btn-gold rounded-xl px-4 py-3 text-sm font-semibold">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / LOCATION */}
        <section className="mt-12 pb-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <h3 className="text-2xl font-extrabold text-[#8f0f10]">
                ဆက်သွယ်ရန်
              </h3>

              <div className="mt-5 space-y-4 text-lg font-semibold text-[#2e1a13]">
                <p>📞 09-792826464</p>
                <p>📞 09-455323944</p>
                <p>📍 မော်လမြိုင်</p>
                <p>🏦 KBZ Pay / Bank Transfer / Manual Payment</p>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <h3 className="text-2xl font-extrabold text-[#8f0f10]">
                Shop Information
              </h3>

              <p className="mt-5 text-[#4a2a21]">
                ဖုန်းအသစ်များ၊ Accessories များ၊ စုံစမ်းမေးမြန်းခြင်းနှင့် Manual
                Order Confirm စနစ်ဖြင့် ဝန်ဆောင်မှုပေးပါသည်။
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg">
                  Messenger
                </button>
                <button className="btn-gold rounded-xl px-5 py-3 font-semibold">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}