import { useState, useEffect } from "react";
//^1-fetch fonkiyonu
function Fetch() {
  const [fetchCountries, setfetchCountries] = useState([]);
  const [isPending, setisPending] = useState(true); //başlangıçta bekledigi için ispending=true 

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setfetchCountries(data);
        setisPending(false); // veri gelir gelmez loading yazısını ortadan kaldırmalıyız ispending=false yapıyoruz
      }); //^ 2-data,js objesi artık
  }, []);

  return (
    <div className="Fetch">
      <h2>Fetch İle Veri Çekme</h2>

      {isPending && <div>Loading...</div>}

      {fetchCountries.map((country, index) => {
        return (
          <div key={index}>
            <h3 style={{ color: "green" }}>{country.name.official}</h3>
            <p>Capital of Country: {country.capital}</p>

            <p>
              <img src={country.flags.png} />
            </p>
          </div>
        );
      })}

      {/*datayı değiştirdiği için üst kısımdaki verileri ekrana yazdıramıyor cünkü  js objesi değil artık */}

      {/*
<div>
  <h2>JSON OLARAK DATAYI YAZDIRMA</h2>
  {
    JSON.stringify(fetchCountries)
  }
</div>
*/}
    </div>
  );
}

export default Fetch;
