import fs from 'fs/promises'

import File from '../../models/File'
import makeAddFile from './add-file'
import FileSystem from './fileSystem'

export default makeAddFile({
  fileModel: File,
  fileSystem: new FileSystem(fs),
})
