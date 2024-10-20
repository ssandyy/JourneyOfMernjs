import { useEffect, useState } from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
        // https://latest.currency-api.pages.dev/v1/currencies/inr.json
        // chaining using for callBack
        .then((res) => res.json()) // here we are converting data(string) to json
        .then((res) => setData(res[currency]))
        .catch((err) => console.error("Error fetching currency data:", err));
    }, [currency]);
    
    console.log(data);
    
    return data;
}

export default useCurrencyInfo