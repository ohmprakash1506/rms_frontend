import * as api from '../api/api';

export const getAllProjects = () => async (dispatch) => {
    const projectRes = await api.getProjects();
    const projectData = projectRes.data;
    dispatch({ type: "ALLPROJECTS", projectData });
}

export const addProject = (addProjectData, updateProjectData) => async (dispatch) => {
    await api.addProject(addProjectData);
    const data = await api.getProjects();
    updateProjectData(data.data)
    dispatch({ type: "ADDPROJECT", addProjectData })
    return true;

}


export const editProject = (editProjectData, id, updateProjectData) => async (dispatch) => {
    await api.editProject(editProjectData, id);
    const data = await api.getProjects();
    updateProjectData(data.data)
    dispatch({ type: "EDITPROJECT" })
    return true;
}

export const deleteProject = (id, updateProjectData) => async (dispatch) => {
    await api.deleteProject(id);
    const data = await api.getProjects();
    updateProjectData(data.data)
    dispatch({ type: "DELETEPROJECT" })
    return true;
}

export const addprojectResource = (addProjectResourceData, updateProjectData) => async (dispatch) => {
    ///console.log(addProjectResourceData)
    const d = await api.addProjectResource(addProjectResourceData);
    const data = await api.getProjects();
    console.log(d)
    updateProjectData(data.data)
    dispatch({ type: "ADDPROJECTRESOURCE" })
    return true;
}

export const addprojectBudget = (addProjectBudgetData, updateAllTableData) => async (dispatch) => {

    const res = await api.addProjectBudget(addProjectBudgetData);
    const data = await api.getProjects();
    console.log(data)
    updateAllTableData(data.data)
    dispatch({ type: "ADDPROJECTBUDGET" })
    return true;
}