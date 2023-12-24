import React, {useState} from 'react';
import "./Profilo.css";
import Menu from './Menu';

const Profilo = () => {
  const [items, setItems] = useState(Menu)
  return (
    <section className="work container ection" id="profilo">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item">Creative</span>
        <span className="work__item">Art</span>
        <span className="work__item">Design</span>
        <span className="work__item">Branding</span>
      </div>
      <div className="work__container grid">
          {items.map((elem) => {
            const{id, image, title, category} = elem;
            return(
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="#" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Profilo
