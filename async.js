const dotenv = require("dotenv");
const axios = require("axios");

// build currency layer api
dotenv.config();
//const { CL_KEY } = process.env;
const CL_API = `http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`;
const CC_API = "https://restcountries.eu/rest/v2/currency/";

// get rate
const getExchangeRate = async (from, to) => {
  try {
    const { data } = await axios.get(CL_API);
    const value = 1 / data.rates[from];
    //console.log(`1 ${from} =  ${value} ${to}`);
    return value;
  } catch (error) {
    console.error(error);
  }
};

// get country
const getCurrency = async toCurrency => {
  try {
    const { data } = await axios.get(CC_API + toCurrency);
    return data.map(country => country.name);
  } catch (error) {
    throw new Error(`Unable to find a country for: ${toCurrency}`);
  }
};

// convert currency
const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCurrency(to);
  const conv = (rate * amount).toFixed(2);

  if (isNaN(conv)) {
    throw new Error(`${amount} in not a number.`);
  }

  return `${amount} ${from} is worth ${conv} ${to}. 
You can use these in: ${countries}.`;
};

convertCurrency("USD", "EUR", 100)
  .then(res => console.log(res))
  .catch(err => console.error(err.message));
