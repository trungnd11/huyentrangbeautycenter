/* eslint-disable jsx-a11y/anchor-is-valid */

const ButtonAnimate = (prop: { title: string }) => {
  return (
    <button className="glow-on-hover" type="button">
      {prop.title}
    </button>
  );
};
export { ButtonAnimate };
