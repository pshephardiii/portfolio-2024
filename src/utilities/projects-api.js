const BASE_URL = '/api/projects'

export function indexProjects() {
    return sendRequest(BASE_URL)
}

export function showProject(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}