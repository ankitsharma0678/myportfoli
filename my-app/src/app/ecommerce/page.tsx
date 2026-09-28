"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Star,
  SlidersHorizontal,
  X,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Zap,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  category: "Electronics" | "Wearables" | "Audio" | "Accessories";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Aura Noise-Canceling Headphones",
    category: "Audio",
    price: 299,
    originalPrice: 349,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Bestseller",
    description: "Spatial audio with active hybrid noise cancellation and 40-hour battery life.",
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Pulse Ultra Smartwatch Series X",
    category: "Wearables",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    badge: "New Release",
    description: "Titanium casing with AMOLED display, ECG monitoring, and dual-frequency GPS.",
    inStock: true,
  },
  {
    id: "prod-3",
    name: "CyberDeck RGB Mechanical Keyboard",
    category: "Electronics",
    price: 189,
    originalPrice: 219,
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    badge: "Hot Deal",
    description: "Hot-swappable tactile switches, per-key RGB backlighting, and gasket-mount dampening.",
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Vortex Spatial Earbuds Pro",
    category: "Audio",
    price: 199,
    originalPrice: 229,
    rating: 4.7,
    reviewsCount: 86,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    badge: "20% OFF",
    description: "Ultra-compact true wireless earbuds with transparent audio mode and wireless charging case.",
    inStock: true,
  },
  {
    id: "prod-5",
    name: "Titanium Precision Wireless Mouse",
    category: "Accessories",
    price: 89,
    originalPrice: 109,
    rating: 4.8,
    reviewsCount: 164,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80",
    description: "Ergonomic 26K DPI optical sensor with silent magnetic scroll wheel and Bluetooth 5.3.",
    inStock: true,
  },
  {
    id: "prod-6",
    name: "Lumina Curved Gaming Monitor 34\"",
    category: "Electronics",
    price: 699,
    originalPrice: 799,
    rating: 5.0,
    reviewsCount: 54,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
    badge: "Premium",
    description: "Ultrawide 175Hz QD-OLED display with 0.03ms response time and HDR1000 brightness.",
    inStock: true,
  },
  {
    id: "prod-7",
    name: "MagSafe 3-in-1 Wireless Charging Stand",
    category: "Accessories",
    price: 69,
    originalPrice: 89,
    rating: 4.6,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80",
    description: "15W fast magnetic charging station for iPhone, Watch, and wireless earbuds simultaneously.",
    inStock: true,
  },
  {
    id: "prod-8",
    name: "Neptune 25,000mAh Power Bank 100W",
    category: "Accessories",
    price: 99,
    originalPrice: 129,
    rating: 4.9,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80",
    badge: "Essential",
    description: "High-capacity power bank with dual USB-C Power Delivery to fast-charge laptops on the go.",
    inStock: true,
  },
];

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-violet-950/60 via-slate-900 to-cyan-950/60 flex flex-col items-center justify-center p-4 text-center">
        <Zap className="h-8 w-8 text-violet-400 mb-1 opacity-80" />
        <span className="text-[11px] font-mono text-slate-300 font-semibold line-clamp-1">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setHasError(true)}
      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
    />
  );
}

function CartItemImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="h-14 w-14 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
        <ShoppingBag className="h-6 w-6 text-violet-400" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setHasError(true)}
      className="h-14 w-14 rounded-lg object-cover bg-slate-800 shrink-0"
    />
  );
}

const CATEGORIES = ["All", "Electronics", "Wearables", "Audio", "Accessories"] as const;

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [maxBudget, setMaxBudget] = useState<number>(800);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Filtered and Sorted Products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesPrice = p.price <= maxBudget;
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured
    });
  }, [searchQuery, selectedCategory, maxBudget, sortBy]);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const taxPrice = Math.round(subtotalPrice * 0.08);
  const totalPrice = subtotalPrice > 0 ? subtotalPrice + taxPrice : 0;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-violet-500/30 font-sans">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-2 px-4 text-center text-xs font-medium text-white shadow-md">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Spring Tech Sale: Get 15% off orders over $250 with code </span>
          <code className="font-mono bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">NEXUS15</code>
        </span>
      </div>

      {/* Main E-Commerce Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#070709]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Back Link */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <Link href="/ecommerce" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-violet-300 transition-colors">
                Nexus<span className="text-cyan-400">Store</span>
              </span>
            </Link>
          </div>

          {/* Search Bar Input */}
          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, category, or specs..."
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Cart Icon & Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-violet-500/40 text-slate-300 hover:text-white transition-all group"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white text-[11px] font-bold flex items-center justify-center shadow-md animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="p-3 border-t border-slate-800/80 md:hidden bg-slate-950">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-600/15 blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <Badge variant="live" pulseDot>
              Dynamic E-Commerce Platform
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Next-Gen Tech & <span className="gradient-text-hero">Audio Hardware</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore high-performance workspace gear, spatial audio, and smart wearables. Built with real-time state management, instant filtering, and sub-second load times.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-cyan-400" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="h-4 w-4 text-violet-400" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price Range & Sort Controls */}
          <div className="flex flex-wrap items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
            {/* Price Budget Slider */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Max Budget:</span>
              <input
                type="range"
                min="50"
                max="800"
                step="25"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-24 accent-violet-500 cursor-pointer"
              />
              <span className="font-bold text-violet-300 font-mono">${maxBudget}</span>
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-violet-500"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.25)]"
            >
              {/* Product Thumbnail Container */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <ProductImage src={product.image} alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="violet">{product.badge}</Badge>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-amber-300 backdrop-blur-md">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount})</span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-base text-white group-hover:text-violet-200 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Cart Button */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-white font-mono">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-500 line-through font-mono">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="primary"
                    icon={<ShoppingCart className="h-3.5 w-3.5" />}
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 space-y-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
            <ShoppingBag className="h-10 w-10 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No items match your selected filters or price budget (${maxBudget}). Try adjusting your parameters.
            </p>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setMaxBudget(800);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </main>

      {/* Slide-over Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-violet-400" />
                <h2 className="text-lg font-bold text-white">Your Shopping Cart</h2>
                <span className="text-xs font-mono text-slate-400">({totalCartCount} items)</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800"
                >
                  <CartItemImage src={product.image} alt={product.name} />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                    <span className="text-xs font-mono text-violet-300">${product.price}</span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-mono font-bold text-white px-1.5">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400"
                    title="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}

              {cart.length === 0 && (
                <div className="text-center py-16 space-y-2">
                  <ShoppingBag className="h-12 w-12 text-slate-600 mx-auto" />
                  <p className="text-sm text-slate-400">Your cart is empty.</p>
                </div>
              )}
            </div>

            {/* Drawer Footer & Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-slate-200">${subtotalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%):</span>
                    <span className="text-slate-200">${taxPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                    <span>Total:</span>
                    <span className="text-violet-400">${totalPrice}</span>
                  </div>
                </div>

                <Button
                  fullWidth
                  variant="primary"
                  size="lg"
                  isLoading={checkoutSuccess}
                  onClick={handleCheckout}
                >
                  {checkoutSuccess ? "Processing Order..." : `Checkout ($${totalPrice})`}
                </Button>

                {checkoutSuccess && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium pt-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Order placed successfully!</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
