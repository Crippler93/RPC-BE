import { addFile } from '../use-cases/file';
import makePostFile from './post-file'

const postFile = makePostFile({ addFile });

const fileController = Object.freeze({
  postFile
})

export default fileController;
export {
  postFile
}