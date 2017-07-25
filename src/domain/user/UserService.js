class UserService {
    constructor(resource) {
        this._resource = resource('api/user/register')
    }

    list() {
        return this._resource
            .query()
            .then(res => res.json())
    }

    save(user) {
        return this._resource
            .post(user)
    }

    delete(id) {
        return this._resource.delete({ id })
    }
}

export default UserService