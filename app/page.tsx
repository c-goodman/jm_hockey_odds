import { getEventDetails } from "@/lib/queries";
import { DISCLAIMER_A, DISCLAIMER_B } from "@/lib/constants";

export default async function Home() {
  const { events, lastUpdated } = await getEventDetails();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold ">NHL Favorites</h1>
      <p className="text-sm text-gray-500">Updated Every 30 Minutes</p>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: {new Date(lastUpdated).toLocaleString()}
      </p>

      <div className="gap-3">
        {events.map((event, i) => {
          const [team, value] = Object.entries(event)[0];

          return (
            <div
              key={i}
              className="mb-1 shadow-sm p-4 transition hover:shadow-md"
            >
              <p className="text-lg font-semibold">{team}</p>
              <p>
                {value.odds} / {value.probability}%
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-12">
        {DISCLAIMER_A}
        <a
          href="https://www.espn.com/nhl/odds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 underline hover:text-blue-400"
        >
          ESPN API v2
        </a>
        {DISCLAIMER_B}
      </p>
    </div>
  );
}
