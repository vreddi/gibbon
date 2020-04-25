import React from 'react';
import ReactDOM from 'react-dom';
import Folder from './Folder';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import "@testing-library/jest-dom/extend-expect";

describe('📁 Folder', () => {

  afterEach(() => {
    cleanup();
  })

  test('can render', () => {
    ReactDOM.render(<Folder />, document.createElement('div'));
  });

  test('contains correct elements', () => {
    const { getByTestId } = render(<Folder label="Football highlights" />)

    expect(getByTestId("folder")).toBeDefined();
    expect(getByTestId("folder-label")).toBeDefined();

    expect(getByTestId("folder-label")).toHaveTextContent("Football highlights");
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Folder label="Football highlights" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})