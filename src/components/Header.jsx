import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
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
        return(
            <Grid celled className='header'>
            <Grid.Row columns={6}>
            <Grid.Column width={1}> 
                <Anchor target="https://marketplace.hpe.com/" imgSrc={homeImage}/>
            </Grid.Column>
            <Grid.Column width={3}> 
                <Dropdown placeholder="Select a category" options={header.category}/>
            </Grid.Column>
            <Grid.Column width={4}>
                <Anchor target="https://www.hpe.com/us/en/solutions/smb/jrit-promotions.html" value="See new deals" imgSrc={MenuImage} promoClass="promo" float="left"/>
            </Grid.Column>
            <Grid.Column width={4}>
             <Input icon={null}/> 
            </Grid.Column>
            <Grid.Column width={2}>
                <Anchor target="https://marketplace.hpe.com/" value="Sign In" imgSrc={signInImage}/>
            </Grid.Column>
            <Grid.Column width={2}>
                <Anchor target="https://marketplace.hpe.com/" value="Items" imgSrc={cartImage}/>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        )
    }
}

export default Header;