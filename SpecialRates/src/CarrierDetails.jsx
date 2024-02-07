import React from 'react'
import Cosco from './Cosco';


const CarrierDetails = ({result,carrierNames}) => {

  return (
    <div>

            {result && <Cosco result={result} />}    
    </div>
  )
}

export default CarrierDetails

