import Image from 'next/image';
import { FileWithPath } from 'react-dropzone';
import { useUploadFile } from './hooks/useUploadFiles';
import cx from 'classnames';

const UploadFile = () => {
  const {
    uploadFiles,
    isDisabled,
    getRootProps,
    getInputProps,
    apiResponse,
    setApiResponse,
    setUploadFiles,
  } = useUploadFile();

  const files = uploadFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleUploadClick = async () => {
    try {
      const uploaded = await fetch('/api/upload', { method: 'POST' });
      setApiResponse('Selected Files Uploaded Successfully');
      setUploadFiles([]);
    } catch (err: any) {
      setApiResponse(err.message);
    }
  };

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
          className: cx(
            'mx-8 my-4 p-1 border rounded-xl hover:cursor-pointer',
            {
              'border-gray-500': isDisabled,
              'border-blue-500': !isDisabled,
            }
          ),
        })}
      >
        <div
          className={cx(
            'flex items-center justify-center border-2 rounded-xl border-dotted border-blue-500 py-4 px-6 ',
            {
              'border-gray-500': isDisabled,
              'border-blue-500': !isDisabled,
            }
          )}
        >
          <input {...getInputProps()} />
          <Image
            src={`/assets/${isDisabled ? 'upload-gray' : 'upload'}.svg`}
            width={40}
            height={40}
            alt="upload"
            className="mr-4"
          />
          <p
            className={cx({
              'text-gray-500': isDisabled,
              'text-blue-500': !isDisabled,
            })}
          >
            Drag &amp; Drop Your Images
          </p>
        </div>
      </div>

      {files.length ? (
        <>
          <h4 className="font-semibold">Accepted files</h4>
          <ul>{files}</ul>
          <button
            className="border border-blue-300 text-blue-600 p-2 rounded-xl my-4"
            onClick={handleUploadClick}
          >
            {' '}
            Upload Files
          </button>
        </>
      ) : null}
      <p>{apiResponse}</p>
    </section>
  );
};

export default UploadFile;
