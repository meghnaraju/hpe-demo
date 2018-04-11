import React from 'react';
import {Image} from 'semantic-ui-react';
const Anchor = (props) => {
    return(
        <a href={props.target} className={props.float}>
         <Image src={props.imgSrc}/> 
         <p className={props.promoClass}>{props.value}</p>
        </a>
    )
}

export default Anchor;
