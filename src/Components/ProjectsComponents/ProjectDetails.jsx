import React, { useState } from 'react'
import { useEffect } from 'react';

function ProjectDetails(props) {
    const [projects, updateProjects] = useState(0);

    useEffect(() => {
        updateProjects(props.projectDetails.resourceData.length)
    }, [props.projectDetails.resourceData.length])

    if (projects === 0) {

        return (
            <>
                <ProjectDetail projectDetails={props.projectDetails} updateProjectPage={props.updateProjectPage} />
                <div className="text-center py-2 fs-2">
                    <p><strong>No Resources to display here!!</strong></p>
                </div>
            </>
        )
    }
    if (projects > 0) {

        return (
            <>
                <ProjectDetail projectDetails={props.projectDetails} updateProjectPage={props.updateProjectPage} />
                <div>
                    <div className="projectDetailsBottom">
                        <div className='accordion accordion-flush' id="accordionFlushExample">
                            {props.projectDetails.resourceData.map(project => (
                                <AllProjects projectDetails={project} key={project.resourceID} />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )

    }
}



function AllProjects(props) {
    useEffect(() => {

        const negArr = Array.from(document.getElementsByClassName("projectResourceBudget"))
        if (negArr) {
            for (let a of negArr) {
                if (Number(a.textContent) <= 0)
                    a.style.color = "red"
            }
        }

    }, [])

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${props.projectDetails.resourceID}`}>
                <button className="accordion-button collapsed position-relative"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${props.projectDetails.resourceID}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${props.projectDetails.resourceID}`}>

                    <p className='fs-2'>Resource ID : {props.projectDetails.resourceID}</p>

                    <p className="fs-2 d-block projectResourceBudget">{Number(props.projectDetails.resourceBudget - props.projectDetails.salary)}</p>
                </button>
            </h2>
            <div id={`flush-collapse${props.projectDetails.resourceID}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${props.projectDetails.resourceID}`}
                data-bs-parent="#accordionFlushExample">

                <div className="accordion-body rounded projectResourceDetails">
                    <p>Resource Budget : {props.projectDetails.resourceBudget}</p>
                    <p>Resource Utility : {props.projectDetails.resourceUtility}</p>
                    <p>Designation : {props.projectDetails.designation}</p>
                    <p>Start Date : {(props.projectDetails.startDate).substring(0, 10)}</p>
                    <p>End Date : {(props.projectDetails.endDate).substring(0, 10)}</p>
                    <p>Phone : {props.projectDetails.phone}</p>
                    <p>Experience : {props.projectDetails.experience}</p>
                    <p>Salary : {props.projectDetails.salary}</p>
                </div>
            </div>
        </div>)
}

function ProjectDetail(props) {
    return (
        <section className='projectDetailsHeader'>
            <button onClick={() => props.updateProjectPage(null)} className="btn">Go Back</button>
            <div className='projectDetailsHeaderDetails'>


                <div><p>PROJECT ID : <span>{props.projectDetails.projectID}</span></p> </div>
                <div><p>PROJECT NAME : <span>{props.projectDetails.projectName}</span></p> </div>
                <div><p> PROJECT DESCRIPTION : <span>{props.projectDetails.description}</span></p></div>

                <div><p>PROJECT TYPE : <span>{props.projectDetails.type}</span></p> </div>
                <div><p>TOTAL RESOURCES : <span>{props.projectDetails.resourceData ? props.projectDetails.resourceData.length : 0}</span></p> </div>
                <div><p>PROJECT BUDGET : <span>{props.projectDetails.projectBudget}</span></p> </div>

            </div>

        </section>
    )
}


export default ProjectDetails;