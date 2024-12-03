"use client";

import { Umbrella } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-sky-600 text-white py-4 px-6 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Umbrella size={32} />
          <div>
            <h1 className="text-2xl font-bold">Mogi Calhas</h1>
            <p className="text-sm text-sky-100">Sistema Financeiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}