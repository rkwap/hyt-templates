"use client";

import { Eye, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TEMPLATES_CONFIG } from "@/config/templates";

const TEMPLATES = Object.keys(TEMPLATES_CONFIG).map((key) => {
  const name = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    id: key,
    name,
  };
});

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTemplates = TEMPLATES.filter(
    (tpl) =>
      tpl.name.toLowerCase().includes(search.toLowerCase()) ||
      tpl.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 via-white to-zinc-100/50 px-4 py-16 md:px-8">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 border-zinc-100 border-b pb-6">
          <div>
            <h1 className="font-bold text-2xl text-zinc-900 tracking-tight">
              HYT Portfolio Templates
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Portfolio rendering engine.
            </p>
          </div>
          <div className="relative w-full">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2.5 pr-4 pl-10 text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-950"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              type="text"
              value={search}
            />
          </div>
        </div>

        <Table className="mt-4">
          <TableHeader>
            <TableRow className="border-zinc-100 hover:bg-transparent">
              <TableHead className="px-2 font-semibold text-zinc-500">
                Template
              </TableHead>
              <TableHead className="px-2 text-right font-semibold text-zinc-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((tpl) => (
                <TableRow
                  className="border-zinc-100 transition-colors hover:bg-zinc-50/50"
                  key={tpl.id}
                >
                  <TableCell className="px-2 py-4">
                    <div>
                      <span className="font-semibold text-sm text-zinc-900">
                        {tpl.name}
                      </span>
                      <div className="mt-0.5 font-mono text-xs text-zinc-400">
                        {tpl.id}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 py-4 text-right">
                    <Link
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-2 font-medium text-white text-xs shadow-sm transition-colors hover:bg-zinc-800"
                      href={`/${tpl.id}`}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Template
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  className="py-12 text-center text-zinc-400"
                  colSpan={2}
                >
                  No templates match your search
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
