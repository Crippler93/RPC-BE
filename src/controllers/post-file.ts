export default function makePostFile({addFile}: {addFile: any}) {
  return async function postFile(httpRequest: any) {
    try {
      const {...fileInfo} = httpRequest.body
      const posted = await addFile({
        ...fileInfo
      })
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { posted }
      }
    } catch (e) {
      console.log(e);
      return {
        headers: {
          'Content-Type':  'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }     
    }
  }
}