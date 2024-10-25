import React from 'react'


function ProjectRowData(props) {

    return (
        <>
            <tr className='projectSelect' onClick={() => {
                props.updateProjectPage(props.projectData)
            }}>
                <td className='colorgrey pt-4 pe-3'>{props.projectData.projectID}</td>
                <td className='colorgrey pt-4 pe-3'>{props.projectData.projectName}</td>
                <td className='colorgrey pt-4 pe-3'>{props.projectData.description}</td>
                <td className='colorgrey pt-4 pe-3'>{props.projectData.type}</td>
                <td className='colorgrey pt-4 pe-3'>{props.projectData.resourceData ? props.projectData.resourceData.length : 0}
                    <button className='btn rounded mx-3' style={{ backgroundImage: "linear-gradient(195deg, #ec407a, #d81b60)", color: "white" }}
                        onClick={(e) => {
                            e.stopPropagation();
                            props.updateresourceData(props.projectData.projectID)
                            document.getElementById('addResource').showModal()
                        }}
                    >add</button></td>

                <td className='colorgrey pt-4 pe-3'>{props.projectData.projectBudget}</td>
                <td><button className='btn edit-btn' onClick={(e) => {
                    e.stopPropagation();
                    document.getElementsByTagName('dialog')[0].showModal();
                    props.changeUpdateProjectData(props.projectData)
                }}>Edit</button></td>
                <td><button className='btn edit-btn' onClick={(e) => {
                    e.stopPropagation();
                    document.getElementsByTagName('dialog')[1].showModal();
                    props.changeDeleteProjectData(props.projectData.projectID)
                }}>Delete</button></td>
            </tr>
        </>
    )
}

export default ProjectRowData;