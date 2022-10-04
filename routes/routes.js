const userRouter=require('./users')
const router=express.Router()

app.use(`/users`, userRouter)


export default router