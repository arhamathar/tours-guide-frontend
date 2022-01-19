import { useState } from 'react';

const useData = () => {
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

    const handleAcceptedFiles = (file: File[]) => {};

    const state = { attachedFiles };
    const handler = { handleAcceptedFiles };

    return { state, handler };
};

export default useData;
