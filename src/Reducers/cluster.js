const clusterReducer = (state = { allClusters: null }, action) => {
    switch (action.type) {
        case "GETCLUSTER":
            return { ...state, allClusters: action.data };

        case "ADDCLUSTER":
            return state;

        case "EDITCLUSTER":
            return state;

        case "DELETECLUSTER":
            const data = state.allClusters.filter((s) => s.id !== action.id);
            action.loadAllClusters(data)
            return { ...state, allClusters: data };


        default:
            return state
    }
}

export default clusterReducer