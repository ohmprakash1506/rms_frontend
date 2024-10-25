import axios from "axios";

const API = axios.create({ baseURL: "http://13.127.196.225:8080/api" })

API.interceptors.request.use(req => {
    if (sessionStorage.getItem('userToken')) {
        req.headers.Authorization = `Bearer ${sessionStorage.getItem('userToken')}`
    }
    return req;
})

export const signIn = (formData) => API.post('/auth/login', formData)
export const verifyLink = (token) => API.post(`/auth/confirm-email/${token}`)

export const getClusters = () => API.get('/cluster')
export const addCluster = (addClusterData) => API.post('/cluster', addClusterData)
export const editCluster = (editClusterData, id) => API.put(`/cluster/${id}`, editClusterData)
export const deleteCluster = (id) => API.delete(`/cluster/${id}`)

export const getResources = () => API.get('/resource')
export const addResource = (addResourceData) => API.post('/resource', addResourceData)
export const editResource = (editResourceData, id) => API.put(`/resource/${id}`, editResourceData)
export const deleteResource = (id) => API.delete(`/resource/${id}`)
export const searchResource = (name) => API.get(`/resource/search/:${name}`)

export const getProjects = () => API.get('/project')
export const addProject = (addProjectData) => API.post('/project', addProjectData)
export const addProjectBudget = (addProjectBudgetData) => API.post('/project/add-resource-budget', addProjectBudgetData)
export const addProjectResource = (addProjectResourceData) => API.post('/project/add-resource', addProjectResourceData)
export const editProject = (editProjectData, id) => API.put(`/project/${id}`, editProjectData)
export const deleteProject = (id) => API.delete(`/project/${id}`)

