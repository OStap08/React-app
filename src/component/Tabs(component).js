import React,{Component} from 'react';
import classNames from 'classnames';

import '../style/Tabs.css';

class Tabs extends Component{
    onTabClose(e, i){
        e.stopPropagation();
        this.props.onTabClose(i);
    }

    render(){
        const {addTabTitle, selectedTab, children, tabs, onAddTab, onTabSelect } = this.props;
        return(
            <section>
                <ul className='navTabsContainer'>
                    {
                        tabs.map((tab, i) => {
                            return <li className={classNames('tab',{
                                'activeTab': i === selectedTab
                            })}
                                       key={`tab-${i}`}
                                       onClick={()=>onTabSelect(i)}
                            >
                                {tab.title}
                                <span className='closeTab' onClick={e => this.onTabClose(e, i)}> Close </span>
                            </li>
                        })
                    }
                    <li className='tab' onClick={onAddTab}>
                        <span className='openTab'>{addTabTitle}</span>
                    </li>
                </ul>
                <div className='tabsBody'>
                    {children}
                </div>
            </section>
        )
    }
}

export default Tabs;