/*
 *
 *     xiaofeng.yao     2016.8.9     tab
 *
 */
import React from 'react';
import 'css/tab.less';
import TabsControl from 'tab/TabsControl.js';

export default class AssemblyTab extends React.Component {
    render() {
        return (
            <div>
                <TabsControl>
                    <div name="星期一">
                        汉堡
                    </div>
                    <div name="星期三">
                        鸡肉卷
                    </div>
                    <div name="星期五">
                        可乐鸡翅
                    </div>
                </TabsControl>
                <br/>
                <TabsControl>
                    <div name="昨天">
                        <h1>汉堡</h1>
                    </div>
                    <div name="今天">
                        鸡肉卷
                    </div>
                    <div name="明天">
                        可乐鸡翅
                    </div>
                </TabsControl>
            </div>
        );
    }
}