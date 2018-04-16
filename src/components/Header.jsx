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
            // <Grid celled className='header'>
            // <Grid.Row columns={6}>
            // <Grid.Column width={1} className="home"> 
            //     <Anchor target="https://marketplace.hpe.com/" imgSrc={homeImage}/>
            // </Grid.Column>
            // <Grid.Column width={3} className="category"> 
            //     <Dropdown placeholder="Select a category" options={header.category}/>
            // </Grid.Column>
            // <Grid.Column width={4} className="deals">
            //     <Anchor target="https://www.hpe.com/us/en/solutions/smb/jrit-promotions.html" value="See New Deals" imgSrc={MenuImage} promoClass="promo" float="left"/>
            // </Grid.Column>
            // <Grid.Column width={4}>
            //  <Input icon={null}/> 
            // </Grid.Column>
            // <Grid.Column width={2}>
            //     <Anchor target="https://marketplace.hpe.com/" value="Sign In" imgSrc={signInImage}/>
            // </Grid.Column>
            // <Grid.Column width={2} className="cart">
            //     <Anchor target="https://marketplace.hpe.com/" value="Items" imgSrc={cartImage}/>
            // </Grid.Column>
            // </Grid.Row>
            // </Grid>
        )
    }
}

export default Header;