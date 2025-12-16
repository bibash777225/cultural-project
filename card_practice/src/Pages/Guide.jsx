

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import GuideCard from "../Components/GuideCard";

function Guide() {
  const [guides, setGuides] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/users");
        setGuides(res.data);
      } catch (err) {
        setError("Failed to load guides");
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  const filteredGuides = guides.filter((guide) =>
  `${guide.name.firstname} ${guide.name.lastname}`
    .toLowerCase()
    .includes(search.toLowerCase())
);

if (loading) return <h2 className="pt-20 text-center">Loading...</h2>;
if (error) return <h2 className="pt-20 text-center">{error}</h2>;

  return (
    <>
      <Navbar />
      

      <div className="pt-24 px-10">
        <input
          type="text"
          placeholder="Search guide..."
          className="mb-6 p-2 border rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Guide;
