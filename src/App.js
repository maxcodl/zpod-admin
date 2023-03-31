import './App.css';
import Home from './pages/Home';
import VariantHistory from './pages/variant_history';
import ComparePrompts from './pages/Compare_prompts';
import DataAnalytics from './pages/Data_analytics_and_reports';
import UserManagement from './pages/User_management';
import RegenerateStat from './pages/Regenerate_stat';
import { Route, Routes } from 'react-router-dom';

import "./css/style4.css"




function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/VariantHistory' Component={VariantHistory} />
        <Route exact path='/RegenerateStat' Component={RegenerateStat} />
        <Route exact path='/ComparePrompts' Component={ComparePrompts} />
        <Route exact path='/DataAnalytics' Component={DataAnalytics} />
        <Route exact path='/UserManagement' Component={UserManagement} />
      </Routes>
    </div>
  );
}

export default App;
