import React from 'react'
import Cosco from './Cosco';
import UseFetch from './UseFetch';


const CarrierDetails = () => {

    const {result} = UseFetch('https://oneport365.free.beeceptor.com/live_rates?container_size=20FT&container_type=dry');

  return (
    <div>
            {result && <Cosco result={result} />}

       
    </div>
  )
}

export default CarrierDetails
