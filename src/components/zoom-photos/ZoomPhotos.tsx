import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { zoomIn, zoomInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const zoomInAnimation = keyframes`${zoomIn}`;
const zoomInImg = keyframes`${zoomInDown}`;

const ZoomDiv = styled.div`
  animation: 0.6s ${zoomInAnimation};
  position: fixed;
  background: #0000008b;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZoomImg = styled.img`
  animation: 0.6s ${zoomInImg};
`;

const ZoomPhotos = (prop: { photo: any; }, ref: Ref<unknown> | undefined) => {
  const { photo } = prop;
  const [open, setOpen] = useState<boolean>();

  const handlclose = () => {
    setOpen(false);
  }

  useImperativeHandle(
    ref,
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen]
  );
  return open ? (
    <ZoomDiv onClick={handlclose}>
      <div className="zoom-photos">
        <i
          className="fa-solid fa-xmark close"
          title="Đóng"
          onClick={handlclose}
        />
        <ZoomImg src={photo} alt="" />
      </div>
    </ZoomDiv>
  ) : null;
}

export default forwardRef(ZoomPhotos);
