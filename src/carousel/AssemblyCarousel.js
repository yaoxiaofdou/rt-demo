/*
 *
 *     xiaofeng.yao     2016.8.10     Assembly-Carousel
 *
 */
import React from 'react';
import 'css/carousel.less';
import RarouselImg_1 from 'images/carousel_1.jpg';
import RarouselImg_2 from 'images/carousel_2.png';
import RarouselImg_3 from 'images/carousel_3.jpg';
import RarouselImg_4 from 'images/carousel_4.png';
import CarouselControl from 'carousel/CarouselControl.js';

export default class AssemblyCarousel extends React.Component {
    render() {
        return (
            <div>
                <CarouselControl ImgNumber={this.props.ImgNumber} ImgTime={this.props.ImgTime}>
                    <img src={RarouselImg_1} alt="图片" name="1"/>
                    <img src={RarouselImg_2} alt="图片" name="2"/>
                    <img src={RarouselImg_3} alt="图片" name="3"/>
                    <img src={RarouselImg_4} alt="图片" name="4"/>
                </CarouselControl>
            </div>
        )
    }
}
AssemblyCarousel.defaultProps = {
    ImgNumber: 4,
    ImgTime: 3000,
}