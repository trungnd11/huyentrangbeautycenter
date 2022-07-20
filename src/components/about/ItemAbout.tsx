/* eslint-disable jsx-a11y/anchor-is-valid */

export default function ItemAbout(prop: {children?: string, linkTo: string, className?: string }) {
  return (
    <div>
      <li className={`item ${prop.className}`}>
        <a href={prop.linkTo}>
          <i className="fa-solid fa-circle-check" />
          {prop.children}
        </a>
      </li>
    </div>
  );
}
