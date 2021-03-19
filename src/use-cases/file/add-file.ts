import path from 'path'

import makeFile from '../../entities/file'
import { FileManager, FormFile } from './types'

export default function makeAddFile({
  fileModel,
  fileSystem,
}: {
  fileModel: any
  fileSystem: FileManager
}): any {
  return async function addFile(newFile: FormFile) {
    const file = makeFile(newFile)

    const temporalFile = await fileSystem.getFile(newFile.path)
    const isFileCreated = await fileSystem.createFile(
      path.join(path.resolve('images', 'shared'), file.getName()),
      temporalFile,
    )

    if (!isFileCreated) {
      throw new Error("File couldn't be created")
    }

    const exists = await fileModel.findOne({
      where: {
        name: file.getName(),
      },
    })
    if (exists) {
      return exists
    }
    const createdFile = await fileModel.create({
      type: file.getType(),
      name: file.getName(),
      url: file.getURL(),
    })

    return {
      name: createdFile.name,
      type: createdFile.type,
      url: createdFile.url,
    }
  }
}
