import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('layoutStore')
@observer
class Home extends Component {

    onClick = () => {
        window.location.href = "#/app";
        // window.location.reload();
    }

    render() {
        const { layoutStore } = this.props
        console.log("layoutStore: ", layoutStore.data.toJS())
        return (
            <div className="dist-home" onClick={() => this.onClick()}>
                <h1>这是Home111</h1>
            </div>
        )
    }
}

export default Home
