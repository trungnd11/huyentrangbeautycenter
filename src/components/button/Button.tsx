
export const ButtonAnimate = (prop: { title: string }) => {
  return (
    <button className="glow-on-hover" type="button">
      {prop.title}
    </button>
  );
};

export const ButtonMain = (prop: {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  backgroundColor?: string;
  className?: string;
  click?: any;
  style?: any
}) => {
  return (
    <button
      style={prop.style}
      type={prop.type}
      onClick={prop.click && prop.click}
      className={`btn-main ${prop.backgroundColor} ${prop.className}`}
    >
      {prop.title}
    </button>
  );
};

