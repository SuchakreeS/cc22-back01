import "dotenv/config"
import express from "express"
import authRoute from "./routes/auth.route.js"
import notfound from "./middlewares/notfound.js"
import err from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json())

// REST api service
app.use('/api/auth', authRoute)


//Not found middleware
app.use(notfound)


// Error middleware : ต้องมี4 parameters เสมอ
app.use(err)


const port = process.env.PORT

app.listen(port, () => console.log("server is ready on", port))
