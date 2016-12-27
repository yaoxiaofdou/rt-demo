/*
 *
 *     xiaofeng.yao     2016.8.8     Assembly-Main
 *
 */
import React from 'react';
import {
    render
} from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory
} from 'react-router';
import 'css/style.less';
import AssemblyIndex from 'index/index.js';

// 引入子组件
import MainNav from 'mainnav/mainnav.js';
import Confirm from 'popup/Confirm.js';
import FormInput from 'input/FormInput.js';
import AssemblyMask from 'mask/AssemblyMask.js';
import AssemblySelect from 'select/AssemblySelect.js';
import AssemblyTab from 'tab/AssemblyTab.js';
import AssemblySwitch from 'switch/AssemblySwitch.js';
import AssemblyCarousel from 'carousel/AssemblyCarousel.js';
import AssemblyTable from 'table/AssemblyTable.js';
import AssemblyForm from 'form/AssemblyForm.js';
// 引入 react-bootstrap 组件
import reactbootstrapbutton from 'R-bootstrap/R-Button/R-Button.js';
import reactbootstrapdialog from 'R-bootstrap/R-Dialog/R-Dialog.js';

class AssemblyMain extends React.Component {
    render() {
        return (
            <div className="Assembly-Main">
                <Router routes={routes} history={hashHistory}/>
            </div>
        );
    }
}

/// Index 是路由主模块
class Index extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <MainNav/>
                </nav>
                <div className='Assembly-article'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

/// 路由 
let routes = <Route path='/' component={Index}>
                <IndexRoute component={AssemblyIndex}/>
                <Route path='mask' component={AssemblyMask}/>
                <Route path='select' component={AssemblySelect}/>
                <Route path='tab' component={AssemblyTab}/>
                <Route path='switch' component={AssemblySwitch}/>
                <Route path='carousel' component={AssemblyCarousel}/>
                <Route path='form' component={AssemblyForm}/>
                <Route path='table' component={AssemblyTable}/>
                <Route path='input' component={FormInput}/>
                <Route path='popup' component={Confirm}/>
                <Route path='RButton' component={reactbootstrapbutton}/>
                <Route path='RDialog' component={reactbootstrapdialog}/>
             </Route>;

/// 页面渲染
render(
    <AssemblyMain/>,
    document.getElementById('Assembly-Main')
);