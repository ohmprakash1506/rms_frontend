import React from 'react'
import DashboardOrdersList from './DashboardOrdersList'

const order1 = {
  title: "$2400, Design changes",
  date: "22 DEC 7:20 PM"
}

const order2 = {
  title: "New order #1832412",
  date: "21 DEC 11 PM"
}

const order3 = {
  title: "Server payments for April",
  date: "21 DEC 9:34 PM"
}

const order4 = {
  title: "New card added for order #4395133",
  date: "20 DEC 2:20 AM"
}

const order5 = {
  title: "Unlock packages for development",
  date: "18 DEC 4:54 AM"
}

const order6 = {
  title: "New order #9583120",
  date: "17 DEC"
}


function DashboardOrders() {
  return (
    <div className='dashboardOrders p-4 m-4'>
      <div>
        <h4>Orders overview</h4>
        <p><span className='fw-bold' style={{color:"grey"}}>24%</span> this month </p>
      </div>

      <div className='mt-5'>
        <DashboardOrdersList order={order1} />
        <DashboardOrdersList order={order2} />
        <DashboardOrdersList order={order3} />
        <DashboardOrdersList order={order4} />
        <DashboardOrdersList order={order5} />
        <DashboardOrdersList order={order6} />
      </div>
    </div>
  )
}

export default DashboardOrders