import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    console.log("////change");
    console.log(e.target.files[0]);
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file of type png or jpg");
    }
  };

  return (
    <>
      <form>
        <label>
          <input type='file' onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className='output'>
          {error ? <div className='error'>{error}</div> : null}
          {file ? <div>{file.name}</div> : null}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
}

export default UploadForm;
