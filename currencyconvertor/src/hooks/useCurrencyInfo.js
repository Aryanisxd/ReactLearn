import { useEffect, useState } from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        // Try the original API first
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log("API Response:", res);
            console.log("Currency data:", res[currency]);
            setData(res[currency] || {});
        })
        .catch((error) => {
            console.error("Error fetching currency data:", error);
            // Fallback to a simpler approach with common currencies
            const fallbackData = {
                usd: 1,
                inr: 83.12,
                eur: 0.92,
                gbp: 0.79,
                jpy: 149.50,
                aud: 1.52,
                cad: 1.35,
                chf: 0.88,
                cny: 7.23,
                nzd: 1.64
            };
            setData(fallbackData);
        })
    },[currency])

   console.log("Currency info data:", data)
   return data 
}

export default useCurrencyInfo
