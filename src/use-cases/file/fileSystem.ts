import path from 'path'
import { FileManager } from './types'

export default class FileSystem implements FileManager {
  private fileLib: any

  constructor(fileLib: any) {
    this.fileLib = fileLib
  }

  async createFile(
    destination: string,
    data: string | Buffer,
    options: any = {},
  ): Promise<boolean> {
    try {
      const directoryPath = path.resolve(destination, '..')
      await this.fileLib.mkdir(directoryPath, { recursive: true })
      await this.fileLib.writeFile(destination, data, options)
      return true
    } catch (error) {
      return false
    }
  }

  async deleteFile(destination: string): Promise<boolean> {
    try {
      await this.fileLib.unlink(destination)
      return true
    } catch (error) {
      return false
    }
  }

  getFile(destination: string, options: any = {}): Promise<Buffer> {
    return this.fileLib.readFile(destination, options)
  }
}
