const axios = require('axios');

exports.getAll = async(req, res, next) => {

    try { 
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries', {
        });

        console.log(response.data);

        res.status(200).json(response.data);

    } 
    catch (err) {
        console.error('Error fetching countries:', err.message);
    }
}

exports.getByCode = async(req, res, next) => {

    const countryCode = req.params.code;
    
    try { 
        const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`, {
        });

        console.log(response.data);

        res.status(200).json(response.data);

    } 
    catch (err) {
        console.error('Error fetching country info:', err.message);
    }
}

exports.getFlags = async(req, res, next) => {

    try { 
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images', {
        });

        console.log(response.data);

        res.status(200).json(response.data);

    } 
    catch (err) {
        console.error('Error fetching flags:', err.message);
    }
}