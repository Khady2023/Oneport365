import { useEffect, useState } from 'react'

const UseFetch = (url) => {
  const [result, setResult] = useState([]);
  
      useEffect(()=>{
  
          fetch(url)
          .then(res=>res.json())
          .then(x=>{console.log(x);
          setResult(x.data.rates);
          })
          
          }, [url]);
  
  return (
    <div>
        {result}
    </div>
  )
}

export default UseFetch
