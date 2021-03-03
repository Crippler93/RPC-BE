import buildMakeFile from './File';

test('it should create a "File" object', () => {
  const makeFile = buildMakeFile({ baseURL: 'http://mysite/files' });
  const file = makeFile("png", 'companyX');
  const regExpName = /^companyX_[0-9]+.png$/
  const regExpURL = /^http:\/\/mysite\/files\/companyX_[0-9]+.png$/
  
  expect(file).toBeTruthy();
  expect(regExpName.test(file.getName())).toBeTruthy();
  expect(regExpURL.test(file.getURL())).toBeTruthy();
})