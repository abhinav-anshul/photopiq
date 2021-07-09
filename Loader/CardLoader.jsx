import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
  <ContentLoader width={300} height={300} {...props}>
    <rect width='300' height='300' />
  </ContentLoader>
);

export default CardLoader;
