import * as api from '../api/api';

export const getAllResources = () => async (dispatch) => {
    const resourceRes = await api.getResources();
    const resourceData = resourceRes.data;
    dispatch({ type: "ALLRESOURCES", resourceData });
}

export const addResource = (addResourceData, updateResourceData) => async (dispatch) => {
    await api.addResource(addResourceData);
    const data = await api.getResources();
    updateResourceData(data.data)
    dispatch({ type: "ADDRESOURCE", addResourceData, updateResourceData })
    return true;
}

export const editResource = (editResourceData, id, updateResourceData) => async (dispatch) => {
    await api.editResource(editResourceData, id);
    const data = await api.getResources();
    updateResourceData(data.data)
    dispatch({ type: "EDITRESOURCE" })
    return true;
}

export const deleteResource = (id, updateResourceData) => async (dispatch) => {
    await api.deleteResource(id);
    dispatch({ type: "DELETEUSER", id, updateResourceData })
    return true;
}

export const searchResource = (name) => async (dispatch) => {
    const data = await api.searchResource(name);
    dispatch({ type: "SEARCHRESOURCE" })
   // console.log(data)
    return data;
}