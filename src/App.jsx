import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
        );
        setCountries(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch country data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p className="info">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default App;
