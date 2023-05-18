import React, { useEffect, useState } from 'react'
import { endpoints } from '../utils/endpoints';
import Inventory from '../components/inventory';
import { useParams } from 'react-router-dom';

const Applicationpage = () => {
    const [param, setParam] = useState("")
    let { aid } = useParams();

    useEffect(()=>{
    },[])
  return (
    <div>
        <Inventory endpoint={endpoints.applications+"/"+aid} />
    </div>
  )
}

export default Applicationpage