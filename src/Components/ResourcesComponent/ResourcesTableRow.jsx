import React from 'react'


function ResourcesTableRow(props) {
    let userState = props.resourceData.status;
    let color = "linear-gradient(195deg,#747b8a,#495361)"
    const dialog = document.getElementsByTagName('dialog')
    if (userState) {
        //color = "linear-gradient(195deg,#66bb6a,#43a047)"
    }

    return (

        <tr className='my-1'>
            <td className='d-flex align-self-center ms-3 border-top-0'>
                <div className='me-5'>
                    <img src={props.resourceData.url ? props.resourceData.url : 'https://imgs.search.brave.com/-HKS9Ih7B4WJ6yKWuWHzzPz8tw8Sk3yViNihJsKXyzQ/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93d3cu/cHNkZ3JhcGhpY3Mu/Y29tL2ZpbGUvdXNl/ci1pY29uLmpwZw'} alt={props.resourceData.name} className="tableImage" />
                </div>
            </td>
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.name}</td>
            { /*<td className='colorgrey pt-4 pe-3'>{props.resourceData.designation}</td>*/}
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.email}</td>
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.phone}</td>
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.experience}</td>
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.salary}</td>
            <td className='colorgrey pt-4 pe-3'>{props.resourceData.skills}</td>
            { /*<td className='colorgrey pt-4 pe-3'>{props.resourceData.project}</td>*/}

            {/*<td className='colorgrey pe-3'><div className='onOffline' style={{ backgroundImage: `${color}` }}>{props.resourceData.status ? "online" : "offline"}</div></td>*/}
            <td className='colorgrey pt-4 pe-3'>{(props.resourceData.dateOfJoining).substring(0, 10)}</td>


            <td className='colorgrey pt-4'><button className='btn edit-btn' onClick={() => {
                //console.log(props.resourceData)
                props.updateUserData(props.resourceData)
                dialog[0].showModal()
            }}>Edit</button></td>

            <td className='colorgrey pt-4'><button className='btn edit-btn' onClick={() => {
                props.deleteUserData(props.resourceData.id)
                document.getElementsByTagName('dialog')[1].showModal();
            }}>Delete</button></td>
        </tr>
    )
}

export default ResourcesTableRow;

