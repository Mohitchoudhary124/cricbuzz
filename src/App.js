import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Compoents/Navbar';
import News from './Compoents/News';
import LiveMatches from './Compoents/LiveMatches';
import UpcomingMatches from './Compoents/UpcomingMatches';
import PastMatches from './Compoents/PastMatches';
import Teams from './Compoents/Teams';
import HomePage from './Compoents/HomePage';

function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navbar/>}>
       <Route index element={<HomePage/>}/>
       <Route path="/Teams" element={<Teams/>}/> 
       <Route path="/News" element={<News/>}/> 
       <Route  path="/Livematches" element={<LiveMatches/>}/>
       <Route  path="/UpcomingMatches" element={<UpcomingMatches/>}/>
       <Route path="/PastMatches" element={<PastMatches/>}/>


      </Route>
     </Routes>

   </BrowserRouter>
  );
}

export default App;
