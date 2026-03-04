export default function err(err, req, res, next) {
    console.log('!!! ERROR !!!')
    console.log(err)

    res.status(err.status || 500)
    res.json({ err: err.message})
}