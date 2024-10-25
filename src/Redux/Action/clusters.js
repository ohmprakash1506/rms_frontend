import * as api from '../api/api';

export const getAllClusters = () => async (dispatch) => {
    const clusterData = await api.getClusters();
    const data = clusterData.data
    dispatch({ type: 'GETCLUSTER', data });
}

export const addCluster = (addClusterData, loadAllClusters) => async (dispatch) => {
    await api.addCluster(addClusterData);
    const clusterData = await api.getClusters();
    const data = clusterData.data
    loadAllClusters(data)
    dispatch({ type: 'ADDCLUSTER' });
    return true;

}

export const editCluster = (editClusterData, id, loadAllClusters) => async (dispatch) => {
    await api.editCluster(editClusterData, id);
    const clusterData = await api.getClusters();
    const data = clusterData.data
    loadAllClusters(data)
    dispatch({ type: 'EDITCLUSTER', editClusterData, id });
    return true;
}

export const deleteCluster = (id, loadAllClusters) => async (dispatch) => {
    await api.deleteCluster(id);
    dispatch({ type: 'DELETECLUSTER', id, loadAllClusters });
    return true;
}