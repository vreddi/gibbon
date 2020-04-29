import React from 'react';
import './App.scss';
import FolderSummaryPane from './components/folderSummaryPane/FolderSummaryPane';
import Avatar from './components/avatar/Avatar';
import Header from './components/header/Header';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <div className="gibbon-content">
        <Header
          avatar={<Avatar size='medium' />}
          breadcrumb={<Breadcrumb />}
        />
      </div>
      <FolderSummaryPane label="Football"/> */}
    </div>
  );
}

export default App;
