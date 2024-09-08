import  express  from "express";
import{jwtCheck} from "../middleware/auth"
import MyUserController from "../Controller/userController";
const router=express.Router();

router.post('/',jwtCheck,MyUserController.createCurrentUser);
// router.get('/',userController.createCurrentUser);
export default router;