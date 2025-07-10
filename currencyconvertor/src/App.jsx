import { useState } from 'react'
import { Input } from './components/Input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

import './App.css'

function App() {
  const[amount , setAmount] = useState(0);
  const[From , setFrom] = useState("usd");
  const[to , setTo] = useState("inr");
  const[convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(From);

  const options = Object.keys(currencyInfo)
  console.log("Currency options:", options);
  console.log("Currency info:", currencyInfo);

  const swap = () =>{
    setFrom(to);
    setTo(From);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to]);
  }
   

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onAmountChange={(amount)=>setAmount(amount)}
                            selectCurrency={From}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onAmountChange={(amount)=>setConvertedAmount(amount)}
                            selectCurrency={to}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            amountDisable={true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
