export default function (req, res) {
    res.status(404)
    res.json({
        error: 'Path not found'
    })
}