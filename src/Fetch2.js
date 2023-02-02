import React from "react";
import { useState, useEffect } from "react";
const Fetch2 = () => {
  //^ async ve await ile veri alma

  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata(); //^ 6-getdata fonksiyonunu cagır ekran ilk renderlandığında
  }, []);

  async function getdata() {
    //^ 1-asenkron fonksiyon tanımla

    const api = "https://restcountries.com/v3.1/all"; //& 2-veriyi almak istedigin url adresi
    const result = await fetch(api); //! 3-fetch ile url adresinden response gelmesini bekle
    const getresults = await result.json(); //^ 4-gelen response'u Javascirpt objesine
    setdata(getresults); //* 5- data statemize bu objeyi aktar

    //^ Aynı işlemin Kısa Yolu, ilk await json() için, 2.await fetch(..) den gelen veri icin bekliyor.
    /*
    const data=await(await fetch("https://restcountries.com/v3.1/all")).json()
    setdata(getresults);
    */

    /*
    const data2=await (await fetch("https://restcountries.com/v3.1/all")).then((datam)=>datam.json());
        console.log(data2)
        */
  }
  return (
    <div>
      <h3>Await-Async Fetch ile Veri Çekme</h3>
      {data.map((country) => (
        <div key={country.name.official}>
          <h3 style={{ color: "green" }}>{country.name.official}</h3>
          <p>Capital of Country: {country.capital}</p>

          <p>
            <img src={country.flags.png} alt="img" />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Fetch2;

// ^Fetch farklı api örneği 2
/* 
^FETCH FARKLI BİR APİDEN VERİ CEKME ÖRNEĞİ
//1-Veri almayı Useffect icinde yap en mantıklısı
  //usestate olustur veriyi oraya at

  const [users, setUsers] = useState([]);
  useEffect(() => {
    1 fetch promise döndürür,promisei then ve catch bloklarıyla işleriz
    2-herhangi bir cevap geldiginde(response) then ile alıyoruz then responseun durumunu kontrol ediyor
    3-res.json response u json formatına cevirir
    4-bir sonraki then ile gelen datamız oluyor json
    5-JSON.stringfy(data) json dosyasını stringe cevirir "{"name":"ayşe","surname":"atalı"}"  dış tırnak olarak gönderiyoruz.
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <br/>
        </div>
      ))}
    </ul>
  );
*/

//^ NOT:response.json()

/*
response.json() çağrısı, yanıtın içeriğini JSON formatına çevirir ve bu veriyi bir JavaScript nesnesine dönüştürür. Örneğin, aşağıdaki bir JSON verisi varsayalım:


{
  "name": "John",
  "age": 30,
  "city": "New York"
}
Bu veri, response.json() çağrısı ile çözülürse, aşağıdaki gibi bir JavaScript nesnesine dönüştürülür:


{
  name: "John",
  age: 30,
  city: "New York"
}
^Bu nedenle, response.json() çağrısının döndürdüğü veri aslında JavaScript nesneleridir. 
*Bu nesneler, JSON verisinin yapısına göre oluşturulmuştur ve JSON verisinin aynısıdır.
*/
