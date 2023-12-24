import React from 'react'

const AboutBlog = () => {
  return (
    <div>
      <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">20</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>
        
            <div className="about__box">
                <i className="about__icon icon-diamond"></i>
                <div>
                    <h3 className="about__title">30</h3>
                    <span className="about__subtitle">Certificates</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">20</h3>
                    <span className="about__subtitle">Competitions</span>
                </div>
             </div>

             <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">300</h3>
                    <span className="about__subtitle">Satisfied Client</span>
                </div>
             </div>
        </div>
    </div>

  )
}

export default AboutBlog
