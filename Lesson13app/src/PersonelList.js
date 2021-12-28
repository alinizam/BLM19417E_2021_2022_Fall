import React, { Component } from 'react'
import { connect } from 'react-redux'
class PersonelList extends Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.localPersonelList.map(item => <li key={item.firstName}> {item.firstName}</li>)}
                </ol>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
        localPersonelList: state
    }
}


export default connect(mapStateToProps)(PersonelList);