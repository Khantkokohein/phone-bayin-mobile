export default function Home() {
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
    <main className="min-h-screen bg-linear-to-b from-[#c91616] via-[#a90f10] to-[#7f0a0b]">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
        {/* LUXURY GLASS NAVBAR */}
        <header className="sticky top-3 z-50 mb-6">
          <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="ဖုန်းဘုရင်"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight text-white">
                <p className="text-lg font-extrabold">ဖုန်းဘုရင်</p>
                <p className="text-xs text-yellow-100">Mobile</p>
              </div>
            </div>

            <nav className="hidden gap-3 md:flex">
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Home
              </button>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Phones
              </button>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Accessories
              </button>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Contact
              </button>
            </nav>

            <button className="btn-gold rounded-xl px-4 py-2 text-sm font-bold">
              Order Now
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[34px] border-4 border-yellow-300 shadow-[0_0_35px_rgba(255,215,100,0.45)]">
          <div className="absolute inset-0 hero-red" />
          <div className="gold-line absolute top-0 left-0 h-0.75 w-full" />
          <div className="gold-line absolute bottom-0 left-0 h-0.75 w-full" />
          <div className="curtain-left" />
          <div className="curtain-right" />
          <div className="spotlight" />

          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            <span className="fall-star left-[8%]"></span>
            <span className="fall-star left-[18%]"></span>
            <span className="fall-star left-[30%]"></span>
            <span className="fall-star left-[42%]"></span>
            <span className="fall-star left-[54%]"></span>
            <span className="fall-star left-[66%]"></span>
            <span className="fall-star left-[78%]"></span>
            <span className="fall-star left-[90%]"></span>
          </div>

          <div className="relative z-20 flex flex-col items-center px-6 pt-10 pb-24 text-center text-white md:pt-12">
            <img
              src="/logo.svg"
              alt="ဖုန်းဘုရင်"
              className="mx-auto w-40 md:w-48 gold-glow"
            />

            <h1 className="mt-2 text-4xl font-extrabold tracking-wide md:text-6xl">
              ဖုန်းဘုရင်
            </h1>

            <h2 className="mt-1 text-2xl font-bold md:text-4xl">Mobile</h2>

            <p className="mt-2 text-sm md:text-lg">
              ဖုန်းနှင့် Accessories ရောင်းဝယ်ရေး
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                Messenger
              </button>

              <button className="btn-gold rounded-xl px-6 py-3 font-semibold">
                Contact
              </button>
            </div>
          </div>

          <div className="stage-floor absolute bottom-0 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-t-[28px]" />
          <div className="absolute bottom-0 left-0 h-10 w-28 rounded-tr-xl bg-linear-to-r from-[#d8a32a] to-[#8f5c09]" />
          <div className="absolute right-0 bottom-0 h-10 w-28 rounded-tl-xl bg-linear-to-l from-[#d8a32a] to-[#8f5c09]" />
        </section>

        {/* CATEGORY BAR */}
        <section className="mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white px-6 py-3 text-black shadow-lg transition hover:scale-105 hover:bg-yellow-200">
              📱 iPhone
            </button>
            <button className="rounded-2xl bg-yellow-300 px-6 py-3 text-black shadow-lg transition hover:scale-105">
              📱 Samsung
            </button>
            <button className="rounded-2xl bg-white px-6 py-3 text-black shadow-lg transition hover:scale-105 hover:bg-yellow-200">
              🎧 Accessories
            </button>
            <button className="rounded-2xl bg-white px-6 py-3 text-black shadow-lg transition hover:scale-105 hover:bg-yellow-200">
              ⌚ Smart Watch
            </button>
            <button className="rounded-2xl bg-white px-6 py-3 text-black shadow-lg transition hover:scale-105 hover:bg-yellow-200">
              🔌 Charger
            </button>
          </div>
        </section>

        {/* BRAND SLIDER */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-yellow-200/20 bg-white/10 py-4 shadow-[0_0_25px_rgba(255,210,120,0.2)] backdrop-blur">
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

        {/* NEW ARRIVAL SLIDER */}
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
                        className="floating-phone h-64 w-auto rounded-3xl object-cover shadow-2xl md:h-80"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
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

        {/* CONTACT */}
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