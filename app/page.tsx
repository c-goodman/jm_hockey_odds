import { getEventDetails } from "@/lib/queries";

export default async function Home() {
  const events = await getEventDetails();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">NHL Favorites</h1>

      <div className="gap-3">
        {events.map((event, i) => {
          const [team, value] = Object.entries(event)[0];

          return (
            <div
              key={i}
              className="mb-1 shadow-sm p-4 transition"
            >
              <p className="text-lg font-semibold">{team} {value}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
