import React from 'react';
import * as classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="64px"
        height="64px"
        viewBox="0 0 128 128"
        xmlSpace="preserve">
        <g>
          <path
            d="M122.5 69.25H96.47a33.1 33.1 0 0 0 0-10.5h26.05a5.25 5.25 0 0 1 0 10.5z"
            fill="#000000"
            role="img"
          />
          <path
            d="M112.04 97.83L89.47 84.8a33.1 33.1 0 0 0 5.25-9.1l22.57 13.03a5.25 5.25 0 0 1-5.28 9.1z"
            fill="#b2b2b2"
          />
          <path
            d="M88.68 117.35L75.65 94.78a33.1 33.1 0 0 0 9.1-5.25l13.02 22.57a5.25 5.25 0 1 1-9.1 5.25z"
            fill="#b2b2b2"
          />
          <path
            d="M58.7 122.57V96.5a33.1 33.1 0 0 0 10.5 0v26.07a5.25 5.25 0 0 1-10.5 0z"
            fill="#b2b2b2"
          />
          <path
            d="M30.1 112.1l13.04-22.57a33.1 33.1 0 0 0 9.1 5.25L39.2 117.35a5.25 5.25 0 1 1-9.1-5.25z"
            fill="#b2b2b2"
          />
          <path
            d="M10.6 88.74L33.16 75.7a33.1 33.1 0 0 0 5.25 9.1L15.88 97.83a5.25 5.25 0 1 1-5.25-9.1z"
            fill="#b2b2b2"
          />
          <path
            d="M5.37 58.75h26.06a33.1 33.1 0 0 0 0 10.5H5.37a5.25 5.25 0 0 1 0-10.5z"
            fill="#999999"
          />
          <path
            d="M15.85 30.17L38.4 43.2a33.1 33.1 0 0 0-5.24 9.1L10.6 39.25a5.25 5.25 0 1 1 5.25-9.1z"
            fill="#7f7f7f"
          />
          <path
            d="M39.2 10.65l13.03 22.57a33.1 33.1 0 0 0-9.1 5.25l-13-22.57a5.25 5.25 0 1 1 9.1-5.25z"
            fill="#666666"
          />
          <path
            d="M69.2 5.43V31.5a33.1 33.1 0 0 0-10.5 0V5.42a5.25 5.25 0 1 1 10.5 0z"
            fill="#4c4c4c"
          />
          <path
            d="M97.77 15.9L84.75 38.47a33.1 33.1 0 0 0-9.1-5.25l13.03-22.57a5.25 5.25 0 1 1 9.1 5.25z"
            fill="#333333"
          />
          <path
            d="M117.3 39.26L94.7 52.3a33.1 33.1 0 0 0-5.25-9.1l22.57-13.03a5.25 5.25 0 0 1 5.25 9.1z"
            fill="#191919"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
            calcMode="discrete"
            dur="1080ms"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}

export default Loader;
