
export const ButtonAnimate = (prop: { title: string }) => {
  return (
    <button className="glow-on-hover" type="button">
      {prop.title}
    </button>
  );
};

export const ButtonMain = (prop: { title: string; backgroundColor?: string, className?: string, click?: any }) => {
  return (
    <button
      onClick={prop.click && prop.click}
      className={`btn-main ${prop.backgroundColor} ${prop.className}`}
    >
      {prop.title}
    </button>
  );
};

