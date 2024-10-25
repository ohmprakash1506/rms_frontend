import React from 'react'
import "../Styles/dashboardTopBoxes.css"

function DashboardTopBoxes(props) {
  let getColor = "red";
  if (props.boxdetails.box_bottom_value[0] === "+") {
    getColor = "green"
  }

  return (
    <div className="position-relative mt-5">

      <div style={{ backgroundColor: `${props.boxdetails.color}`, width: "60px", height: "60px", color: "white" }}
        className="position-absolute text-center boxAbsolute">
        <i className={`glyphicon glyphicon-${props.boxdetails.icon}`} style={{ marginTop: "1.5em" }}></i>
      </div>

      <div style={{ backgroundColor: "white" }} className="p-4 boxTop">
        <p className="text-right">{props.boxdetails.box_heading}</p>
        <p className="text-right fw-bold fs-1">{props.boxdetails.box_content}</p>
        <hr />
        <p>
          <span style={{ color: `${getColor}` }} className="fw-bold">
            {props.boxdetails.box_bottom_value}</span>
          {props.boxdetails.box_bottom}</p>
      </div>

    </div>
  )
}

export default DashboardTopBoxes