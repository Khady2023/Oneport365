import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrier from './Carrier'
import CarrierDetails from './CarrierDetails';
import UseFetch from './UseFetch';

function App() {
 
  return (
    <>
    <Router>
      <div className='mx-6 lg:mx-52'>
    <Carrier />
    
    <Routes>
    <Route path='/CarrierDetails' element={<CarrierDetails/>} />
    
    </Routes>
    </div>
    </Router>
    
    </>
  )
}

export default App
