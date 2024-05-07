const BASE_URL = '/api/contacts'

export async function createContact(data) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const formData = await response.json()
        return formData
    } catch (error) {
        console.error(error)
    }
}