import ItemAbout from "./ItemAbout";

export default function About() {

  return (
    <div className="about">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-8 col-lg-6">
            <div className="content-about">
              <div className="heading-section ">
                <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
              </div>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                ipsa amet quidem. Ab quos officia beatae dignissimos fugiat
                blanditiis omnis ratione! Sed voluptates officiis sapiente odit
                quo temporibus nemo exercitationem?
              </p>
              <ul className="mt-5 lists-item">
                <ItemAbout linkTo="#">
                  Spa &amp; Massage boosts brain power
                </ItemAbout>
                <ItemAbout linkTo="#">
                  Spa &amp; Massage helps you to breathe better
                </ItemAbout>
                <ItemAbout linkTo="#">
                  Spa &amp; Massage improves your strength
                </ItemAbout>
                <ItemAbout linkTo="#">
                  Spa &amp; Massage helps you to focus
                </ItemAbout>
                <ItemAbout linkTo="#">
                  Spa &amp; Massage helps give meaning to your day
                </ItemAbout>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
