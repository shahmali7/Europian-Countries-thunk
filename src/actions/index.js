import axios from 'axios'

export const getCountries =()=> dispatch =>{
   axios
   .get('https://restcountries.com/v2/regionalbloc/eu')
   .then(response=>dispatch({type:'get',payload:response.data}))
   .catch(error=>dispatch({type:'err',payload:error}))
}