import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import Autosuggest from './common/Autosuggest';
import Dropdown from './common/Dropdown';
import Anchor from './common/Anchor';
import Input from './common/Input';
import '../styles/header.scss';
import header from './../data/commons';
import MenuImage from '../assets/img/deal_tag.jpg';
import homeImage from '../assets/img/Home_black.png';
import signInImage from '../assets/img/sign-in.png';
import cartImage from '../assets/img/shopping-cart-white-icon.png';



class Header extends Component{
    render(){
        let count = 0;
        return(
                <div class="row header">
                    <div class="col-md-1">
                        <Anchor target="https://marketplace.hpe.com/" imgSrc={homeImage} height="50" width="50"/>
                    </div>
                    <div class="col-md-2">
                         <Dropdown placeholder="Select a Category" options={header.category}/>
                    </div>
                    <div class="col-md-3 promo">
                        <Anchor target="https://www.hpe.com/us/en/solutions/smb/jrit-promotions.html" value="See New Deals" imgSrc={MenuImage} class="left"/>
                    </div>
                    <div class="col-md-2">
                        <Autosuggest/>
                    </div>
                    <div class="col-md-2 sign-in">
                         <Anchor target="https://marketplace.hpe.com/" value="Sign In" imgSrc={signInImage} height="35" width="30"/>
                    </div>
                    <div class="col-md-2 cart">
                        <Anchor target="https://marketplace.hpe.com/" value={count} text="Items" imgSrc={cartImage} height="30" width="30"/>
                    </div>
                </div>
        )
    }
}

export default Header;