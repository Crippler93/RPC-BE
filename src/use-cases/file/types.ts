export type FormFile = {
  fieldName: string
  headers: {
    'content-disposition': string
    'content-type': string
  }
  name: string
  originalFilename: string
  path: string
  size: number
  type: string
}

export interface FileManager {
  createFile(
    destination: string,
    data: string | Buffer,
    options?: any,
  ): Promise<boolean>
  deleteFile(path: string): Promise<boolean>
  getFile(path: string, options?: any): Promise<Buffer>
  readDirectory(path: string): Promise<any>
}
