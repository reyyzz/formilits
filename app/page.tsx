"use client";

import { useState, type FormEvent } from "react";
import AeroShards from "@/components/AeroShards";
import PixelCard from "@/components/PixelCard";

const FIELDS = [
  { name: "nama", label: "Nama", placeholder: "Nama lengkap", autoComplete: "name" },
  {
    name: "nrp",
    label: "NRP",
    placeholder: "5025xxxxxx",
    inputMode: "numeric" as const,
    pattern: "[0-9]{6,12}",
    title: "NRP berupa angka (6-12 digit)",
  },
  { name: "prodi", label: "Prodi", placeholder: "Teknik Informatika" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <AeroShards
        className="!absolute inset-0 -z-10"
        backgroundColor="#000000"
        shardColor="#EC1E7A"
        accentColor="#FFE066"
        placement="full"
        flow="stream"
        material="pearl"
        detail="balanced"
        effect="none"
        interaction="repel"
        density={1.5}
        shardSize={1.1}
        edgeSoftness={2}
        bloom={0.5}
        grain={0.05}
        chromaticAberration={0.0075}
        interactionRadius={1.5}
        interactionStrength={0.5}
        holdToGather
        onError={(error) => console.error("AeroShards:", error)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_65%)]"
      />
      <PixelCard
        colors="#EC1E7A,#FFE066"
        gap={6}
        speed={40}
        noFocus
        className="animate-rise w-full max-w-md !border-[#EC1E7A]/40 bg-[#000000]/70 text-white shadow-[0_20px_80px_-20px_rgba(236,30,122,0.55)] backdrop-blur-xl [--pixel-card-active-color:rgba(236,30,122,0.3)]"
      >
      <form onSubmit={handleSubmit} className="space-y-6 p-8 sm:p-10">
        <header className="space-y-1.5">
          <h1 className="text-3xl font-semibold tracking-tight">Data Mahasiswa</h1>
          <p className="text-sm text-white/55">Isi data diri kamu di bawah ini.</p>
        </header>
        {FIELDS.map(({ name, label, ...input }) => (
          <label key={name} className="block space-y-2 text-sm font-medium text-white/80">
            <span>{label}</span>
            <input
              name={name}
              required
              {...input}
              className="w-full rounded-xl border border-white/15 bg-[#000000]/60 px-4 py-3 text-base font-normal text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-[#FFE066] focus:ring-4 focus:ring-[#FFE066]/25"
            />
          </label>
        ))}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#FFD1E6] py-3 font-semibold tracking-wide text-black shadow-lg shadow-[#EC1E7A]/30 transition hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE066]/40"
        >
          Kirim
        </button>
        {submitted && (
          <p role="status" className="rounded-xl border border-[#FFE066]/30 bg-[#FFE066]/10 px-4 py-3 text-center text-sm text-[#FFE066]">
            Terkirim: {submitted.nama} · {submitted.nrp} · {submitted.prodi}
          </p>
        )}
      </form>
      </PixelCard>
    </main>
  );
}
