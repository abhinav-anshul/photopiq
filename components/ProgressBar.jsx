import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  const { url, progress, error } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <div style={{ backgroundColor: "#d3d3d3" }}>
        <div
          style={{
            height: "5px",
            backgroundColor: "#0761d1",
            width: progress + "%",
          }}
        ></div>
      </div>
    </>
  );
}
