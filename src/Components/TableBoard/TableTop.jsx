import React from 'react'
import searchIcon from "../../Assets/search.svg"
import fliterIcon from "../../Assets/filter.svg"

function TableTop(props) {

    const search = (e) => { //function for searching
        const tableData = document.getElementsByTagName('td')
        for (let r of tableData) {
            if (e.target.value === '') {
                r.parentElement.style.display = "table-row"
            }
            r.parentElement.style.display = "none"
        }
        for (let r of tableData) {
            if ((r.textContent).toLowerCase().includes((e.target.value).toLowerCase())) {
                r.parentElement.style.display = "table-row"
            }
        }
    }


    return (
        <div className='d-flex justify-content-between mt-2 mb-3'>
            <button className='btn tableTopAdd px-4' onClick={() => {
                props.setEditData(null)
                document.getElementsByTagName('dialog')[0].showModal();
            }}><span>+</span>Add</button>

            <div className='position-relative tableTopSearch'>
                <input type="text" className='px-4' placeholder='Search something here' onChange={(e) => search(e)} />
                <div className='position-absolute'><img src={searchIcon} style={{ width: "18px" }} /></div>

                <button className='btn position-relative'>Filters
                    <div className='position-absolute'><img src={fliterIcon} style={{ width: "18px" }} /></div>
                </button>
            </div>

            <div>
                {props.AddPopUp ? props.AddPopUp() : ''}
            </div>

            <dialog className='border-0 rounded position-absolute bg-primary' id='failedBox'>
                <p className='position-absolute closeBoxBtn' onClick={() => {
                    document.getElementsByTagName('dialog')[1].close()
                }}>X</p>
                <div><h1>Cluster Data Insertion Unsuccessfull</h1></div>
            </dialog>

        </div>
    )
}

export default TableTop