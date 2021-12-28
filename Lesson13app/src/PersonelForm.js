import React, { Component } from 'react'
import { connect } from 'react-redux'
class PersonelForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            onClick={(e) => this.props.send(e.target.value)}
                        />
                        
                    </label>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localPersonelList: state
    }
}

const mapDispachToProps = (dispatch) =>{
    return{
        send:(value)=>dispatch({type:"ADD", payload:value})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(PersonelForm);