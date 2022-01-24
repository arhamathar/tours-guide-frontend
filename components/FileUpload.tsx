import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface IProps {
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
    label: string;
    className?: string;
    multi?: boolean;
}

const FileUpload: React.FC<IProps> = ({
    label,
    className,
    files,
    setFiles,
    multi = false,
}) => {
    // const [filepondFiles, setFilepondFiles] = useState([]);

    return (
        <div className={`${className}`}>
            <label className='text-base font-medium text-gray-600 text-opacity-75 mb-2'>
                {label}
            </label>
            <FilePond
                files={files}
                //@ts-ignore
                onupdatefiles={setFiles}
                allowMultiple={multi}
                maxFiles={1}
                // server={{
                //     url: `${process.env.NEXT_PUBLIC_SERVER}/api/v2/upload`,
                //     process: {
                //         onload: (response) => {
                //             const res = JSON.parse(response);
                //             setFiles([...files, { url: res.url, id: res.id }]);
                //         },
                //         onerror: (err) => {
                //             console.log(err);
                //         },
                //     },
                // }}
                name='file'
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
};

export default FileUpload;
