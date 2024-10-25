import React, { useState } from 'react'
import "../../../../Styles/addPopUp.css";
import { useDispatch } from 'react-redux';
import { addProject, editProject } from "../../../../Redux/Action/projectAction";

import AddProjectBudget from './AddProjectBudget';
import AddProjectForm from './AddProjectForm';


function ProjectForm(props) {
    // const [editResourceData, setEditResourceData] = useState(null)
    // if (props.editData) {
    //     setEditResourceData([props.editData])
    // }
    return (
        <div>
            <dialog className='border-0 rounded position-absolute dialogAddBox' style={{ height: "90vh", width: "60%" }}>
                <p className='position-absolute closeBoxBtn' onClick={() => {
                    document.getElementsByTagName('form')[0].reset();
                    const d = document.getElementsByTagName('dialog')[0]
                    props.updatePopupState(1)
                    d.close()
                }}>X</p>

                {props.formData}
            </dialog>
        </div>
    )
}



function AddProject(props) {
    const dispatch = useDispatch();

    const [popupState, updatePopupState] = useState(1)
    // const [editData, setEditData] = useState(null)

    function handleAddProject(e) {
        e.preventDefault();
        const data = {
            "name": e.target[0].value,
            "type": e.target[1].value,
            "startDate": e.target[2].value,
            "endDate": e.target[3].value,
            "clusterID": e.target[4].value,
            "description": e.target[5].value,
            "status": 1
        }



        document.getElementsByClassName("addButton")[0].style.display = "none";
        document.getElementById("projectAddLoader").style.display = "block";

        dispatch(addProject(data, props.updateAllTableData))
            .then(res => {
                document.getElementsByClassName("addButton")[0].style.display = "block";
                document.getElementById("projectAddLoader").style.display = "none";
                document.getElementsByTagName('form')[0].reset();
                updatePopupState(2)
                //document.getElementsByTagName('dialog')[0].close();
            })
            .catch(e => {
                document.getElementsByTagName('dialog')[1].showModal();
                console.log("error occured \n", e)
            })
    }


    function handleEditProject(e) {
        e.preventDefault();
        const data = {
            "name": e.target[0].value,
            "type": e.target[1].value,
            "startDate": e.target[2].value,
            "endDate": e.target[3].value,
            "clusterID": e.target[4].value,
            "description": e.target[5].value,
            "status": 1
        }


        //console.log(props.editData)



        document.getElementsByClassName("addButton")[0].style.display = "none";
        document.getElementById("projectAddLoader").style.display = "block";

        console.log(data, props.editData.projectID)

        dispatch(editProject(data, props.editData.projectID, props.updateAllTableData))
            .then(res => {
                document.getElementsByClassName("addButton")[0].style.display = "block";
                document.getElementById("projectAddLoader").style.display = "none";
                document.getElementsByTagName('form')[0].reset();
                //document.getElementsByTagName('dialog')[0].close();
                updatePopupState(2)
            })
            .catch(e => {
                document.getElementsByTagName('dialog')[1].showModal();
                console.log("error occured \n", e)
            })
    }



    if (popupState === 1) {
        return <ProjectForm formData={
            <AddProjectForm
                handleAddProject={handleAddProject}
                updatePopupState={updatePopupState}
                editData={props.editData}
                handleEditProject={handleEditProject}
            />}
            updatePopupState={updatePopupState}
        />
    }

    if (popupState === 2) {
        return <ProjectForm formData={
            <AddProjectBudget
                updatePopupState={updatePopupState}
                updateAllTableData={props.updateAllTableData}
                editData={props.editData}
            />}
            updatePopupState={updatePopupState}
        />
    }

}

export default AddProject














