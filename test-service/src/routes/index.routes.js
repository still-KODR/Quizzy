import {Router} from "express"
import testRouter from "./test.routes.js"

const testRoutes = Router()

testRoutes.use("/tests",testRouter )

export default testRoutes