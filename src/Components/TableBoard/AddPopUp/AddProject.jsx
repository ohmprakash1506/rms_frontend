import React from 'react'
import "../../../Styles/addPopUp.css";
import { useDispatch } from 'react-redux';
import { addProject } from "../../../Redux/Action/projectAction"

function AddProject(props) {
    const dispatch = useDispatch();
    function handleAddProject(e) {

        e.preventDefault();
        const data = {
            "name": e.target[0].value,
            "description": e.target[1].value,
            "type": e.target[2].value,
            "startDate": e.target[3].value,
            "endDate": e.target[4].value,
            "clusterID": e.target[5].value,
            "status": 1
        }

        document.getElementsByClassName("addButton")[0].style.display = "none";
        document.getElementById("projectAddLoader").style.display = "block";

        dispatch(addProject(data, props.updateAllTableData))
            .then(res => {
                document.getElementsByClassName("addButton")[0].style.display = "block";
                document.getElementById("projectAddLoader").style.display = "none";
                document.getElementsByTagName('form')[0].reset();
                document.getElementsByTagName('dialog')[0].close();
            })
            .catch(e => {
                document.getElementsByTagName('dialog')[1].showModal();
                console.log("error occured \n", e)
            })
    }
    return (
        <div>
            <dialog className='border-0 rounded position-absolute dialogAddBox'>
                <p className='position-absolute closeBoxBtn' onClick={() => {
                    document.getElementsByTagName('form')[0].reset();
                    const d = document.getElementsByTagName('dialog')[0]
                    d.close()
                }}>X</p>

                <form className='p-5' method="dialog" onSubmit={(e) => handleAddProject(e)}>

                    <div className="form-group">

                        <input type="text" className="form-control" aria-describedby="name" placeholder="Project Name" name={'name'} required />
                    </div>

                    {/*<div className="form-group">

                        <input type="text" className="form-control" aria-describedby="description" placeholder="Project Description" name={'description'} required />

            </div>*/}
                    <div className="form-group">

                        <input type="Number" className="form-control" aria-describedby="type" placeholder="000" name={'type'} required />

                    </div>
                    <div className="form-group">

                        <input type="date" className="form-control" aria-describedby="startDate" name={'startDate'} required />

                    </div>
                    <div className="form-group">

                        <input type="date" className="form-control" aria-describedby="endDate" name={'endDate'} required />

                    </div>
                    <div className="form-group">

                        <input type="number" className="form-control" aria-describedby="clusterID" placeholder="#0000" name={"clusterID"} required />

                    </div>



                    <button className='btn ms-auto addButton' style={{ display: "block", width: "140px" }}>Next</button>

                    <div className="spinner-border mx-auto" role="status" id='projectAddLoader' style={{ display: "none" }}>
                        <span className="sr-only">Loading...</span>
                    </div>


                </form>


            </dialog>
        </div>
    )
}

export default AddProject


// {projectsData.projectName === '' ? <AddProjectData /> : <UpdateProjectData />}