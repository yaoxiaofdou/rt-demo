/*
 *
 *     xiaofeng.yao     2016.8.10     Assembly-Table
 *
 */
import React from 'react';

export default class AssemblyTable extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                
            </div>
        )
    }
}
AssemblyTable.defaultProps = {
    title: 'hello world',
}

// var main = React.createClass({
//     getInitaState:function(){
//         return{
//             title:'hello world',
//         }
//     },
//     render:function(){
//         return(
//             <div>
//                  <h1>{this.state.title}</h1>
//             </div>
//         )
//     }
// })