import React, { Component } from 'react'
import error from './assests/ErrorBoundary.gif'

class ErrorUi extends Component {

    constructor(props){
        super(props)

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError : true
        }
    }

  render() {
    if(this.state.hasError){
        return (
        <><center>
        <img src={error} alt="" width="1000" height="700" />
        </center>
        </>
        )
    }
    return this.props.children
  }
}

export default ErrorUi