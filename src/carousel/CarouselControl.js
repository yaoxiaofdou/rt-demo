/*
 *
 *     xiaofeng.yao     2016.8.10     Assembly-Carousel-Control
 *
 */
import React from 'react';
import 'css/carousel.less';

export default class CarouselControl extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        }
    }
    check_title_index(index) {
        return index === this.state.currentIndex ? "Carousel_title active" : "Carousel_title";
    }
    check_item_index(index) {
        return index === this.state.currentIndex ? "Carousel_item show" : "Carousel_item";
    }
    componentDidMount() {
        let i = 0,
            ImgNumber = this.props.ImgNumber, // IMG数量
            ImgTime = this.props.ImgTime; // 轮播时间
        this.timer = setInterval(function() {
            i++;
            if (i > (ImgNumber - 1)) {
                i = 0;
            }
            this.setState({
                currentIndex: i,
            });
        }.bind(this), ImgTime);
    }
    componentWillUnmount() {
        // 销毁定时器
        clearInterval(this.timer);
    }
    render() {
        return (
            <div className="Carousel_Control_wrap">
                {/*动态生成 Carousel 图片*/}
                <div className="Carousel_item_wrap">
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
                {/*动态生成 Carousel 导航*/}
                <div className="Carousel_title_wrap">
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
            </div>
        )
    }
}