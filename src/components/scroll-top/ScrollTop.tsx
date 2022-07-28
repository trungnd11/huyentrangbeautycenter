import { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"

const translate = keyframes`
  0% {
    transform: translateY(.1rem);
  }
  100% {
    transform: translateY(-.1rem);
  }
`;

const DivScroll = styled.div<any>`
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 2.5rem;
  right: ${(prop) => (prop.show ? "1rem" : "-10rem")};
  opacity: ${(prop) => (prop.show ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9bf77;
  border-radius: 0.8rem;
  background-color: #d9bf77;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 6;
  transition: all 1s;
  cursor: pointer;
  i {
    font-size: 1.1rem;
    animation: ${translate} 0.8s infinite linear alternate-reverse;
  }
`;
export default function ScrollTop() {
  const [show, setShow] = useState<boolean>(false)

  const handleScrollTop = useCallback(
    () => {
      window.scrollTo(0, 0);
    },
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    })
  }, [])

  return (
    <DivScroll show={show} onClick={handleScrollTop}>
      <i className="fa-solid fa-angles-up" />
    </DivScroll>
  );
}
