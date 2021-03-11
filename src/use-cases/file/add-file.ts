import makeFile from '../../entities/file';
import { File } from '../../entities/types/file';

export default function makeAddFile({fileModel}: {fileModel: any}): any {
  return async function addFile(fileInfo: File) {
    const file = makeFile(fileInfo.type, fileInfo.name);
    const exists = await fileModel.findOne({
      where: {
        name: file.getName()
      }
    });
    if (exists) {
      return exists;
    }

    const createdFile = await fileModel.create({type: file.getType(), name: file.getName(), url: file.getURL()});

    return {
      name: createdFile.name,
      type: createdFile.type,
      url: createdFile.url
    }
  }
}

