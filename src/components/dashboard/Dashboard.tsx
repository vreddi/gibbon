import React from 'react';
import FolderSummaryPane from '../folderSummaryPane/FolderSummaryPane';
import Avatar from '../avatar/Avatar';
import Header from '../header/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';

import './Dashboard.scss';

const Dashboard = () => (
  <div className="gibbon-Dashboard">
    <Header
      avatar={<Avatar size='medium' />}
      breadcrumb={<Breadcrumb />}
    />
    <FolderSummaryPane label="Football"/>
  </div>
)

export default Dashboard;