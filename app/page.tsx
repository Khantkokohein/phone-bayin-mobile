"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";

type Product = {
  id: string;
  created_at: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  specs: string;
  badge: string;
  image_url: string;
  is_active: boolean;
  sort_order: number;
};

const categories = [
  { label: "All", icon: "🏪" },
  { label: "iPhone", icon: "📱" },
  { label: "Samsung", icon: "📱" },
  { label: "Accessories", icon: "🎧" },
  { label: "Smart Watch", icon: "⌚" },
  { label: "Charger", icon: "🔌" },
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

function mmk(n: number) {
  return `${Number(n || 0).toLocaleString()} Ks`;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    setLoading(true);

    const { data, error } = await supabaseBrowser
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data as Product[]);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const newArrivalProducts = useMemo(() => {
    return products.slice(0, 4);
  }, [products]);

  const featuredPhones = useMemo(() => {
    return products.filter(
      (p) => p.category === "iPhone" || p.category === "Samsung"
    );
  }, [products]);

  const accessories = useMemo(() => {
    return products.filter(
      (p) =>
        p.category === "Accessories" ||
        p.category === "Smart Watch" ||
        p.category === "Charger"
    );
  }, [products]);

  async function handleMessengerOrder(product?: Product) {
    if (product) {
      const message =
        `Hello.\n\n` +
        `Order Request\n` +
        `Product: ${product.name}\n` +
        `Category: ${product.category}\n` +
        `Price: ${mmk(product.price)}\n` +
        `Stock: ${product.stock}\n` +
        `Specs: ${product.specs}\n\n` +
        `Name:\nPhone:\nAddress:\nPayment: Manual`;

      try {
        await navigator.clipboard.writeText(message);
        alert("Order message copied. Messenger opens now.");
      } catch {
        alert("Order message ready. Messenger opens now.");
      }
    }

    window.open(process.env.NEXT_PUBLIC_MESSENGER_URL, "_blank");
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-[#d11d1d] via-[#b01212] to-[#8d0c0c] px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-7xl">
        {/* TOP NAV */}
        <header className="mb-6">
          <div className="glass-nav flex items-center justify-between rounded-[24px] px-4 py-4">
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

            <button
              onClick={() => handleMessengerOrder()}
              className="btn-gold shrink-0 rounded-[18px] px-5 py-3 text-lg font-extrabold md:px-6 md:py-3"
            >
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

            <div className="mt-8 flex w-full max-w-[520px] flex-row justify-center gap-4">
              <button
                onClick={() => handleMessengerOrder()}
                className="flex-1 rounded-[20px] bg-blue-600 px-4 py-4 text-xl font-extrabold text-white shadow-lg transition hover:bg-blue-700 md:flex-none md:px-8 md:text-lg"
              >
                Messenger
              </button>

              <button
                onClick={() => handleMessengerOrder()}
                className="btn-gold flex-1 rounded-[20px] px-4 py-4 text-xl font-extrabold md:flex-none md:px-8 md:text-lg"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="stage-floor absolute bottom-0 left-1/2 h-10 w-[64%] -translate-x-1/2 rounded-t-[24px] md:h-14 md:w-[70%]" />
          <div className="absolute bottom-0 left-0 h-8 w-20 rounded-tr-xl bg-linear-to-r from-[#d8a32a] to-[#8f5c09] md:h-10 md:w-28" />
          <div className="absolute right-0 bottom-0 h-8 w-20 rounded-tl-xl bg-linear-to-l from-[#d8a32a] to-[#8f5c09] md:h-10 md:w-28" />
        </section>

        {/* CATEGORY GRID */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
            {categories.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedCategory(item.label)}
                className={`rounded-[22px] px-5 py-5 text-left text-xl font-extrabold shadow-lg transition hover:scale-[1.02] md:px-6 md:py-4 md:text-lg ${
                  selectedCategory === item.label
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
        <section className="mt-10 overflow-hidden rounded-[24px] border border-yellow-200/20 bg-white/10 py-4 shadow-[0_0_25px_rgba(255,210,120,0.2)] backdrop-blur">
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
            <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)] md:text-3xl">
              New Arrival
            </h3>
            <p className="mt-1 text-sm text-yellow-100">
              TV style auto sliding promotion
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-yellow-200/30 bg-black/10 shadow-[0_0_24px_rgba(255,210,120,0.22)] backdrop-blur">
            {newArrivalProducts.length > 0 ? (
              <div className="slider-track">
                {[...newArrivalProducts, ...newArrivalProducts].map((slide, idx) => (
                  <div
                    key={`${slide.id}-${idx}`}
                    className="slide-item bg-linear-to-r from-[#c51616] via-[#ff5b1a] to-[#c51616]"
                  >
                    <div className="grid h-full items-center gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6">
                      <div className="text-white">
                        <p className="text-xs font-bold tracking-[0.18em] text-yellow-200 md:text-sm">
                          {slide.badge || "NEW ARRIVAL"}
                        </p>

                        <h4 className="mt-2 text-xl font-extrabold leading-tight md:mt-3 md:text-3xl">
                          {slide.name}
                        </h4>

                        <p className="mt-2 text-sm text-yellow-100 md:text-base">
                          {slide.specs}
                        </p>

                        <button
                          onClick={() => handleMessengerOrder(slide)}
                          className="mt-4 inline-block rounded-xl bg-yellow-300 px-4 py-3 text-base font-bold text-[#5a2b00] shadow-lg"
                        >
                          အခုပဲ စုံစမ်းရန်
                        </button>
                      </div>

                      <div className="flex justify-center">
                        <img
                          src={slide.image_url}
                          alt={slide.name}
                          className="h-32 w-full max-w-[220px] rounded-[18px] object-contain bg-white/5 p-2 shadow-xl md:h-52 md:max-w-[300px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-yellow-100">
                No new arrival products yet.
              </div>
            )}
          </div>
        </section>

        {/* FEATURED PHONES */}
        <section className="mt-12">
          <div className="mb-5 text-center">
            <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
              Featured Phones
            </h3>
          </div>

          {featuredPhones.length === 0 ? (
            <div className="rounded-[24px] border border-white/10 bg-white/10 p-8 text-center text-yellow-100 backdrop-blur">
              No phone products yet.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {featuredPhones.map((item) => (
                <div
                  key={item.id}
                  className="product-card rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-black/5"
                >
                  <div className="relative">
                    {!!item.badge && (
                      <span
                        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-lg ${
                          item.badge === "HOT" ? "bg-red-600" : "bg-emerald-600"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {item.stock <= 0 && (
                      <span className="absolute right-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-extrabold text-white">
                        OUT
                      </span>
                    )}

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex h-64 w-full items-center justify-center rounded-[24px] bg-[#faf6f2] p-4"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-full w-auto rounded-[18px] object-contain"
                      />
                    </button>
                  </div>

                  <h4 className="mt-4 text-xl font-extrabold text-[#2e1a13]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-[#6d4d42]">{item.specs}</p>

                  <p className="mt-2 text-sm font-semibold text-[#8f0f10]">
                    Stock: {item.stock}
                  </p>

                  <p className="mt-3 text-3xl font-extrabold text-[#d21f25]">
                    {mmk(item.price)}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleMessengerOrder(item)}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
                    >
                      Messenger
                    </button>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="btn-gold rounded-xl px-4 py-3 text-sm font-semibold"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ACCESSORIES */}
        <section className="mt-12">
          <div className="mb-5 text-center">
            <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
              Accessories
            </h3>
          </div>

          {accessories.length === 0 ? (
            <div className="rounded-[24px] border border-white/10 bg-white/10 p-8 text-center text-yellow-100 backdrop-blur">
              No accessories yet.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {accessories.map((item) => (
                <div
                  key={item.id}
                  className="product-card rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-black/5"
                >
                  <div className="relative">
                    {!!item.badge && (
                      <span
                        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-lg ${
                          item.badge === "HOT" ? "bg-red-600" : "bg-emerald-600"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {item.stock <= 0 && (
                      <span className="absolute right-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-extrabold text-white">
                        OUT
                      </span>
                    )}

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex h-56 w-full items-center justify-center rounded-[24px] bg-[#faf6f2] p-4"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-full w-auto rounded-[18px] object-contain"
                      />
                    </button>
                  </div>

                  <h4 className="mt-4 text-xl font-extrabold text-[#2e1a13]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-[#6d4d42]">{item.specs}</p>

                  <p className="mt-2 text-sm font-semibold text-[#8f0f10]">
                    Stock: {item.stock}
                  </p>

                  <p className="mt-3 text-2xl font-extrabold text-[#d21f25]">
                    {mmk(item.price)}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleMessengerOrder(item)}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
                    >
                      Messenger
                    </button>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="btn-gold rounded-xl px-4 py-3 text-sm font-semibold"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                <button
                  onClick={() => handleMessengerOrder()}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg"
                >
                  Messenger
                </button>
                <button
                  onClick={() => handleMessengerOrder()}
                  className="btn-gold rounded-xl px-5 py-3 font-semibold"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 md:items-center">
          <div className="w-full max-w-2xl rounded-[30px] bg-white p-5 text-black shadow-2xl">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex h-72 items-center justify-center rounded-[24px] bg-[#faf6f2] p-4">
                <img
                  src={selectedProduct.image_url}
                  alt={selectedProduct.name}
                  className="h-full w-auto rounded-[18px] object-contain"
                />
              </div>

              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-extrabold text-[#2e1a13]">
                    {selectedProduct.name}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-bold"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-2 text-sm font-bold text-[#8f0f10]">
                  {selectedProduct.category}
                </p>

                <p className="mt-4 text-3xl font-extrabold text-[#d21f25]">
                  {mmk(selectedProduct.price)}
                </p>

                <p className="mt-3 text-sm text-[#5a4338]">
                  {selectedProduct.specs}
                </p>

                <p className="mt-3 text-sm font-semibold">
                  Stock: {selectedProduct.stock}
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleMessengerOrder(selectedProduct)}
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
                  >
                    Messenger
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="btn-gold rounded-xl px-4 py-3 font-semibold"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}