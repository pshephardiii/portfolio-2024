const BASE_URL = '/api/projects'

export async function indexProjects() {
    try {
        const response = await fetch(BASE_URL)
        const formData = await response.json()
        return formData
    } catch (error) {
        console.error(error)
    }
}

export async function showProject(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        const formData = await response.json()
        return formData
    } catch (error) {
        console.error(error)
    }
}