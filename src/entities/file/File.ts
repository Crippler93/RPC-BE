import { fileTypes } from "../types/file";

export default function buildMakeFile ({baseURL}:{baseURL: string}) {
  return function makeFile(
    type: fileTypes,
    name: string
  ) {
    const newName = `${name}_${new Date().getTime()}.${type}`
    return Object.freeze({
      getType: () => type,
      getURL: () => `${baseURL}/${newName}`,
      getName: () => newName,
    })
  }
}