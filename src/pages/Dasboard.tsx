import React, { useEffect, useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";
import supabase from "@/lib/db";

const AdminDashboard = () => {
  const [cakes, setCakes] = useState<ICake[]>([]);

  useEffect(() => {
    const fetchCakes = async () => {
      const { data, error } = await supabase.from("cakes").select("*");

      if (error) {
        console.error("Error fetching cakes:", error);
        return;
      } else {
        setCakes(data);
      }
    };

    fetchCakes();
  }, [supabase]);

  const [items, setItems] = useState([
    { id: 1, name: "Produk A", category: "Elektronik", stock: 45 },
    { id: 2, name: "Produk B", category: "Fashion", stock: 32 },
    { id: 3, name: "Produk C", category: "Makanan", stock: 128 },
    { id: 4, name: "Produk D", category: "Buku", stock: 67 },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
  });
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAddItem = () => {
    if (formData.name && formData.category && formData.stock) {
      if (editId) {
        setItems(
          items.map((item) =>
            item.id === editId
              ? { ...item, ...formData, stock: parseInt(formData.stock) }
              : item
          )
        );
        setEditId(null);
      } else {
        setItems([
          ...items,
          {
            id: Math.max(...items.map((i) => i.id), 0) + 1,
            ...formData,
            stock: parseInt(formData.stock),
          },
        ]);
      }
      setFormData({ name: "", category: "", stock: "" });
      setOpen(false);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      category: item.category,
      stock: item.stock.toString(),
    });
    setEditId(item.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "hsl(30, 50%, 98%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="font-serif text-5xl font-extrabold mb-2"
            style={{ color: "hsl(25, 15%, 25%)" }}
          >
            ✨ Dashboard Admin
          </h1>
          <p className="font-sans" style={{ color: "hsl(25, 15%, 45%)" }}>
            Kelola produk dan inventori dengan mudah
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className="p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: "hsl(340, 70%, 88%)" }}
          >
            <p
              style={{ color: "hsl(25, 15%, 45%)" }}
              className="text-sm font-medium"
            >
              Total Produk
            </p>
            <p
              className="text-3xl font-bold mt-2"
              style={{ color: "hsl(25, 15%, 25%)" }}
            >
              {items.length}
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: "hsl(155, 45%, 85%)" }}
          >
            <p
              style={{ color: "hsl(25, 15%, 45%)" }}
              className="text-sm font-medium"
            >
              Total Stok
            </p>
            <p
              className="text-3xl font-bold mt-2"
              style={{ color: "hsl(25, 15%, 25%)" }}
            >
              {items.reduce((sum, item) => sum + item.stock, 0)}
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: "hsl(45, 100%, 87%)" }}
          >
            <p
              style={{ color: "hsl(25, 15%, 45%)" }}
              className="text-sm font-medium"
            >
              Kategori
            </p>
            <p
              className="text-3xl font-bold mt-2"
              style={{ color: "hsl(25, 15%, 25%)" }}
            >
              {new Set(items.map((i) => i.category)).size}
            </p>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-sm hover:opacity-90 transition"
            style={{ backgroundColor: "hsl(340, 70%, 50%)" }}
          >
            <Plus size={20} />
            Tambah Produk
          </button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
              style={{ backgroundColor: "hsl(30, 50%, 98%)" }}
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "hsl(25, 15%, 25%)" }}
              >
                {editId ? "Edit Produk" : "Tambah Produk Baru"}
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "hsl(25, 15%, 25%)" }}
                  >
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Masukkan nama produk"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    style={{
                      borderColor: "hsl(30, 40%, 90%)",
                      color: "hsl(25, 15%, 25%)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "hsl(25, 15%, 25%)" }}
                  >
                    Kategori
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="Masukkan kategori"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    style={{
                      borderColor: "hsl(30, 40%, 90%)",
                      color: "hsl(25, 15%, 25%)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "hsl(25, 15%, 25%)" }}
                  >
                    Stok
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({ ...formData, stock: e.target.value })
                    }
                    placeholder="Masukkan jumlah stok"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    style={{
                      borderColor: "hsl(30, 40%, 90%)",
                      color: "hsl(25, 15%, 25%)",
                    }}
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleAddItem}
                    className="flex-1 px-4 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition"
                    style={{ backgroundColor: "hsl(155, 45%, 50%)" }}
                  >
                    {editId ? "Simpan Perubahan" : "Tambah Produk"}
                  </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setEditId(null);
                      setFormData({ name: "", category: "", stock: "" });
                    }}
                    className="flex-1 px-4 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition"
                    style={{ backgroundColor: "hsl(0, 0%, 70%)" }}
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div
          className="rounded-lg shadow-sm overflow-hidden border"
          style={{ borderColor: "hsl(30, 40%, 90%)" }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "hsl(340, 70%, 88%)" }}>
                <th
                  className="px-6 py-3 text-left font-semibold"
                  style={{ color: "hsl(25, 15%, 25%)" }}
                >
                Produk
                </th>
                <th
                  className="px-6 py-3 text-left font-semibold"
                  style={{ color: "hsl(25, 15%, 25%)" }}
                >
                  Deskripsi
                </th>
                <th
                  className="px-6 py-3 text-left font-semibold"
                  style={{ color: "hsl(25, 15%, 25%)" }}
                >
                  Kategori
                </th>
                <th
                  className="px-6 py-3 text-left font-semibold"
                  style={{ color: "hsl(25, 15%, 25%)" }}
                >
                  Harga
                </th>
                <th
                  className="px-6 py-3 text-left font-semibold"
                  style={{ color: "hsl(25, 15%, 25%)" }}
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {cakes.map((item, index) => (
                <tr
                  key={item.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? "hsl(30, 50%, 98%)"
                        : "hsl(155, 30%, 95%)",
                  }}
                >
                  <td
                    className="px-6 py-3 font-medium"
                    style={{ color: "hsl(25, 15%, 25%)" }}
                  >
                    {item.name}
                  </td>
                  <td
                    className="px-6 py-3 "
                    style={{ color: "hsl(25, 15%, 25%)" }}
                  >
                    {item.description}
                  </td>
                  <td
                    className="px-6 py-3"
                    style={{ color: "hsl(25, 15%, 35%)" }}
                  >
                    {item.category}
                  </td>
                  <td
                    className="px-6 py-3"
                    style={{ color: "hsl(25, 15%, 35%)" }}
                  >
                    ${item.price}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded hover:opacity-70 transition"
                        style={{ backgroundColor: "hsl(155, 45%, 85%)" }}
                      >
                        <Edit
                          size={16}
                          style={{ color: "hsl(25, 15%, 25%)" }}
                        />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded hover:opacity-70 transition"
                        style={{ backgroundColor: "hsl(340, 70%, 88%)" }}
                      >
                        <Trash2
                          size={16}
                          style={{ color: "hsl(25, 15%, 25%)" }}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
