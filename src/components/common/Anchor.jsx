import React from 'react';
import {Image} from 'semantic-ui-react';
const Anchor = (props) => {
    return(
        <a href={props.target} className={props.class}>
         <Image src={props.imgSrc} height={props.height} width={props.width}/> 
         <p className={props.promoClass}>{props.value} {props.text}</p>
        </a>
    )
}

export default Anchor;
