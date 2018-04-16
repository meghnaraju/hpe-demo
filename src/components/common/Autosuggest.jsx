import React,{Component} from 'react';
import ListItems from './ListItems';
import data from './../../data/commons';

class Autosuggest extends Component{
    state={
        query:'',
        results:[],
        listVisible: true
    }

    componentWillMount(){
        document.addEventListener('mousedown',this.handleClick,false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClick,false);
    }

    handleClick = (e) => {
        if(this.node.contains(e.target)){
            return;
        }
        this.handleClickOutside();
    }
    handleClickOutside = () => {
        this.setState({
            listVisible:false
        })
    }

    getInfo=() => {
        this.setState({
            results:data.searchResults
        })
    }

    handleInputChange=()=>{
        this.setState({
            query: this.search.value,
            listVisible:true
        },() => {
            if(this.state.query && this.state.query.length > 1){
                this.getInfo();
            }
            else{
                this.setState({
                    listVisible:false
                })
            }
        })
    }
    render(){
        return(
            <form ref={node => this.node = node }>
                <input placeholder="Search the HPE store" ref={input => this.search = input} onChange={this.handleInputChange}/>
                {this.state.listVisible ?
                this.state.results.length > 0 &&
                    <ListItems results={this.state.results}/>
                : null}
            </form>
        )
    }
}

export default Autosuggest;