import { atom } from 'jotai';
import { FileWithPath } from 'react-dropzone';

export const uploadFilesAtom = atom<Array<FileWithPath>>([]);
