import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"

const Axios2 = () => {
const[axiosdata,setaxiosdata]=useState([])

    useEffect(()=>{
        getData();
    },[])

const getData = async () => {
	const response = await axios.get(`https://restcountries.com/v3.1/all`);
    const data=response.data;
    setaxiosdata(data)

};
console.log(axiosdata)

    return (
        <div>
            <h2>Axios Await-Async Veri Çekme</h2>
            {
                axiosdata.map((country)=>(
            <div key={country.name.official}>
            <h3 style={{color:"green"}}>{country.name.official}</h3>
            <p>Capital of Country: {country.capital}</p>
          
          <p>
            <img src={country.flags.png}/>

          </p>
            </div>
        ))
    }
        </div>
    )
}
export default Axios2;
