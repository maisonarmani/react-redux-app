import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// user defined
import  {addListItem} from "../actions/actions-creators";
import ListItem from "../components/list-item";

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((v,k) => {
                        return (<ListItem key={k} ref={k}>{v}</ListItem>)
                    })}
                </ul>
                <input onChange={input =>{this.input = input.target.value; }}/>
                <button onClick={()=>{
                    if(this.input != "") this.props.addItem(this.input)
                }}>Add Item</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        items: state.listReducer
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addItem:bindActionCreators(addListItem, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null,)(List)