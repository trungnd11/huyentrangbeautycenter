import { useEffect, useState } from "react";
import { getAbout } from "../../api/about";
import { getExperience } from "../../api/experience";
import ItemAbout from "./ItemAbout";

interface AboutType {
  title: string;
  avatar?: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

interface ExperienceType {
  _id: string,
  name: string,
  description?: string
}

export default function About() {
  const [about, setAbout] = useState<AboutType>();
  const [experience, setExperience] = useState<ExperienceType[]>();

  const getAboutData = async () => {
    try {
      const about = await getAbout();
      setAbout(about.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const fetExperience = async () => {
    try {
      const experience = await getExperience();
      setExperience(experience.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAboutData();
    fetExperience();
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
                {
                  experience?.map(item => (
                    <ItemAbout linkTo="#" key={item._id}>
                      { item.name }
                    </ItemAbout>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
