import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import FromCurrency from './FromCurrency';

function App() {

  const [amount,setAmount] = useState()
  const [fromCurrency,setFromCurrecy] = useState("USD")
  const [toCurrency,setToCurrency] = useState("INR")
  const [converteAmount,setConverteAmount]=useState(null)
  const [exchangeRate,setExchangeRate]= useState(null)
  
  
  useEffect(()=>{

    const getEchnageRate = async ()=>{

      try {
        let url = `https://v6.exchangerate-api.com/v6/606945ffbf1465381f0e8d46/latest/${fromCurrency}`
        const response = await axios.get(url);
       
        setExchangeRate(response.data.conversion_rates[toCurrency])

      } catch  (error){
        console.error("Plese Error change rate : ", error)
      }

    }
    getEchnageRate();
  },[fromCurrency,toCurrency])


  useEffect(()=>{
    if(exchangeRate !==null){
      setConverteAmount((amount * exchangeRate).toFixed(2));
    }


  },[amount,exchangeRate])

  const handleAmountChange =(e)=>{
    const value = parseFloat(e.target.value)
    setAmount(isNaN(value)?" ":value)
  }

  const handleFromCurrency = (e)=>{
    setFromCurrecy(e.target.value)
    
  }
    
  const handleToCurrency = (e) =>{
    setToCurrency(e.target.value)
  }

  return (
    <>
      <div className='courrency-converter'>
        <div className='box'></div>
         <div className='data'>
            <h1>
             
             Currency Converter
            </h1>
            <div className='input-container'>
             <label htmlFor="amt">Amount :</label>
             <input onChange={handleAmountChange} type='number' id="amt" value={amount}></input>
            </div>
    
            <FromCurrency 
            handleFromCurrency={handleFromCurrency}
            fromCurrency={fromCurrency}
            />
    
           <div className='Input-container'>     
    
             <label htmlFor='toCurrency'>To Currency :</label>
              <select onChange={handleToCurrency} id="toCurrency" value={toCurrency}>
      
               <option value="USD">USD - United State Doller</option>
               <option value="EUR">EUR - Euro</option>
               <option value="GBA">GBA - Brtish Pound Sterling</option>
               <option value="JPY">JPY - japanses Yen </option>
               <option value="AUD">AUD - Autralisn Dollar</option>
               <option value="CAD">CAD - Candian Dollar</option>
               <option value="CNY">CNY - Chinese Yuan</option>
               <option value="INR">INR - Indian Rupee</option>
               <option value="BRL">BRL - Brazilian Real</option>
               <option value="ZAR">ZAR - South African Rand</option>
              </select>
           </div>
    
           </div>
           <div className='result'>
             <p>
               {amount} {fromCurrency}   Is Equl To    {converteAmount}   {toCurrency}
             </p>
    
          </div>
      </div>
      
  
    </>
  );

}

export default App;

