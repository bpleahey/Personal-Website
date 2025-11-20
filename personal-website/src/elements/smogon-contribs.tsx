"use client";

import { useState } from "react";
import contributionsData from "../data/contributions.json";
import styles from "./smogon-contribs.module.css";

export default function SmogonContribs() {
  const { username, totalContributions, fetchedAt, contributions, userId } =
    contributionsData;

  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const creditTypeMap: Record<string, string> = {
    "Written by": "Author",
    "Quality checked by": "Quality Control",
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
      const aValue =
        key === "creditType"
          ? creditTypeMap[a[key as keyof typeof a]]
          : a[key as keyof typeof a];
      const bValue =
        key === "creditType"
          ? creditTypeMap[b[key as keyof typeof b]]
          : b[key as keyof typeof b];
      return (
        (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) *
        (direction === "asc" ? 1 : -1)
      );
    });

  return (
    <div>
      <h2>Smogon Contributions</h2>

      <div className={styles.headerInfo}>
        <span>
          {totalContributions} contributions by user{" "}
          <a
            href={`https://www.smogon.com/forums/members/${username}.${userId}/`}
            className={styles.pokemonLink}
          >
            <strong>{username}</strong>
          </a>
        </span>
        <span>Last updated on {formattedDate}</span>
      </div>

      <input
        type="text"
        placeholder="Search Pokémon, format, or generation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />

      <table className={styles.contributionsTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Image</th>
            <th
              className={styles.sortable}
              onClick={() => handleSort("pokemon")}
            >
              Pokémon{" "}
              {sortConfig?.key === "pokemon" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th
              className={styles.sortable}
              onClick={() => handleSort("format")}
            >
              Format{" "}
              {sortConfig?.key === "format" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th
              className={styles.sortable}
              onClick={() => handleSort("creditType")}
            >
              Contribution Type{" "}
              {sortConfig?.key === "creditType" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredContributions.map((c) => (
            <tr key={c.id}>
              <td>
                <img
                  src={`https://play.pokemonshowdown.com/sprites/ani/${c.pokemon.toLowerCase()}.gif`}
                  alt={c.pokemon}
                  width={48}
                  height={48}
                />
              </td>
              <td>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pokemonLink}
                >
                  {c.pokemon}
                  {c.setNumber > 0 ? ` (${c.setNumber + 1})` : ""}
                </a>
              </td>
              <td>
                {c.generation.toUpperCase()} {c.format}
              </td>
              <td>{creditTypeMap[c.creditType] ?? c.creditType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>
        <div className={styles.links}>
          <a
            href={"https://github.com/bpleahey/smogon-contrib-visualizer"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View source on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
