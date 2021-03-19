import { addFile, listFiles } from '../use-cases/file'
import makeGetFiles from './get-files'
import makePostFile from './post-file'

const postFile = makePostFile({ addFile })
const getFiles = makeGetFiles({ listFiles })

const fileController = Object.freeze({
  postFile,
  getFiles,
})

export default fileController
export { postFile, getFiles }
