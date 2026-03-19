export function parseAndSortDetails(
  details: string[],
): Record<string, number>[] {
  return (
    details
      // Remove any "N/A" entries
      .filter((d) => d !== "N/A")

      // Convert "BOS -142" → { BOS: -142 }
      .map((d) => {
        const [team, odds] = d.split(" ");
        return { [team]: Number(odds) };
      })

      // Sort by the odds value from lowest to highest
      .sort((a, b) => {
        const valA = Object.values(a)[0];
        const valB = Object.values(b)[0];
        return valA - valB;
      })
  );
}
