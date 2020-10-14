import React from 'react'
import Moment from 'react-moment';
const SkillCard = ({name, img, date, num}) => {

  return (
    <li className="skill-set__item">
                <div className="skill-set__icon">
                  <img src={img} alt={name} />
                </div>
                <div className="skill-set__detail">
                  <div className="skill-set__meta">
                    <div className="skill-set__name">
                      <h4 className="small-title small-title--skill">
                        {name}
                      </h4>
                      <p className="skill-set__year"> <Moment to={date}
                    
            /></p>
                    </div>
                    <p className="small-title small-title--skill skill-set__high">
                      {num}<span className="skill-set__ratio">%</span>
                    </p>
                  </div>
                  <div className={`skill-set__bar p${num} js-scroll in`}></div>
                </div>
              </li>
  )
}

export default SkillCard
