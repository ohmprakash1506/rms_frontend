import React from 'react'
import sortIcon from "../../../Assets/sort.svg"

function TableHeader(props) {




    function sorting(e) {  //function for sorting the row wrt column
        let assending = true;

        const tableBody = document.getElementsByTagName('tbody')[0];
        const allRows = Array.from(document.getElementsByTagName('tr'))
        const allHeaders = Array.from(document.getElementsByTagName('th'))


        let allColData = [];

        for (let h = 0; h < allHeaders.length; h++) {
            if (allHeaders[h].textContent === e.target.parentElement.textContent) {
                for (let row of allRows) {
                    allColData.push(row.getElementsByTagName('td')[h])
                }
                if (assending) {
                    allColData.sort((a, b) => {
                        if (!isNaN(a.textContent) && !isNaN(b.textContent)) {

                            return Number(b.textContent) > Number(a.textContent)
                        }

                        return b.textContent > a.textContent
                    })
                    for (let a of allColData) {
                        if (a)
                            tableBody.appendChild(a.parentElement)
                    }

                    assending = false;
                    allColData = [];
                }
                if (!assending) {
                    allColData.sort((a, b) => {
                        if (isNaN(a.textContent) && isNaN(b.textContent) !== NaN) {
                            return Number(b.textContent) < Number(a.textContent)
                        }
                        return b.textContent < a.textContent
                    })
                    for (let a of allColData) {
                        if (a)
                            tableBody.appendChild(a.parentElement)
                    }
                    assending = true;
                    allColData = [];
                }
            }
        }
    }


    return (
        <th
            style={{ fontSize: "12px" }}
            className='TableHeader'>{props.headerName}
            {props.headerName ? <img src={sortIcon} alt="" className='tableHeaderIcon' onClick={(e) => sorting(e)} /> : ''}

        </th>
    )
}

export default TableHeader