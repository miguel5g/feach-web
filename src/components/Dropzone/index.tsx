import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiFile, FiUpload } from 'react-icons/fi';

import { Container, Text } from './styles';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<IProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    setSelectedFileName(file.name);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Container className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="text/markdown" />

      { selectedFileUrl
        ? (
          <Text>
            <FiFile />
            {selectedFileName}
          </Text>
        )
        : (
          <Text>
            <FiUpload />
            Seu arquivo .md
          </Text>
        )}
    </Container>
  );
};

export default Dropzone;
