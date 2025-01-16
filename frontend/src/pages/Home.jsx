import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../App";

function Home() {

    const [countries, setCountries] = useState();

    const getCountries = async () => {
        try {
            const res = await fetch(URL);
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            console.log(res.status);

            const data = await res.json()

            setCountries(() => data);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getCountries();
    }, [])

    if(!countries ){
        return(
            <>
                <h2>Loading</h2>
            </>
        )
    }

    return(
        <> 
        <h1>Available Countries:</h1>
        <div>
            {
                countries.map((country) => {
                    return(
                    <h2 key={country.countryCode} >
                        <Link to={`/country/${country.countryCode}`} >{country.name}</Link>
                    </h2>
                )   
                })
            }
        </div>
        </>
    )
}

export default Home