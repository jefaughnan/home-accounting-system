import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Income from './components/Income'
import Balance from './components/Balance'
import Settings from './components/Settings'


function App() {
    const [settings_active, setSettingsActive] = useState(false);
    const [active_tab, setActiveTab] = useState('income');

    const settingsToggle = () => {
        setSettingsActive(!settings_active)
    };

    const onTabSelect = (tab) => {
        setActiveTab(tab)
    };

    return (
        <div className="wrapper">
            <Navigation onSettingsClick={settingsToggle} onTabSelect={onTabSelect} activeTab={active_tab}/>
            <Settings active={settings_active} settingsToggle={settingsToggle}/>

            <div className="content">
                <Income active={active_tab === 'income'}/>
                <Balance active={active_tab === 'balance'}/>
            </div>
        </div>
    );
}

export default App;
