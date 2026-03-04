export function register(req, res) {
    let x = 1
    console.log(x)
    const myErr = new Error('My custom error!')
    myErr.status = 401
    // myErr.message = 'My custom error'
    throw(myErr)
    res.json("Register Service")
}

export function login(req, res) {
    res.json("Login Page")
}

export function getMe(req, res) {
    res.json('Get me service')
}