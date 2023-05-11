import React from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { countryCode } = useParams;
  const filterCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3code === countryCode;
  });
  console.log(filterCountry);

  return (
    <div>
      <div className="col-7">
        <h1>{filterCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{filterCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {filterCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>

              <td>
                {filterCountry.borders.length === 0 ? (
                  <p>No borders found!</p>
                ) : (
                  filterCountry.borders.map((border) => {
                    return countries.map((country) => {
                      if (country.alpha3Code === border) {
                        return (
                          <Link
                            to={`/${country.alpha3code}`}
                            key={country.alpha3Code}
                          >
                            <p>{country.name.common}</p>
                          </Link>
                        );
                      }
                    });
                  })
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
