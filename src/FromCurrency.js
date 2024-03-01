import React from 'react'



const FromCurrency = ({handleFromCurrency,fromCurrency}) => {
  return (
    <div>
      <div className='Input-container'>     
    
              
    <label htmlFor='fromCurrency'>From Currency :</label>
     <select onChange={handleFromCurrency} id="fromCurrency"value={fromCurrency}>

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
  )
}

export default FromCurrency
