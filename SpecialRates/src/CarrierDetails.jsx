import React from 'react'
import Cosco from './Cosco';
import UseFetch from './UseFetch';
import { useParams } from 'react-router-dom';


const CarrierDetails = () => {

  const{carriersize, carriertype} = useParams();
    const {result} = UseFetch(`https://oneport365.free.beeceptor.com/live_rates?container_size=${carriersize}&container_type=${carriertype}`);

  return (
    <div>
            {result && <Cosco result={result} />}    
    </div>
  )
}

export default CarrierDetails
