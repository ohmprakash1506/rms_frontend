import React from 'react'

function GraphBox(props) {
    return (
        <div className='graphMainBox p-4 col'>
            <div className='graphBox m-auto'
                style={{ backgroundColor: `${props.graphData.graphDataDraw.color}` }}>
            </div>

            <div>
                <h3 className='fs-2 fw-bold p-0 m-0'>{props.graphData.heading}</h3>
                <p>{props.graphData.summery}</p>
                <hr />
                <p><i className='glyphicon glyphicon-time'></i> {props.graphData.time}</p>
            </div>
        </div>
    )
}

export default GraphBox