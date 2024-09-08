import  express  from "express";
import userController from "../Controller/userController";
const Router=express.Router();

Router.post('/',userController.createCurrentUser);
// Router.get('/',userController.createCurrentUser);
export default Router;