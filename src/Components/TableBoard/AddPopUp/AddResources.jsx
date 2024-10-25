import React from 'react'
import "../../../Styles/addPopUp.css";
import { useDispatch } from 'react-redux';
import { addResource, editResource } from "../../../Redux/Action/resourceAction"

function AddResources(props) {
    const dispatch = useDispatch();
    function handleAddResources(e) {
        e.preventDefault();

        document.getElementsByClassName('addButton')[0].style.display = "none";
        document.getElementById('projectAddLoader').style.display = "block";
        const data = {
            "name": e.target[0].value,
            "designation": e.target[1].value,
            "email": e.target[2].value,
            "phone": Number(e.target[3].value),
            "experience": Number(e.target[4].value),
            "salary": Number(e.target[5].value),
            "dateOfJoining": e.target[6].value,
            "role": Number(e.target[7].value),
            "skills": e.target[8].value,
            "status": 1
        }


        dispatch(addResource(data, props.updateAllTableData))
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

    function handleEditResource(e) {
        e.preventDefault();

        document.getElementsByClassName('addButton')[0].style.display = "none";
        document.getElementById('projectAddLoader').style.display = "block";
        const data = {
            "name": e.target[0].value,
            "designation": e.target[1].value,
            "email": e.target[2].value,
            "phone": Number(e.target[3].value),
            "experience": Number(e.target[4].value),
            "salary": Number(e.target[5].value),
            "dateOfJoining": e.target[6].value,
            "role": Number(e.target[7].value),
            "skills": e.target[8].value,
            "status": 1
        }

        dispatch(editResource(data, props.editData.resourceID, props.updateAllTableData))
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
            <dialog className='border-0 rounded position-absolute dialogAddBox' style={{ height: "90vh" }}>
                <p className='position-absolute closeBoxBtn' onClick={() => {
                    document.getElementsByTagName('form')[0].reset();
                    const d = document.getElementsByTagName('dialog')[0]
                    d.close()
                }}>X</p>

                <form className='p-5' method="dialog" onSubmit={(e) => props.editData ? handleEditResource(e) : handleAddResources(e)}>

                    <h2 className='fs-2 fw-bold mt-0 mb-4'>{props.editData ? 'Edit Resource' : "Add Resource"}</h2>

                    <div className="form-group ">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id='name' aria-describedby="name" name={'name'} required defaultValue={props.editData ? props.editData.name : ''} />
                    </div>

                    <div className="form-group ms-md-0 col-auto">
                        <label htmlFor="Designation" className="form-label">Designation</label>
                        <input type="text" className="form-control" id="Designation" aria-describedby="designation" name={'designation'} required defaultValue={props.editData ? props.editData.designation : ''} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id='Email' aria-describedby="email" name={'email'} required defaultValue={props.editData ? props.editData.email : ''} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone number</label>
                        <input type="Number" className="form-control" aria-describedby="number" id='phone' name={'phone'} required defaultValue={props.editData ? props.editData.phone : ''} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Experience" className="form-label">Experience</label>
                        <input type="Number" id='Experience' className="form-control" aria-describedby="Experience" name={'experience'} required defaultValue={props.editData ? props.editData.experience : ''} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Salary" className="form-label">Salary</label>
                        <input type="Number" className="form-control" aria-describedby="Salary" id="Salary" name={'salary'} required defaultValue={props.editData ? props.editData.salary : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DOJ" className="form-label">DOJ</label>
                        <input type="date" className="form-control" aria-describedby="DOJ" id="DOJ" name={'dateOfJoining'} required defaultValue={props.editData ? (props.editData.dateOfJoining).slice(0, 10) : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Role" className="form-label">Role</label>
                        <input type="number" className="form-control" aria-describedby="roll" id="Role" name={"roll"} required defaultValue={props.editData ? props.editData.role : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Skills" className="form-label">Skills</label>
                        <input type="text" className="form-control" aria-describedby="Skills" id="Skills" name={"skills"} required defaultValue={props.editData ? props.editData.skills : ''} />

                    </div>
                    {props.editData ? <button className='btn ms-auto addButton' style={{ display: "block", width: "140px" }} type={"submit"}>Update</button> :
                        <button className='btn ms-auto addButton' style={{ display: "block", width: "140px" }} type={"submit"}>Save</button>}


                    <div className="spinner-border mx-auto" role="status" id='projectAddLoader' style={{ display: "none" }}>
                        <span className="sr-only">Loading...</span>
                    </div>


                </form>
            </dialog>
        </div>
    )
}

export default AddResources;