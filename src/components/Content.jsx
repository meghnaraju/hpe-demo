import React,{Component} from 'react';
import productImage from '../assets/img/i00037487.png';
import '../styles/content.scss';

class Content extends Component{
 render(){
     return(
         <div className="row content">
            <div className="col-md-6">
                <img src={productImage} width="354" height="278" className="left"/>
            </div>
            <div className="col-md-6">
            <h1 className="text-left">HPE IMC Startup Service</h1>
            <p className="left">PRODUCT : U8JL7E</p>
            <table class="table">
                <thead>
                <tr>
                    <th>Partner</th>
                    <th>Availability</th>
                    <th>Price(USD)</th>
                    <th>Lease Option</th>
                </tr>
                </thead>
                <tbody>
                <tr className="text-left">
                    <td>PCM</td>
                    <td>In stock</td>
                    <td>$2,339.99</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            </div>
         </div>
     )
 }
}

export default Content;