import React from "react"
import addProjectIcon from "../../../../Assets/Project/addProjectIcon.svg";

function AddProjectForm(props) {
    return (
        <form className='p-5' method="dialog" onSubmit={(e) => props.editData ? props.handleEditProject(e) : props.handleAddProject(e)}
        // onSubmit={() => props.updatePopupState(2)}
        >

            <div className='d-flex'>
                <h2 className='fs-2 fw-bold mt-0 mb-4'>{props.editData ? 'Edit Project' : 'Add Project'}</h2>
                <img src={addProjectIcon} alt="" style={{ width: "250px" }} className="mx-auto" required />
            </div>


            <div className="form-group">
                <label htmlFor="Name" className="form-label">Project Name</label>
                <input type="text" className="form-control" aria-describedby="name" id="Name" name={'name'} required defaultValue={props.editData ? props.editData.projectName : ''} />
            </div>


            <div className="form-group">
                <label htmlFor="type" className="form-label">Project Type</label>
                <input type="Number" className="form-control" aria-describedby="type" id="type" name={'type'} required defaultValue={props.editData ? props.editData.projectType : ''} />

            </div>
            <div className="form-group">
                <label htmlFor="Sdate" className="form-label">Start Date</label>
                <input type="date" className="form-control" aria-describedby="startDate" id="Sdate" name={'startDate'} required defaultValue={props.editData ? (props.editData.projectStartDate).slice(0, 10) : ''} />

            </div>
            <div className="form-group">
                <label htmlFor="Edate" className="form-label">End Date</label>
                <input type="date" className="form-control" aria-describedby="endDate" id="Edate" name={'endDate'} defaultValue={props.editData ? props.editData.projectEndDate : ''} required />

            </div>
            <div className="form-group">
                <label htmlFor="clusterID" className="form-label">Cluster ID</label>
                <input type="number" className="form-control" aria-describedby="clusterID" id="clusterID" name={"clusterID"} required defaultValue={props.editData ? props.editData.clusterID : ''} />

            </div>

            <div className="form-group">
                <label htmlFor="projectDes" className="form-label">Description</label>
                <div className="form-floating">

                    <textarea className="form-control"
                        style={{ height: "100px" }} required
                        defaultValue={props.editData ? props.editData.projectDescription : ''}
                    ></textarea>
                </div>
            </div>

            {props.editData ? <button className='btn ms-auto addButton' style={{ display: "block", width: "140px" }}>Update</button>
                : <button className='btn ms-auto addButton' style={{ display: "block", width: "140px" }}>Next</button>}


            <div className="spinner-border mx-auto" role="status" id='projectAddLoader' style={{ display: "none" }}>
                <span className="sr-only">Loading...</span>
            </div>


        </form>
    )
}

export default AddProjectForm;