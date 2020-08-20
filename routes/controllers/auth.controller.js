class AuthController {

    currentUser(req, res) {
        res.send('Hola brandito')
    }

    signin(req, res) {
        res.send('Signin')
    }

    signout(req, res) {

    }

    signup(req, res) {

    }

}


module.exports = new AuthController();