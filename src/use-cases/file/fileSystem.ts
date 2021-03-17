import { FileManager } from './types'

export default class FileSystem implements FileManager {
  private fileLib: any

  constructor(fileLib: any) {
    this.fileLib = fileLib
  }

  async createFile(
    destination: string,
    data: string | Buffer,
    options: any = {}
  ): Promise<boolean> {
    try {
      await this.fileLib.writeFile(destination, data, options)
      return true
    } catch (error) {
      return false
    }
  }

  async deleteFile(path: string): Promise<boolean> {
    try {
      await this.fileLib.unlink(path)
      return true
    } catch (error) {
      return false
    }
  }

  getFile(path: string, options: any = {}): Promise<Buffer> {
    return this.fileLib.readFile(path, options)
  }
}
