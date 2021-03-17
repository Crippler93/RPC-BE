import fs from 'fs/promises';
import { FileManager } from './types';

export class FileSystem implements FileManager {

  constructor() {}

  async createFile(destination: string, data: string | Buffer, options: any = {}): Promise<boolean> {
    try {
      await fs.writeFile(destination, data, options)
      return true
    } catch (error) {
      return false;
    }
  }
  async deleteFile(path: string): Promise<boolean> {
    try {
      await fs.unlink(path);
      return true
    } catch (error) {
      return false
    }
  }
  async getFile(path: string, options: any = {}): Promise<Buffer> {
    return await fs.readFile(path, options)
  }
}