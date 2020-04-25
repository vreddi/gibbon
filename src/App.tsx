import React from 'react';
import './App.scss';
import FolderSummaryPane from './components/folderSummaryPane/FolderSummaryPane';
import Avatar from './components/avatar/Avatar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <FolderSummaryPane label="Football"/>
      <div className="pusher">
        <Header
          avatar={<Avatar size='medium' />}
        />
      </div>
    </div>
  );
}

export default App;
