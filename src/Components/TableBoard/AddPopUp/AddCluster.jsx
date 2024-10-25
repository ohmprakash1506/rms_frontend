import React from 'react';
import "../../../Styles/addPopUp.css";
import { addCluster } from "../../../Redux/Action/clusters";
import { useDispatch } from 'react-redux';

function AddCluster(props) {

    const dispatch = useDispatch();

    const handleCreateCluster = (e) => {
        e.preventDefault();
        document.getElementsByClassName("addButton")[0].style.display = "none";
        document.getElementById("projectAddLoader").style.display = "block";
        const data = {
            "name": e.target[0].value,
            "clusterHeadID": e.target[1].value,
            "description": e.target[2].value,
            "status": 1
        }
        console.log(props.editData)

        dispatch(addCluster(data, props.updateAllTableData))
            .then(res => {
                document.getElementsByClassName("addButton")[0].style.display = "block";
                document.getElementById("projectAddLoader").style.display = "none";
                document.getElementsByTagName('form')[0].reset();
                document.getElementsByTagName('dialog')[0].close();
            })
            .catch(e => {
                document.getElementsByTagName('dialog')[1].showModal();
                console.log("Error occured \n", e)
            })
    }



    return (
        <div>


            <dialog className='border-0 rounded position-absolute dialogAddBox'>
                <p className='position-absolute closeBoxBtn' onClick={() => {
                    document.getElementsByTagName('form')[0].reset();
                    document.getElementsByTagName('dialog')[0].close()
                }}>X</p>

                <form className='p-4' onSubmit={(e) => handleCreateCluster(e)} method="dialog" >

                    <h2 className='fs-2 fw-bold mt-0 mb-4'>{props.editData ? "Edit Cluster" : "Add Cluster"}</h2>

                    <div className="form-group">
                        <label htmlFor="clusterName" className="form-label">Cluster name</label>
                        <input type="text" id="clusterName" className="form-control" aria-describedby="clusterName" name={"name"} required={true} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="clusterId" className="form-label">Cluster ID</label>
                        <input type="number" id="clusterId" className="form-control" aria-describedby="clusterId" name={"clusterHeadID"} required={true} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="clusterDes" className="form-label">Description</label>
                        <div className="form-floating">

                            <textarea className="form-control"
                                style={{ height: "100px" }}></textarea>
                        </div>
                    </div>

                    <button className='btn addButton my-3 ms-auto' type="submit" style={{ width: "170px" }}>Save</button>

                    <div className="spinner-border mx-auto mt-5" role="status" id='projectAddLoader' style={{ display: "none" }}>
                        <span className="sr-only">Loading...</span>
                    </div>

                </form>
            </dialog>


        </div>
    )
}

export default AddCluster