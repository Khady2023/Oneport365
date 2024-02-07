import React from 'react'

const Cosco = ({result}) => {
  return (
    <div>
        {result.map((link)=>(
      <div key={link.special_rate_id} className='w-full my-4 flex-col md:w-6/12 md:flex-row lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 border border-secondary rounded-xl px-6 py-3'>
      <div className='flex flex-row justify-between'>
      <h2>{link.carrier_name}</h2>
      <h2>{link.origin_port_code} - <span>{link.destination_port_code}</span></h2>
      </div>

      <h1 className='py-3 text-xl pb-5'>${link.total_amount_usd}</h1>
      <hr className='py-4' />

      <div className='flex flex-row justify-between text-sm '>
          <div className='flex flex-col'>
              <p className='text-secondary'>Sailing Date</p>
              <p>{link.sailing_date}</p>
          </div>
          <div className='flex flex-col'>
              <p className='text-secondary'>Transit Time</p>
              <p>{link.transit_time}</p>
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

export default Cosco

