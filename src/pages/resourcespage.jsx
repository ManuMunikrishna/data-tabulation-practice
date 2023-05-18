import React, { useEffect, useState } from 'react'
import { endpoints } from '../utils/endpoints';
import Inventory from '../components/inventory';
import { useParams } from 'react-router-dom';

const Resourcespage = () => {
    const [param, setParam] = useState("")
    let { rid } = useParams();

    useEffect(()=>{
    },[])
  return (
    <div>
        <Inventory endpoint={endpoints.resources+"/"+rid} />
    </div>
  )
}

export default Resourcespage