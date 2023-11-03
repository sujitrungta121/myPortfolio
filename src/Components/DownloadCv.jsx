import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  height: 40px;
  padding:0.3rem;
  align-items:center;
  justify-content:center;
  background-color: ${({ color }) => (color ? color : "white")};
  color: white;
`;

function DownloadCV() {
  const handleDownload = () => {
    // Logic to initiate the download
    const cvUrl = 'your_cv_file.pdf'; // Replace with the actual path to your CV file
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'your_cv.pdf'; // You can specify the downloaded file's name
    link.click();
  };

  return (
    <div>
      <Button color="black" onClick={handleDownload}>Download My CV</Button>
    </div>
  );
}

export default DownloadCV;