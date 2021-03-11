import { fileTypes } from "../types/file";

export default function buildMakeFile ({baseURL}:{baseURL: string}) {
  return function makeFile(
    type: fileTypes,
    name: string
  ) {
    if (!type) {
      throw new Error('Type is required');
    }
    if (!name) {
      throw new Error('Name is required');
    }
    const newName = `${name}_${new Date().getTime()}.${type}`
    return Object.freeze({
      getType: () => type,
      getURL: () => `${baseURL}/${newName}`,
      getName: () => newName,
    })
  }
}