import { FileManager } from './types'

export default function makeListFiles({
  fileModel,
  fileSystem,
}: {
  fileModel: any
  fileSystem: FileManager
}) {
  return async function listFiles(directoryName: string = 'shared') {
    const filesInDirectory = (await fileSystem.readDirectory(
      directoryName,
    )) as string[]
    const filePromises = filesInDirectory.map((fileName) =>
      fileModel.findOne({
        where: {
          name: fileName,
        },
      }),
    )
    let files = await Promise.all(filePromises)
    files = files.map((file) => ({
      name: file?.name || null,
      type: file?.type || null,
      url: file?.url || null,
    }))

    return files
  }
}
