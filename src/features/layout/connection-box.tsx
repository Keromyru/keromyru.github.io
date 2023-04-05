import React from "react";
import SkillBubble from "../skillbubbles";
import {v4 as uuidv4} from 'uuid';

type Props = {
  blurb: string,
  skills: string[]
}

const ConnectionBox: React.FC<Props> = ({blurb, skills}) => {
  // the props for the connection boxes
  // likely to contain the data for each box
  // one general blurb two the skills to be
  // mapped into skillbubbles
  console.log(skills)

  const renderSkills = () => {
    return skills.map( (skill, index) => {
      return (
        <SkillBubble key={uuidv4()} skillBlurb={skill} />
      )
    })
  }
  
  return(
    <div className="connection-box">
      <div className="left-inner-col">
        {blurb}
      </div>
      <div className="right-inner-col">
        {
          renderSkills()
        }
      </div>
    </div>
  )

}
export default ConnectionBox;