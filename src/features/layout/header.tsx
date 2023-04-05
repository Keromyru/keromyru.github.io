import React from 'react';

// TODO: fix this props any later
const Header: React.FC = (props:any) => {

  return(
    <div>
      <span>
        {props.companyName}
      </span>
      
    </div>
  )
}

export default Header;