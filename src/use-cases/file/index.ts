import File from '../../models/File'
import makeAddFile from './add-file'

export const addFile = makeAddFile({fileModel: File});