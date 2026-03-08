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

const categories = ["All", "iPhone", "Samsung", "Accessories", "Smart Watch", "Charger"];

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

  async function handleMessengerOrder(product: Product) {
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

    window.open(process.env.NEXT_PUBLIC_MESSENGER_URL, "_blank");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#d11d1d] via-[#b31212] to-[#8d0c0c] px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-6 flex items-center justify-between rounded-[24px] border border-yellow-200/20 bg-white/10 px-4 py-4 shadow-[0_0_24px_rgba(255,210,120,0.18)] backdrop-blur">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="ဖုန်းဘုရင်" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-xl font-extrabold md:text-2xl">ဖုန်းဘုရင်</p>
              <p className="text-sm text-yellow-100">Mobile</p>
            </div>
          </div>

          <a
            href="/admin"
            className="rounded-xl bg-yellow-300 px-4 py-2 text-sm font-extrabold text-[#4b2800] shadow-lg"
          >
            Admin
          </a>
        </header>

        <section className="rounded-[30px] border border-yellow-200/20 bg-white/10 p-6 shadow-[0_0_24px_rgba(255,210,120,0.18)] backdrop-blur">
          <h1 className="text-3xl font-extrabold md:text-5xl">ဖုန်းဘုရင် Shop</h1>
          <p className="mt-2 text-yellow-100">Product system + Messenger order automation</p>
        </section>

        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-[22px] px-5 py-4 text-left text-lg font-extrabold shadow-lg transition ${
                  selectedCategory === cat
                    ? "bg-yellow-300 text-black"
                    : "bg-white text-black"
                } ${cat === "Charger" ? "col-span-2" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-extrabold md:text-3xl">Products</h3>
            <p className="text-sm text-yellow-100">
              {loading ? "Loading..." : `${filteredProducts.length} items`}
            </p>
          </div>

          {loading ? (
            <div className="rounded-[24px] bg-white/10 p-8 text-center backdrop-blur">
              Loading products...
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[28px] bg-white p-4 text-black shadow-xl ring-1 ring-black/5"
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

                  <h4 className="mt-4 text-xl font-extrabold text-[#2e1a13]">{item.name}</h4>
                  <p className="mt-1 text-sm text-[#6d4d42]">{item.specs}</p>
                  <p className="mt-2 text-sm font-semibold text-[#8f0f10]">Stock: {item.stock}</p>
                  <p className="mt-3 text-3xl font-extrabold text-[#d21f25]">{mmk(item.price)}</p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleMessengerOrder(item)}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
                    >
                      Messenger Order
                    </button>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="rounded-xl bg-yellow-300 px-4 py-3 text-sm font-semibold text-[#4b2800] shadow-lg"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

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

                <p className="mt-2 text-sm font-bold text-[#8f0f10]">{selectedProduct.category}</p>
                <p className="mt-4 text-3xl font-extrabold text-[#d21f25]">
                  {mmk(selectedProduct.price)}
                </p>
                <p className="mt-3 text-sm text-[#5a4338]">{selectedProduct.specs}</p>
                <p className="mt-3 text-sm font-semibold">Stock: {selectedProduct.stock}</p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleMessengerOrder(selectedProduct)}
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
                  >
                    Messenger Order
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-xl bg-yellow-300 px-4 py-3 font-semibold text-[#4b2800]"
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