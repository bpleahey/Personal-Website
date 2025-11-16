"use client";

import { useState } from "react";
import contributionsData from "../data/contributions.json";

export default function SmogonContribs({}: {}) {
  const { username, totalContributions, fetchedAt, contributions } =
    contributionsData;

  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const creditTypeMap: Record<string, string> = {
    "Written by": "Author",
    "Quality checked by": "QC",
  };

  const formattedDate = new Date(fetchedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedAndFilteredContributions = contributions
    .filter((c) =>
      [c.pokemon, c.format, c.generation].some((val) =>
        val.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortConfig) return 0;
      const { key, direction } = sortConfig;
      const aValue = key === "creditType" ? creditTypeMap[a[key]] : a[key];
      const bValue = key === "creditType" ? creditTypeMap[b[key]] : b[key];
      return (
        (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) *
        (direction === "asc" ? 1 : -1)
      );
    });

  return (
    <div>
      <h2>Smogon Contributions</h2>

      <div className="flex justify-between items-center mb-4">
        <span>
          {totalContributions} contributions by user <b>{username}</b>
        </span>
        <span>Last updated on {formattedDate}</span>
      </div>

      <input
        type="text"
        placeholder="Search Pokémon, format, or generation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">Image</th>
            <th
              className="border border-gray-300 px-2 py-1 cursor-pointer"
              onClick={() => handleSort("pokemon")}
            >
              Pokémon
            </th>
            <th
              className="border border-gray-300 px-2 py-1 cursor-pointer"
              onClick={() => handleSort("format")}
            >
              Format
            </th>
            <th
              className="border border-gray-300 px-2 py-1 cursor-pointer"
              onClick={() => handleSort("creditType")}
            >
              Contribution Type
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredContributions.map((c) => (
            <tr key={c.id}>
              <td className="border border-gray-300 px-2 py-1">
                <img
                  src={`https://play.pokemonshowdown.com/sprites/ani/${c.pokemon.toLowerCase()}.gif`}
                  alt={c.pokemon}
                  width={48}
                  height={48}
                />
              </td>
              <td className="border border-gray-300 px-2 py-1">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {c.pokemon}
                </a>
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {c.generation.toUpperCase()} {c.format}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {creditTypeMap[c.creditType] ?? c.creditType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <a
          href={"https://github.com/bpleahey/smogon-contrib-visualizer"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View source on GitHub
        </a>
      </div>
    </div>
  );
}
