import React from 'react';
import {Image} from 'semantic-ui-react';
const Anchor = (props) => {
    return(
        <a href={props.target}>
         <Image src={props.imgSrc}/> 
         <p>{props.value}</p>
        </a>
    )
}

export default Anchor;
