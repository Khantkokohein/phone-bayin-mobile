"use client";

import { useEffect, useState } from "react";
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

const emptyForm = {
  id: "",
  name: "",
  brand: "",
  category: "iPhone",
  price: 0,
  stock: 0,
  specs: "",
  badge: "",
  image_url: "",
  is_active: true,
  sort_order: 0,
};

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<any>(emptyForm);
  const [loading, setLoading] = useState(false);

  async function loadProducts() {
    const { data } = await supabaseBrowser
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    setProducts((data || []) as Product[]);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function adminHeaders() {
    return {
      "Content-Type": "application/json",
      "x-admin-key": pin,
    };
  }

  async function saveProduct() {
    setLoading(true);

    const method = form.id ? "PUT" : "POST";

    const res = await fetch("/api/admin/products", {
      method,
      headers: adminHeaders(),
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(result.error || "Save failed");
      return;
    }

    setForm(emptyForm);
    await loadProducts();
    alert("Saved");
  }

  async function deleteProduct(id: string) {
    if (!confirm("Delete this product?")) return;

    const res = await fetch(`/api/admin/products?id=${id}`, {
      method: "DELETE",
      headers: {
        "x-admin-key": pin,
      },
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.error || "Delete failed");
      return;
    }

    await loadProducts();
  }

  async function uploadImage(file: File | null) {
    if (!file) return;

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: {
        "x-admin-key": pin,
      },
      body: fd,
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.error || "Upload failed");
      return;
    }

    setForm((prev: any) => ({ ...prev, image_url: result.url }));
  }

  async function quickStock(id: string, nextStock: number) {
    const target = products.find((p) => p.id === id);
    if (!target) return;

    const res = await fetch("/api/admin/products", {
      method: "PUT",
      headers: adminHeaders(),
      body: JSON.stringify({
        ...target,
        stock: nextStock,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.error || "Stock update failed");
      return;
    }

    await loadProducts();
  }

  return (
    <main className="min-h-screen bg-[#f6f2ee] p-4 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#8f0f10]">Admin Panel</h1>
          <a href="/" className="rounded-xl bg-black px-4 py-2 text-white">
            Back Home
          </a>
        </div>

        {!authorized ? (
          <div className="max-w-md rounded-[24px] bg-white p-6 shadow-xl">
            <p className="mb-3 font-semibold">Admin Secret</p>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 outline-none"
              placeholder="Enter admin secret"
            />
            <button
              onClick={() => {
                if (!pin.trim()) return;
                setAuthorized(true);
              }}
              className="mt-4 rounded-xl bg-[#8f0f10] px-5 py-3 font-bold text-white"
            >
              Enter Admin
            </button>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
            <div className="rounded-[24px] bg-white p-5 shadow-xl">
              <h2 className="mb-4 text-2xl font-extrabold text-[#8f0f10]">
                {form.id ? "Edit Product" : "Add Product"}
              </h2>

              <div className="space-y-4">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  placeholder="Product name"
                />

                <input
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  placeholder="Brand"
                />

                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                >
                  <option>iPhone</option>
                  <option>Samsung</option>
                  <option>Accessories</option>
                  <option>Smart Watch</option>
                  <option>Charger</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                    placeholder="Price"
                  />

                  <input
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                    placeholder="Stock"
                  />
                </div>

                <textarea
                  value={form.specs}
                  onChange={(e) => setForm({ ...form, specs: e.target.value })}
                  className="min-h-[100px] w-full rounded-xl border px-4 py-3 outline-none"
                  placeholder="Specs"
                />

                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                  >
                    <option value="">No Badge</option>
                    <option value="NEW">NEW</option>
                    <option value="HOT">HOT</option>
                  </select>

                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={(e) =>
                      setForm({ ...form, sort_order: Number(e.target.value) })
                    }
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                    placeholder="Sort order"
                  />
                </div>

                <input
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  placeholder="Image URL"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    uploadImage(e.target.files ? e.target.files[0] : null)
                  }
                  className="w-full rounded-xl border px-4 py-3"
                />

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.is_active}
                    onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                  />
                  <span className="font-semibold">Active</span>
                </label>

                {form.image_url && (
                  <div className="flex h-48 items-center justify-center rounded-[20px] bg-[#faf6f2] p-4">
                    <img
                      src={form.image_url}
                      alt="preview"
                      className="h-full w-auto rounded-[18px] object-contain"
                    />
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={saveProduct}
                    disabled={loading}
                    className="rounded-xl bg-[#8f0f10] px-5 py-3 font-bold text-white"
                  >
                    {loading ? "Saving..." : form.id ? "Update Product" : "Add Product"}
                  </button>

                  <button
                    onClick={() => setForm(emptyForm)}
                    className="rounded-xl bg-gray-100 px-5 py-3 font-bold"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-xl">
              <h2 className="mb-4 text-2xl font-extrabold text-[#8f0f10]">
                Product List
              </h2>

              <div className="space-y-4">
                {products.map((p) => (
                  <div key={p.id} className="rounded-[20px] border p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                      <img
                        src={p.image_url}
                        alt={p.name}
                        className="h-24 w-24 rounded-[16px] object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-extrabold">{p.name}</h3>
                        <p className="text-sm text-gray-500">{p.category}</p>
                        <p className="mt-1 font-bold text-[#d21f25]">
                          {Number(p.price).toLocaleString()} Ks
                        </p>
                        <p className="text-sm font-semibold">
                          Stock: {p.stock} • {p.is_active ? "Active" : "Hidden"}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => quickStock(p.id, p.stock + 1)}
                          className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-bold text-white"
                        >
                          + Stock
                        </button>

                        <button
                          onClick={() => quickStock(p.id, Math.max(0, p.stock - 1))}
                          className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-bold text-white"
                        >
                          - Stock
                        </button>

                        <button
                          onClick={() => setForm(p)}
                          className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-bold text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-bold text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}