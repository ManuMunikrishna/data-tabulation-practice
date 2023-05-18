import Loading from '../components/loading';
import Table from '../components/table';
import { getApiData } from '../utils/api';
import { endpoints } from '../utils/endpoints';
import React, { useEffect, useState } from 'react';



const Inventory = ({endpoint}) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        fetchData()
        setColumns([
            { Header: 'Date', accessor: 'Date' },
            { Header: 'ResourceGroup', accessor: 'ResourceGroup' },
            { Header: 'InstanceId', accessor: 'InstanceId' },
            { Header: 'ServiceName', accessor: 'ServiceName' },
            { Header: 'Cost', accessor: 'Cost' },
            { Header: 'ConsumedQuantity', accessor: 'ConsumedQuantity' },
            { Header: 'MeterCategory', accessor: 'MeterCategory' },
            { Header: 'ResourceLocation', accessor: 'ResourceLocation' },
        ])
    }, []);


    const fetchData = async () => {
        try {
        
            const rawData= await getApiData(endpoint);

            setData(rawData);

        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            {data.length ?

                <Table data={data} columns={columns} /> : <Loading />
            }
        </div>
    );
}

export default Inventory;