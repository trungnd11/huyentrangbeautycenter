import styled from "styled-components";

const DivLoading = styled.div`
  position: fixed;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .6s;
`;

export default function Loading({ width, height }) {
  return (
    <DivLoading className="loading-page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="30" cy="50" fill="#fd0303" r="20">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9615384615384615s"
            keyTimes="0;0.5;1"
            values="30;70;30"
            begin="-0.4807692307692307s"
          ></animate>
        </circle>
        <circle cx="70" cy="50" fill="#053df5" r="20">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9615384615384615s"
            keyTimes="0;0.5;1"
            values="30;70;30"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="30" cy="50" fill="#fd0303" r="20">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9615384615384615s"
            keyTimes="0;0.5;1"
            values="30;70;30"
            begin="-0.4807692307692307s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            values="0;0;1;1"
            calcMode="discrete"
            keyTimes="0;0.499;0.5;1"
            dur="0.9615384615384615s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </DivLoading>
  );
}
