class LoginService {
    constructor(resource) {
        this._resource = resource('api/user/register{/id}')
    }
}

export default LoginService