import { useEffect, useState } from "react";
import { getAbout } from "../../api/about";
import ItemAbout from "./ItemAbout";

interface AboutType {
  title: string;
  avatar?: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

export default function About() {
  const [about, setAbout] = useState<AboutType>();
  const getAboutData = async () => {
    try {
      const about = await getAbout();
      setAbout(about.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-8 col-lg-6">
            <div className="content-about">
              <div className="heading-section ">
                <h2 className="mb-4">{ about?.title }</h2>
              </div>
              <p className="description">
                { about?.description1 }
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
