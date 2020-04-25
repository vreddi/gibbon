import React, { Component } from 'react';
import Props from './Folder.props';
import State from './Folder.state';

import './Folder.scss';

class Folder extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      label: props.label || "Gibbon",
      isEditMode: false
    };
  }

  getFolder = (): JSX.Element => {
    return (
      <svg className="gibbon-folder-image" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
        <path fill="#63a4ff" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
        <path fill="#1976d2" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
      </svg>
    );
  }

  getLabelField = (): JSX.Element => {
    if (this.state.isEditMode) {
      return this.getLabelInputField();
    }

    return this.getLabelTextField();
  }

  getLabelTextField = (): JSX.Element => {
    return (
      <span
        data-testid="folder-label"
        className="gibbon-folder-label-text"
        onClick={() => this.setState({ isEditMode: true })}
      >
        {this.state.label}
      </span>
    );
  }

  getLabelInputField = () => {
    return (
      <input
        data-testid="folder-input"
        autoFocus
        className="gibbon-folder-label-input"
        value={this.state.label}
        onChange={e => this.setState({ label: e.target.value })}
        onKeyPress={(event) => {
          event.preventDefault();

          if (event.key === 'Enter') {
            this.setState({isEditMode: false});
          }
        }}
      />
    );
  }

  render(): JSX.Element {
    return (
      <div data-testid="folder" className="gibbon-folder">
        {this.getFolder()}
        {this.getLabelField()}
      </div>
    );
  }
}

export default Folder;
