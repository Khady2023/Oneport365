import React, { useState } from 'react'

const Carrier = () => {
    const [activesize, setActivesize] = useState('');
    const [activetype, setActivetype] = useState('');
    const [carriersize, setCarriersize] = useState('20FT');
    const [carriertype, setCarriertype] = useState('dry');
    const [togglesize, setTogglesize] = useState(false);
    const [toggletype, setToggletype] = useState(false);

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
          <h1 className="text-4xl my-12">Special Rates</h1>
          <div className='flex flex-row space-x-4'>
          <div>
            <button  onClick={()=>setTogglesize(!togglesize)} className='flex flex-row space-x-3 border border-secondary px-3 py-3 rounded-md'>
                <h3>{carriersize}</h3> <img width="16" height="16" className='py-1' src="https://img.icons8.com/sf-regular-filled/48/737373/expand-arrow.png" alt="expand-arrow"/>
            </button>
            <ul className={`${!togglesize ? 'hidden' : 'flex flex-col'} text-sm  my-2 rounded-md shadow-lg py-3 px-2 space-y-5 text-secondary w-24`}>
               {containerSize.map((ft)=>(
                <li key={ft.id} className={`${activesize===ft.size ? "bg-primary text-green" : "text-black bg-none"}  py-1 px-1`} onClick={()=>{setTogglesize(!togglesize);
                    setCarriersize(ft.size);
                setActivesize(ft.size)
                }}>{ft.size}</li>
               ))}
            </ul>
          </div>

          <div>
            <button  onClick={()=>setToggletype(!toggletype)} className='flex flex-row space-x-3 border border-secondary px-3 py-3 rounded-md'>
                <h2>{carriertype}</h2> <img width="16" height="16" className='py-1' src="https://img.icons8.com/sf-regular-filled/48/737373/expand-arrow.png" alt="expand-arrow"/>
            </button>
            <ul className={`${!toggletype ? 'hidden' : 'flex flex-col'} text-md  my-2 rounded-md shadow-lg py-3 px-2 space-y-5 text-secondary w-24`}>
               {containerType.map((link)=>(
                <li key={link.Id} className={`${activetype===link.type ? "bg-primary text-green" : "text-black bg-none"}  py-1 px-1`} onClick={()=>{setToggletype(!toggletype);
                    setCarriertype(link.type);
                setActivetype(link.type)
                }}>{link.type}</li>
               ))}
            </ul>
          </div>

          </div>
    </div>
  )
}

export default Carrier
