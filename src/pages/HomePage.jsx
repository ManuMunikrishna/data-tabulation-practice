import ApplicationMenu from '../components/applicationMenu';
import Inventory from '../components/inventory';
import Loading from '../components/loading';
import Table from '../components/table';
import { fetchData, getApiData } from '../utils/api';
import { endpoints } from '../utils/endpoints';
import React, { useEffect, useState } from 'react';



const HomePage = () => {
   


   

    return (
        <div>
            <h3>Applications Menu</h3>
            <ApplicationMenu endpoint={endpoints.applications}/>
            <h3>Resources Menu</h3>
            <ApplicationMenu endpoint={endpoints.resources}/>
            <h3>Raw Inventory</h3>
           <Inventory endpoint={endpoints.raw}/>
        </div>
    );
}

export default HomePage