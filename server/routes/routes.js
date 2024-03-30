import express from 'express';
import Email from "../model/email.js"
import { saveSentMail,getEmails,saveDrafts,moveEmailsToBin,toggleStarredEmails,deleteEmails } from '../controllers/email-controller.js';

const routes = express();

routes.post('/save',saveSentMail);
routes.get("/emails/:type",getEmails);
routes.post("/savedraft",saveDrafts);
routes.post("/bin",moveEmailsToBin);
routes.post("/starred",toggleStarredEmails);
routes.delete("/delete",deleteEmails);

export default routes;