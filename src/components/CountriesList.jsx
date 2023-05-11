import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  //console.log(countries);
  return (
    // <div>
    //   {countries.map((country) => (
    //     <Link to={country.alpha3Code}>{country.name.common}</Link>
    //   ))}
    //   ;
    // </div>

    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
          <div className="list-group">
            {countries.map((country) => (
              <div className="list-group-item list-group-item-action">
                <Link to={country.alpha3Code}>
                  {country.name.common}
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                  />
                </Link>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
