import React, { useState } from "react";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg, createdAt }) {
  const [love, setLove] = useState(() => localStorage.getItem("love") || 0);
  function handleClick(e) {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  }

  function handleLoveClick() {
    setLove((prev) => prev + 1);
    window.localStorage.setItem("love", love + 1);
  }

  return (
    <>
      <div
        className='backdrop'
        onClick={handleClick}
        style={{
          display: "flex",
          opacity: "1",
          flex: "wrap",
        }}
      >
        <img
          style={{ borderRadius: "10px" }}
          src={selectedImg}
          alt='enlarged pic'
        />
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            padding: "30px 20px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <div>
            <span
              style={{
                color: "#0761d1",
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              Uploaded :{" "}
            </span>
            <span
              style={{
                fontWeight: "700",
                fontSize: "1.2rem",
                color: "#444",
                fontStyle: "italic",
              }}
            >
              {createdAt}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px 0px",
            }}
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                onClick={handleLoveClick}
                style={{ all: "unset", cursor: "pointer" }}
                src='https://img.icons8.com/fluent/48/000000/filled-like.png'
              />
            </motion.span>
            <span style={{ padding: "0px 0px 0px 20px" }}>
              {love} people love this!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
