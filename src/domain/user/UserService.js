class UserService {
    constructor(resource) {
        this._resource = resource('api/user{/id}')
    }

    list() {
        return this._resource
            .query()
            .then(res => res.json())
    }

    save(user) {
        return this._resource
            .save(user)
    }

    show(id) {
        return this._resource
            .query({ id })
            .then(res => res.json())
    }

    delete(id) {
        return this._resource
            .delete({ id })
    }
}

export default UserService