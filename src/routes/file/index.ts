import { Router } from 'express';

import { postFile } from '../../controllers';
import makeExpressCallback from '../../express-callback';


const router = Router();

router.post('/', makeExpressCallback(postFile));

export default router;