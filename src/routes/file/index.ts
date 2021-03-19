import { Router } from 'express'

import { postFile, getFiles } from '../../controllers'
import makeExpressCallback from '../../express-callback'

const router = Router()

router.post('/', makeExpressCallback(postFile))
router.get('/:directoryName', makeExpressCallback(getFiles))

export default router
