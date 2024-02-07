import React, { useState, useEffect } from 'react'
import CarrierDetails from './CarrierDetails';


const Carrier = () => {

    const [activesize, setActivesize] = useState('');
    const [activetype, setActivetype] = useState(''); 
    const [activecarrier, setActivecarrier] = useState('');
    const [carrierNames, setCarrierNames] = useState(["Cosco,Moscow"]); 
    const [carriersize, setCarriersize] = useState('20FT');
    const [carriertype, setCarriertype] = useState('dry');
    const [togglesize, setTogglesize] = useState(false);
    const [toggletype, setToggletype] = useState(false); 
    const [result, setResult] = useState([]);
  
      // useEffect(async ()=>{
  
      //     // fetch(`http://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${carriersize}&container_type=${carriertype}`, { mode: 'no-cors' })
  
      //     fetch('./g.json')
      //     .then((res)=>{
      //       console.log(res.json())
      //       return res.json();
      //     })
      //     .then((x)=>{
      //       console.log("deji")
      //       console.log(x.data.rates);
      //       let carrierNames=new Set(x.data.rates.carrier_name);
      //       console.log("got here");
      //       console.log(carrierNames);
      //     setResult(x.data.rates);
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching data:', error);
      //     })
          
      //     });
    
carrierNames.forEach(x=>{
  console.log("carrier :",x);
})
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('./g.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("deji");
            
            console.log(data.data.rates);
            setCarrierNames(Array.from(new Set(data.data.rates.map(item =>item.carrier_name ))));
            console.log("got here");
            console.log(carrierNames);
            setResult(data.data.rates);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      
        fetchData();
      }, []);
      

    async function filterData(keyword){
        try {
          const response = await fetch('./g.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result);
          let output=[];
          result.data.rates.forEach(x=>{
            if(x.carrier_name==keyword){
              output.push(x);
            }
          });
          console.log(output);
          setResult(output);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }


    const containerSize=[{
        id: '1',
        size: '20FT'
      },
      {
        id: '2',
        size: '40FT'
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

          <div className='flex my-6 overflow-x-scroll'>
            {carrierNames.map((x)=>{return <button  className={`${activecarrier === x ? 'text-white bg-black px-2 py-2': 'mx-2 border px-2 py-2 rounded-lg'}`} onClick={() =>{ filterData(x);
            setActivecarrier(x)
            }}>{x}</button>})}
          </div>

          </div>
          
         
          <hr className='text-secondary w-full my-8' />

        {result && <CarrierDetails result={result} carrierNames={carrierNames}/>}

    </div>
  )
}

export default Carrier

