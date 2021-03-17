import File from '../../models/File'
import makeAddFile from './add-file'
import { FileSystem } from './fileSystem'

export const addFile = makeAddFile({fileModel: File, fileSystem: new FileSystem()});