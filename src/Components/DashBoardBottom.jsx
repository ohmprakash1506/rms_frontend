import React from 'react'
import DashboardOrders from './DashboardOrders';
import DashboardProjects from './DashboardProjects';

function DashBoardBottom() {
    return (
        <>
            <DashboardProjects />
            <DashboardOrders />
        </>
    )
}

export default DashBoardBottom