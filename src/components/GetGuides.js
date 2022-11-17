import {useEffect, useState} from 'react';
import api from '../utils/api'

function GetGuides() {
  const [guides, setGuides] = useState([]);
  useEffect(()=>{
    const getGuides = async ()=>{
      const g = await api.get('/guides');
      setGuides(g)
    }
    getGuides();
  },[])
  console.log(guides)
  return (
    <div className="App">
      getting guides
    </div>
  );
}

export default GetGuides;
