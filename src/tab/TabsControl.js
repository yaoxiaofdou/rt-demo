/*
 *
 *     xiaofeng.yao     2016.8.10     TabControl
 *
 */
import React from 'react';
import 'css/tab.less';

export default class TabsControl extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        }
    }
    check_title_index(index) {
        return index === this.state.currentIndex ? "Tab_title active" : "Tab_title";
    }
    check_item_index(index) {
        return index === this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }
    render() {
        let _this = this;
        return (
            <div className="Tab_Control_wrap">
                {/*动态生成tab导航*/}
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index)=>{
                            return(
                                /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                                <div onClick={()=>{this.setState({currentIndex:index})}} className={this.check_title_index(index)}>
                                    {element.props.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Tab_item_wrap">
                    {
                        React.Children.map(this.props.children,(element,index)=>{
                            return(
                                <div className={this.check_item_index(index)}>
                                    {element}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}