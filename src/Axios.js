import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [axiosCountries, setaxiosCountries] = useState([]);
  //AXİOS 1-
  //^1.Yöntem

  useEffect(() => {
    //axios farkı dönen cevap içinde tüm verileri data içinde saklar
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(
        response
      ); /* {data: Array(250), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}  response <<<*/
      console.log(response.data); //  data: (250) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]*/
      setaxiosCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Axios İle Veri Çekme</h2>
      {axiosCountries.map((country, index) => {
        return (
          <div key={index}>
            <h3 style={{ color: "red" }}>{country.name.official}</h3>
            <p>Capital of Country: {country.capital}</p>

            <p>
              <img src={country.flags.png} />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
