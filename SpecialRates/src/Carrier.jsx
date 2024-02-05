import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UseFetch from './UseFetch';

const Carrier = () => {
    const [activesize, setActivesize] = useState('');
    const [activetype, setActivetype] = useState('');
    const [carriersize, setCarriersize] = useState('20FT');
    const [carriertype, setCarriertype] = useState('dry');
    const [togglesize, setTogglesize] = useState(false);
    const [toggletype, setToggletype] = useState(false);  

    
     const {result} = UseFetch(`https://oneport365.free.beeceptor.com/live_rates?container_size=${carriersize}&container_type=${carriertype}`);
    

    const containerSize=[{
        id: '1',
        size: '20FT'
      },
      {
        id: '2',
        size: '40FT'
      },
      {
        id: '3',
        size: '40FT HC'
      }];

      const containerType=[{
        Id: '1',
        type: 'dry'
      },
      {
        Id: '2',
        type: 'reefer'
      }];

   
 
  return (
    <div>
          <Link to=''><h1 className="text-4xl my-12">Special Rates</h1></Link> 
          <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-40'>
          
          <div className='flex flex-row space-x-2'>
          <div>
            <button  onClick={()=>setTogglesize(!togglesize)} className='flex flex-row space-x-3 border border-secondary px-3 py-2 rounded-[4px]'>
                <h3>{carriersize}</h3> <img width="16" height="16" className='py-1 pr-1' src="https://img.icons8.com/sf-regular-filled/48/737373/expand-arrow.png" alt="expand-arrow"/>
            </button>
            <ul className={`${!togglesize ? 'hidden' : 'flex flex-col'} text-sm  my-2 rounded-md shadow-lg py-3 px-2 space-y-5 text-secondary w-24 z-10 absolute bg-white`}>
               {containerSize.map((ft)=>(
                <li key={ft.id} className={`${activesize===ft.size ? "bg-primary text-green rounded-sm" : "text-black bg-none"}  py-1 px-1`} onClick={()=>{setTogglesize(!togglesize);
                    setCarriersize(ft.size);
                setActivesize(ft.size);
                }}>{ft.size}</li>
               ))}
            </ul>
          </div>

          <div>
            <button  onClick={()=>setToggletype(!toggletype)} className='flex flex-row space-x-3 border border-secondary px-3 py-2 rounded-[4px]'>
                <h2>{carriertype}</h2> <img width="16" height="16" className='py-1 pr-1' src="https://img.icons8.com/sf-regular-filled/48/737373/expand-arrow.png" alt="expand-arrow"/>
            </button>
            <ul className={`${!toggletype ? 'hidden' : 'flex flex-col'} text-md  my-2 rounded-md shadow-lg py-3 px-2 space-y-5 text-secondary w-24 z-10 absolute bg-white`}>
               {containerType.map((link)=>(
                <li key={link.Id} className={`${activetype===link.type ? "bg-primary text-green rounded-sm" : "text-black bg-none"}  py-1 px-1`} onClick={()=>{setToggletype(!toggletype);
                    setCarriertype(link.type);
                setActivetype(link.type);
                }}>{link.type}</li>
               ))}
            </ul>
          </div>
          </div>

          <div className='flex flex-row space-x-2 justify-between lg:space-x-3 overflow-x-scroll'>
                <Link to=""><button className='border border-secondary px-3 py-2 rounded-[4px]'>COSCO</button></Link>
                <button  className='border border-secondary px-3 py-2 rounded-[4px]'>CMA&nbsp;CGM</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>MAERSK</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>PIL</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>ZIM</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>OOCL</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>MSC</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>ONE</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>ESL</button>
                <button className='border border-secondary px-3 py-2 rounded-[4px]'>EVERGREEN</button>
          </div>
          </div>
         
          <hr className='text-secondary w-full my-8' />


    </div>
  )
}

export default Carrier
