"use client";
import { motion } from "framer-motion";

export default function ShoeInner({ id }: { id: string }) {
  return (
    <div className="w-full h-screen bg-red-500 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">ここが変わればOK！ ID: {id}</h1>
    </div>
  );
}