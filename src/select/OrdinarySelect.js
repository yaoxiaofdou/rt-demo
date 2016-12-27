/*
 *
 *     xiaofeng.yao     2016.8.9     select 3d
 *
 */
import React from 'react';
import 'css/style.less';
import 'css/select.less';
import $ from 'jquery';

export default class OrdinarySelect extends React.Component {
    componentDidMount() {
        // 普通的下拉列表
        var OrdinarySelectMove = function() {
            var selectDiv = $(".select-div"),
                select = $(".select-select"),
                select_ul = $(".select-ul"),
                select_li = $(".select-ul li");
            selectDiv.hover(function() {
                select_ul.animate({
                    top: "24px"
                });
                select_li.animate({
                    height: '20px'
                });
            }, function() {
                select_li.animate({
                    height: '0'
                });
                select_ul.animate({
                    top: "0"
                });
            });
            select_li.each(function() {
                var target = $(this);
                target.on("click", function() {
                    select.text(target.text());
                    select_li.animate({
                        height: "0"
                    });
                });
            })
        }
        OrdinarySelectMove();
    }
    render() {
        var optionArray = [];
        this.props.selectItems.forEach(function(item, index) {
            optionArray.push(
                <li key={item}>{item}</li>
            )
        });
        return (
            <div className="select-div">
                <div className="select-select"></div>
                <ul className="select-ul">
                    {optionArray}
                </ul>
            </div>
        )
    }
}