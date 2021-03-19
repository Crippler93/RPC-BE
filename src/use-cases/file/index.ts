import fs from 'fs/promises'

import File from '../../models/File'
import makeAddFile from './add-file'
import FileSystem from './fileSystem'
import makeListFiles from './list-files'

const fileSystem = new FileSystem(fs)

export const addFile = makeAddFile({
  fileModel: File,
  fileSystem,
})

export const listFiles = makeListFiles({ fileModel: File, fileSystem })
