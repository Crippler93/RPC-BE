export default function makeGetFiles({ listFiles }: { listFiles: any }) {
  return async function getFiles(httpRequest: any) {
    try {
      const { directoryName } = httpRequest.params
      const files = await listFiles(directoryName)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: { files },
      }
    } catch (e) {
      console.log(e)
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
