import React from 'react';


function DashboardTopBox(props) {

    const percentage = () => {
        if (props.dtData.totalBudget > 0) {
            if (props.dtData.utilizedBudget > 0) {
                return ((props.dtData.utilizedBudget) / (props.dtData.totalBudget) * 100).toFixed(2);
            }
            return 100;
        }
        return 0;
    }

   

    return (
        <div className='dcard p-0'>
            <div className='py-3 ps-4 cardHeader' style={{ backgroundColor: `${props.colors}` }}>
                <h2 className='fs-1 m-0 pb-2'>{props.dtData.name}</h2>
                <h3 className='fs-3 m-0 mb-2'>{props.dtData.title ? props.dtData.title : "--"}</h3>
            </div>
            <div className='container px-5' style={{ width: "100%" }}>
                <div className='row mb-3 mt-3'>
                    <div className='col p-0'>
                        <p className='fs-5'>Total Budget</p>
                        <p className='fs-3' style={{ color: "#F4B512" }}>{`₹ ${props.dtData.totalBudget}`}</p>
                    </div>
                    <div className='col p-0'>
                        <p className='fs-5'>Utiliezed Budget</p>
                        <p className='fs-3' style={{ color: "#5E47D3" }}>{`₹ ${props.dtData.utilizedBudget}`}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col p-0'>
                        <p className='fs-5'>Ongoing Projects</p>
                        <p>{props.dtData.noOfProject}</p>
                    </div>
                    <div className='col p-0'>
                        <p className='fs-5'>Total Resource</p>
                        <p>{props.dtData.resources}</p>
                    </div>
                </div>

            </div>
            <div className='text-center py-3 border-top'>

                <p><span>{percentage()} %</span> remaining we can use</p>
            </div>

        </div>
    )
}

export default DashboardTopBox