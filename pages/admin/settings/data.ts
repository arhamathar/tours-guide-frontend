import { useState } from 'react';

const useData = () => {
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

    const handleAcceptedFiles = (files: File[]) => {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            }),
        );
        setAttachedFiles([...files]);
    };

    const state = { attachedFiles };
    const handler = { handleAcceptedFiles };

    return { state, handler };
};

export default useData;
