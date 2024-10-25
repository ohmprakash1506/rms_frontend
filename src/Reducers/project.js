const projectReducer = (state = { allProjects: null }, action) => {
    switch (action.type) {
        case "ALLPROJECTS": {
            return { ...state, allProjects: action.projectData }
        }

        case "ADDPROJECT": {
            return state
        }

        case "EDITPROJECT": {
            return state
        }

        case "DELETEPROJECT": {
            return state
        }

        case "ADDPROJECTBUDGET":{
            return state
        }

        default: {
            return state;
        }
    }
}

export default projectReducer;