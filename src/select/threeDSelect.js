/*
 *
 *     xiaofeng.yao     2016.8.9     select 3d
 *
 */
import React from 'react';
import 'css/style.less';
import 'css/select.less';
import $ from 'jquery';

export default class threeDSelect extends React.Component {
    componentDidMount() {
        // 3D翻转的下拉列表
        var Three3DSelect = function() {
            var SelectTwo = $(".select-div-two"),
                SelectTwoTitle = $(".select-select-two"),
                SelectTwoUL = $(".select-ul-two"),
                SelectTwoLi = $(".select-ul-two li");
            SelectTwoTitle.on("mouseover", function() {
                SelectTwoUL.addClass("SelectAnimation").attr("style", "transform:rotateX(0deg);");
            });
            SelectTwoLi.each(function() {
                $(this).on("click", function() {
                    SelectTwoTitle.text($(this).text());
                    SelectTwoUL.removeClass("SelectAnimation").attr("style", " ");
                });
            });

        }
        Three3DSelect();
    }
    render() {
        var optionArray = [];
        this.props.selectItems.forEach(function(item, index) {
            optionArray.push(
                <li key={item}>{item}</li>
            )
        });
        return (
            <div className="select-div-two">
                <div className="select-select-two"></div>
                <ul className="select-ul-two">
                    {optionArray}
                </ul>
            </div>
        )
    }
}