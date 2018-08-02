import React, { Component } from 'react'
import TextTransformer from '../containers/TextTransformer'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Notifications from "../components/Notifications";
import { addNotification } from "../store/actions";

class UpperCase extends Component {
	constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { addNotification } = this.props.actions;
      addNotification({ text: "loading text" });
    }

    render() {
        return (
            <div className="UpperCase-container">
                <h2>Let's uppercase some stuff</h2>
                <TextTransformer mode="upper" click = {() => this.handleClick()}/>
                <Notifications />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addNotification }, dispatch)
});

export default connect(null, mapDispatchToProps)(UpperCase);