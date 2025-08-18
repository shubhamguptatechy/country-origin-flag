import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <div className="card">
      <div className="flag-container">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="flag"
        />
      </div>
      <h3>{country.name.official}</h3>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
    </div>
  );
}

export default CountryCard;
