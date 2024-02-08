import React from 'react'

const CarrierDetails = ({result}) => {

  return (

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {result.map((link)=>(
      <div key={link.special_rate_id} className='w-full  border-2 border-offwhite rounded-xl px-6 py-6 hover:border-green'>
      <div className='flex flex-row justify-between'>
      <h2>{link.carrier_name}</h2>
      <h2>{link.origin_port_code} - {link.destination_port_code}</h2>
      </div>

      <h1 className='py-3 text-xl pb-5'>${link.total_amount_usd}</h1>
      <hr className='py-4' />

      <div className='flex flex-row justify-between text-sm '>
          <div className='flex flex-col'>
              <p className='text-secondary'>Sailing Date</p>
              <p>{link.sailing_date === null? "N/A": link.sailing_date}</p>
          </div>
          <div className='flex flex-col'>
              <p className='text-secondary'>Transit Time</p>
              <p>{link.transit_time == null || ""? "N/A": link.transit_time}</p>
          </div>
          <div className='flex flex-col'>
              <p className='text-secondary'>Free Days</p>
              <p>{link.detention_days + link.demurrage_days}</p>
          </div>

      </div>
    </div>    
          ))}
    </div>
  )
}

export default CarrierDetails

