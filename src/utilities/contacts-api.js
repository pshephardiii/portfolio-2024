import sendRequest from './send-request'

const BASE_URL = '/api/contacts'

export function createContact(data) {
    return sendRequest(BASE_URL, 'POST', data)
}