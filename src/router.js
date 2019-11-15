import React, { Component } from 'react'
import {Route} from "react-router-dom"
import lcy_search from "./lcy_search"



export class router extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div className="one">
                {/* 出口路径 */}
                <Route path="/lcy_search" component={lcy_search} />
            </div>
        )
    }
}

export default router
