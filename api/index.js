
export default {
    auth: {
        me: (axios) => axios.get('auth/me'),
        login: (axios, data) => axios.post('auth/login', data),
        register: (axios, data) => axios.post('auth/register', data)
    },
    checks: {
        fetch: (axios) => axios.get('data/checks'),
        create: (axios, data) => axios.post('data/checks', data),
        log: (axios, data) => axios.get('data/checks/log/' + data.id)
    }
}