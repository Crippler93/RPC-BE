export type fileTypes = 'png' |'pdf' |'svg'

export type File = {
  type: fileTypes,
  name: string,
  url: string
}