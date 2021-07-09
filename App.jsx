import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  console.log(process.env);
  return (
    <>
      <div className='App'>
        <Title />
        <UploadForm />
        <ImageGrid
          setSelectedImg={setSelectedImg}
          setCreatedAt={setCreatedAt}
        />
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            createdAt={createdAt}
          />
        )}
      </div>
    </>
  );
}

export default App;
