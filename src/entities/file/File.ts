import { FormFile } from '../../use-cases/file/types'
import { supportedFileTypes } from '../types/file'

export default function buildMakeFile({ baseURL }: { baseURL: string }) {
  return function makeFile(file: FormFile) {
    if (!file || !file.fieldName || !file.type || !file.size) {
      throw new Error('File is required')
    }
    if (!supportedFileTypes.find((type) => type === file.type)) {
      throw new Error('Unsupported type of file try a different one')
    }
    const [name, extension] = file.originalFilename.split('.')
    const newName = `${name}_${new Date().getTime()}.${extension}`
    return Object.freeze({
      getType: () => file.type,
      getURL: () => `${baseURL}/${newName}`,
      getName: () => newName,
    })
  }
}
