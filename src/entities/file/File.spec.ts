import { FormFile } from '../../use-cases/file/types'
import buildMakeFile from './File'

test('it should create a "File" object', () => {
  const makeFile = buildMakeFile({ baseURL: 'http://mysite/files' })
  const formFile: FormFile = {
    fieldName: 'file',
    headers: {
      'content-disposition': 'form-data; name="file"; filename="test.jpg"',
      'content-type': 'image/jpeg',
    },
    name: 'test.jpg',
    originalFilename: 'test.jpg',
    path: 'path/of/file/test.jpg',
    size: 400,
    type: 'image/jpeg',
  }
  const file = makeFile(formFile)
  const regExpName = /^test_[0-9]+.jpg$/
  const regExpURL = /^http:\/\/mysite\/files\/test_[0-9]+.jpg$/

  expect(file).toBeTruthy()
  expect(regExpName.test(file.getName())).toBeTruthy()
  expect(regExpURL.test(file.getURL())).toBeTruthy()
  expect(file.getType()).toBe('image/jpeg')
})
