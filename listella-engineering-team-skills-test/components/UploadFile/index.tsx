import Image from 'next/image';
import { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

const UploadFile = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: isDisabled,
    maxFiles: 5,
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="mx-auto p-16 my-32 bg-white max-w-2xl rounded-xl">
      <h3 className="text-2xl font-bold pb-1 border-b-2 border-blue-200 mb-2">
        Upload Your Photos
      </h3>
      <p className="text-sm">
        Select up to 5 high quality images to upload into our database. If your
        image is selected, a member of our team will contact you for
        attribution.
      </p>
      <div
        {...getRootProps({
          className:
            'mx-8 my-4 p-1 border border-blue-500 rounded-xl hover:cursor-pointer',
        })}
      >
        <div className="flex items-center justify-center border-2 rounded-xl border-dotted border-blue-500 py-4 px-6 ">
          <input {...getInputProps()} />
          <Image
            src={`/assets/${isDisabled ? 'upload-gray' : 'upload'}.svg`}
            width={40}
            height={40}
            alt="upload"
            className="mr-4"
          />
          <p className="text-blue-500">Drag &amp; Drop Your Images</p>
        </div>
      </div>

      {files.length ? (
        <>
          <h4 className="font-semibold">Accepted files</h4>
          <ul>{files}</ul>
        </>
      ) : null}
    </section>
  );
};

export default UploadFile;
