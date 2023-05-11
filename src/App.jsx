import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import CountriesJson from "./countries.json";
import React, { useState } from "react";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(CountriesJson);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />

      <Routes>
        <Route
          path="/:countryCode"
          element={<CountryDetails countries={countries} />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}
export default App;
