export default function makePostFile({ addFile }: { addFile: any }) {
  return async function postFile(httpRequest: any) {
    try {
      const { file } = httpRequest.files
      const posted = await addFile(file)
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.modifiedOn).toUTCString(),
        },
        statusCode: 201,
        body: { posted },
      }
    } catch (e) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}
