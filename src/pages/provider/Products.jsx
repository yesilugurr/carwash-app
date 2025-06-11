// ✨ showtime: polished UI/animation overhaul
import React, { useState } from "react";
import useDummy from "../../store/useDummy";
import Card from "../../components/Card";

const ProductCard = ({ product }) => {
  const update = useDummy((s) => s.updateProduct);

  const handleChange = (field, value) => {
    update(product.id, { [field]: value });
  };

  return (
    <Card>
      <input
        className="border rounded p-1 mb-1 w-full"
        value={product.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        className="border rounded p-1 mb-1 w-full"
        value={product.code}
        onChange={(e) => handleChange("code", e.target.value)}
      />
      <input
        type="number"
        className="border rounded p-1 mb-1 w-full"
        value={product.qty}
        onChange={(e) => handleChange("qty", Number(e.target.value))}
      />
      <input
        className="border rounded p-1 w-full"
        value={product.category}
        onChange={(e) => handleChange("category", e.target.value)}
      />
    </Card>
  );
};

const AddProductModal = ({ open, onClose }) => {
  const add = useDummy((s) => s.addProduct);
  const [form, setForm] = useState({
    name: "",
    code: "",
    qty: 0,
    category: "",
  });

  if (!open) return null;

  const handleSubmit = () => {
    add({ id: Date.now(), ...form });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-4 rounded space-y-2 w-72">
        <h2 className="text-lg font-semibold">Add Product</h2>
        <input
          className="border rounded p-1 w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border rounded p-1 w-full"
          placeholder="Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />
        <input
          type="number"
          className="border rounded p-1 w-full"
          placeholder="Qty"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
        />
        <select
          className="border rounded p-1 w-full"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Category</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Accessories">Accessories</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 rounded bg-primary text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = useDummy((s) => s.products);
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-4">
      <button
        className="px-3 py-1 rounded bg-primary text-white"
        onClick={() => setAdding(true)}
      >
        Add Product
      </button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <AddProductModal open={adding} onClose={() => setAdding(false)} />
    </div>
  );
};

export default Products;
