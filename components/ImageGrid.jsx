import React, { useState, useEffect } from "react";
import getMonth from "../util/getMonth";
import useFirestore from "../hooks/useFirestore";
import useStorage from "../hooks/useStorage";
import CardLoader from "../Loader/CardLoader";

import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg, setCreatedAt }) {
  const { docs } = useFirestore("images");
  useEffect(() => {
    console.log(docs);
  });

  console.log({ docs });

  if (docs.length === 0) return <CardLoader />;

  return (
    <>
      <div className='img-grid'>
        {docs &&
          docs.map((doc) => (
            <motion.div
              className='img-wrap'
              key={doc.id}
              whileHover={{ opacity: 1 }}
              layout
              onClick={() => {
                setSelectedImg(doc.url);
                var myDate = new Date(doc.createdAt.seconds * 1000);
                let epochTo = myDate.toUTCString();
                let getMyDate = myDate.getDate();
                let getMyMonth = myDate.getMonth();
                let getMyHours = myDate.getHours();
                let getMyMinutes = myDate.getMinutes();
                let getMyImprovedMonth = getMonth(getMyMonth);
                let formattedDate =
                  getMyDate +
                  getMyImprovedMonth +
                  " at " +
                  getMyHours +
                  ":" +
                  getMyMinutes;

                setCreatedAt(formattedDate);
              }}
            >
              <img
                style={{
                  backgroundSize: "cover",
                }}
                decoding='async'
                loading='lazy'
                src={doc.url}
                alt='upload pic'
              />
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default ImageGrid;
