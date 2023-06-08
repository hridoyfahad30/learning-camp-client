import React, { useEffect, useState } from 'react';
import { GridLoader } from "react-spinners";
import ManageClassesTable from '../../components/Dashboard/ManageClassesTable';

const ManageClasses = () => {

    const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);


    return (
        <>
        {reactLoading?
        
        <div className="flex justify-center items-center h-[100vh]">
          <GridLoader
        color="#0ee9ff"
        margin={10}
        size={50}
        speedMultiplier={2}
        width={0}
      />
        </div>
      :
        <div>
           <ManageClassesTable />
        </div>}
        </>
    );
};

export default ManageClasses;