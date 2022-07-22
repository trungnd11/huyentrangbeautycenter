
export default function CustomerItem(prop: { comments: string, avatar: string, name: string, user: string | "Customer" }) {
  const { comments, avatar, name, user } = prop;
  return (
    <div className="content">
      <div className="icon">
        <i className="fa-solid fa-quote-left"></i>
      </div>
      <div className="comment">
        <p>
          { comments }
        </p>
      </div>
      <div className="avatar">
        <img
          src={avatar}
          alt=""
        />
        <div className="customer-detail">
          <h5>{ name }</h5>
          <span>{ user }</span>
        </div>
      </div>
    </div>
  );
}
