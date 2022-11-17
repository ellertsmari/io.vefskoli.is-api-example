import {useEffect, useState} from 'react';
import api from '../utils/api'
import useAuth from '../utils/authContext';

function GetReturns() {
  const {login, isAuthenticated} = useAuth();
  const [returns, setReturns] = useState([]);
  useEffect(()=>{
    const getReturns = async ()=>{
      //const user = await api.
      const g = await api.get('/assignmentReturns');
      setGuides(g)
    }
    getReturns();
  },[])
  console.log(guides)
  return (
    <div className="App">
      getting guires
    </div>
  );
}

export default GetReturns;
