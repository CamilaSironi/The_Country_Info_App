import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { URL } from "../App";

export default function CountryInfo() {

const [countryInfo, setCountryInfo] = useState();

const [flag, setFlag] = useState();

const {code} = useParams();

const getCountryInfo = async () => {
    try {
        const res = await fetch(`${URL}/country/${code}`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        console.log(res.status);

        const data = await res.json()

        setCountryInfo(() => data);

        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

const getFlag = async () => {
    try {
        const res = await fetch(`${URL}/flags`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        console.log(res.status);

        const data = await res.json()

        console.log(data.data);

        const filteredFlag = data.data.filter((el) => el.iso2 == code);

        setFlag(() => filteredFlag[0].flag);

        console.log(filteredFlag[0].flag)

    } catch (error) {
        console.error(error.message);
    }
}

useEffect(() => {
    getCountryInfo();
    getFlag();
}, [])

if(!flag) {
    return(
        <>
        Loading
        </>
    )
}

  return (
    <div>
        <h1>{countryInfo?.commonName}</h1>
        <div className="mw-100">
            <img src={flag} className="img-fluid"></img>
        </div>
        <h2>Border countries:</h2>
        <ul>
            {countryInfo.borders.map((el) => (
                    <li key={el.countryCode}><Link to={`/country/${el.countryCode}`}>{el.commonName}</Link></li>
                )
            )}
        </ul>
    </div>
  )
}
