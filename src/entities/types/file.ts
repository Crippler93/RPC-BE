export const supportedFileTypes = ['png', 'image/jpeg', 'pdf', 'svg']

type fileTypes = 'png' | 'pdf' | 'svg' | 'image/jpeg'

export type File = {
  type: fileTypes
  name: string
  url: string
}
