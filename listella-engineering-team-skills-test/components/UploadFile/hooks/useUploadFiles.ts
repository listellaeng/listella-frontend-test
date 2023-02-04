import { uploadFilesAtom } from '@/atoms/uploadFiles.atom';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const useUploadFile = () => {
  const [uploadFiles, setUploadFiles] = useAtom(uploadFilesAtom);
  const [apiResponse, setApiResponse] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: isDisabled,
    maxFiles: 5,
  });

  useEffect(() => {
    setIsDisabled(true);
    setUploadFiles(acceptedFiles);
    setIsDisabled(false);
  }, [acceptedFiles, acceptedFiles.length, setUploadFiles]);

  return {
    uploadFiles,
    setUploadFiles,
    isDisabled,
    setIsDisabled,
    acceptedFiles,
    getRootProps,
    getInputProps,
    apiResponse,
    setApiResponse,
  };
};
