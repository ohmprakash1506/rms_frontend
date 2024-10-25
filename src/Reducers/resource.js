const resourceReducer = (state = { resourceData: null }, action) => {
    switch (action.type) {
        case "ALLRESOURCES": {
            return { ...state, resourceData: action.resourceData }
        }

        case "ADDRESOURCE": {
            return state
        }

        case "EDITRESOURCE": {
            return state
        }

        case "DELETEUSER": {
            const data = state.resourceData.filter((s) => s.id !== action.id);
            action.updateResourceData(data)
            return { ...state, resourceData: data }
        }

        case "ADDPROJECTRESOURCE": {
            return state;
        }

        case "SEARCHRESOURCE": {
            return state;
        }

        default:
            return state
    }
}

export default resourceReducer