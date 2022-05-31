import {getCountries} from './actions'
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch =useDispatch()
  const countriesData = useSelector((state)=>state.countries)
  useEffect(()=>{
    dispatch(getCountries())
  },[])
  console.log(countriesData);
  return (
    <div>
    <h1>Countries of the Europe</h1>
    <p>{countriesData?.map((country,index)=>{
      return(
        <div key={index}>
          <h2>{country.name}</h2>
          <img src={country.flags.png}/>
          <h3 style={{marginLeft:'10px'}}>Capital: {country.capital}</h3>
          <h4>Population: {country.population}</h4>
          <h5>Numeric-Code: {country.numericCode}</h5>
        </div>
      )
    })}</p>
    </div>
  );
}


export default App;