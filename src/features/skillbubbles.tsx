import React from 'react';

// fix the any typing here or just make it better 
const SkillBubble = (skillBlurb:any) => {
  // the skill to be displayed
  console.log(skillBlurb)
  let skillblurb = skillBlurb.skillBlurb;
  return(
    <div className='skillBubble'>
      {skillblurb}
    </div>
  )
}
export default SkillBubble;