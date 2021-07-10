import React from "react";

function Blob() {
  return (
    <div>
      <svg
        width='300px'
        // height='50px'
        viewBox='25 70 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <style></style>

        <path
          fill='#FF0066'
          d='M19.5,1.4C24.7,9.8,28.1,26.5,15.3,40.3C2.6,54.1,-26.3,64.9,-46.5,52.9C-66.8,40.8,-78.5,5.7,-69.3,-8C-60.1,-21.8,-30.1,-14.3,-11.5,-10.6C7.1,-6.8,14.3,-6.9,19.5,1.4Z'
          transform='translate(100 100)'
        />
        <text
          font-size='2rem'
          z-index='999'
          fill='white'
          font-size='1.2rem'
          x='35'
          y='120'
          class='small'
        >
          Photopiq
        </text>
      </svg>
    </div>
  );
}

export default Blob;
