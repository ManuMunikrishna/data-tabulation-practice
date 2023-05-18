import React, { useEffect, useState } from 'react'
import Loading from './loading';

import { getApiData } from '../utils/api';
import { Link } from 'react-router-dom';

const ApplicationMenu = ({endpoint}) => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetchData()
        
    }, []);


    const fetchData = async () => {
        try {
        
            const rawData= await getApiData(endpoint);
            console.log(endpoint)


            setData(rawData);

        } catch (error) {
            console.log('Error:', error);
        }
    };
  return (
    <div className='menu-section'>
        {
    !data.length? <Loading />: data.map((item, i) => <span style={{color:'white'}} className="btn btn-outline-primary tags" key={i}>
        <Link className='link' to={`${endpoint}/${item}`}>
        {item}
        </Link >
        </span>)   
    }</div>
  )
}

export default ApplicationMenu