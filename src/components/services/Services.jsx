import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Development",
    description:
      "Web development involves the creation and maintenance of websites and web applications. It encompasses a range of tasks, from designing the layout and visual elements of a site to coding its functionality using programming languages like HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    image: Image1,
    title: "Flim Maker",
    description:
      "Filmmakers harness the power of visual and auditory elements, leveraging cinematography, sound design, and editing techniques to evoke emotions, convey messages, and provoke thought. Their passion for storytelling drives them to explore diverse genres and styles.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Photography is the art of capturing moments and emotions through the lens of a camera. It goes beyond merely taking pictures, delving into the realm of storytelling, expression, and visual communication.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
