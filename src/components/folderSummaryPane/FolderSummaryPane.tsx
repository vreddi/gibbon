import React, { Component, RefObject } from 'react';
import Props from './FolderSummaryPane.props';
import State from './FolderSummaryPane.state';
import Bounce from 'bounce.js';

import './FolderSummaryPane.scss';
import FolderActivity from '../folderActivity/FolderActivity';

class FolderSummaryPane extends Component<Props, State> {
  private _sidebar: RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: false,
      isLoading: true
    };

    this.initializeBounce();
  }

  initializeBounce() {
    const splatToLeft = new Bounce();

    splatToLeft
      .translate({
        from: { x: 300, y: 0 },
        to: { x: 0, y: 0 },
        easing: 'bounce',
        duration: 600,
        bounces: 4,
        stiffness: 4,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 0.1, y: 2.3 },
        easing: 'sway',
        duration: 800,
        bounces: 4,
        stiffness: 2,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 5, y: 1 },
        easing: 'sway',
        duration: 300,
        bounces: 4,
        stiffness: 3,
      });
  
      splatToLeft.define('splat-to-left');
  }

  getHeaderSection() {
    return (
      <div className="item">
        <div className="gibbon-folderSummaryPane-header">
          <div className="gibbon-folderSummaryPane-avatar">
            <img
              alt={this.props.label}
              className="ui circular image gibbon-folderSummaryPane-avatar-image"
              src={`https://ui-avatars.com/api/?name=${this.props.label}&format=svg&background=03a9f4&color=ffffff`}
            />
            <span className="gibbon-folderSummaryPane-avatar-label">{this.props.label}</span>
          </div>

          <div className="gibbon-folderSummaryPane-tags">
            <a className="ui image label">
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/soccer-ball_26bd.png" />
              Sports
            </a>
            <a className="ui image label">
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/imp_1f47f.png" />
              Manchester United
            </a>
          </div>
        </div>
      </div>
    );
  }

  getDetailsSection() {
    return (
      <div className="item">
        <div className="ui three column grid gibbon-folderSummaryPane-details">
          <div className="column">
            <div className="header">Videos</div>
            <p>23</p>
          </div>
          <div className="column">
            <div className="header">Play time</div>
            <p>5h 20m</p>
          </div>
          <div className="column">
            <div className="header">Last updated</div>
            <p>2 days ago</p>
          </div>
          <div className="column">
            <div className="header">Created on</div>
            <p>15th Jan 2019</p>
          </div>
        </div>
      </div>

      // <div className="item item gibbon-folderSummaryPane-details">
      //   <div className="content">
      //     <div className="ui placeholder">
      //       <div className="paragraph">
      //         <div className="medium line"></div>
      //         <div className="short line"></div>
      //         <div className="ui circlular image"></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  getHistorySection() {
    return (
      <div className="item">
        <div className="gibbon-folderSummaryPane-history">
          <FolderActivity />
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   this._sidebar.current.sidebar('toggle')
  // }
  render(): JSX.Element {
    return (
      <div ref={this._sidebar} className="gibbon-folderSummaryPane">
        <div className="ui relaxed divided list">
          {this.getHeaderSection()}
          {this.getDetailsSection()}
          {this.getHistorySection()}
        </div>
      </div>
    );
  }
}

export default FolderSummaryPane;
