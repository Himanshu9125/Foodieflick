import  express  from "express";
import{jwtCheck,jwtParse} from "../middleware/auth"
import MyUserController from "../Controller/userController";
const router=express.Router();

router.post('/',jwtCheck,MyUserController.createCurrentUser);
router.put('/',jwtCheck,jwtParse,MyUserController.updateCurrentUser);
// router.get('/',userController.createCurrentUser);
export default router;