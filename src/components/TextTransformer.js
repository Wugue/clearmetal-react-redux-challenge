import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addNotification } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class TextTransformer extends Component {
    state = {
        currentValue: ''
    }

    static propTypes = {
        mode: PropTypes.oneOf(['lower', 'upper']),
        transformToLowerCase: PropTypes.func.isRequired,
        transformToUpperCase: PropTypes.func.isRequired,
        transformedValue: PropTypes.string
    }

    handleChange = e => this.setState({ currentValue: e.target.value })

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)

        if (nextProps.transformedValue != '') {
            const { addNotification } = this.props.actions;
            addNotification({ text: 'loading success' });

        }
        if (nextProps.transformedValue == '' && nextProps.isLoading == false) {
            const { addNotification } = this.props.actions;
            addNotification({ text: 'server error' });
        }
        if (nextProps.error != null) {
            const { addNotification } = this.props.actions;
            addNotification({ text: nextProps.error });
        }

    }

    handleSubmit = e => {
        this.props.click()
        const { transformToLowerCase, transformToUpperCase, mode } = this.props
        const { currentValue } = this.state
        const action = mode === 'upper' ? transformToUpperCase : transformToLowerCase
        e.preventDefault()
        action(currentValue)
    }

    render() {
        const { currentValue } = this.state
        const { transformedValue } = this.props
        return (
            <div className="TextTransformer-container">
                <form onSubmit={this.handleSubmit}>
                    <input value={currentValue} type="text" placeholder="Enter text to transform" onChange={this.handleChange} />
                    <button type="submit">Transform Text</button>
                </form>
                <p>Transformed Text: {transformedValue}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addNotification }, dispatch)
});

export default connect(null, mapDispatchToProps)(TextTransformer);
