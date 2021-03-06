import styled from 'styled-components';

import { Component } from 'react';

const buttonSize = 30;
const radiusSize = 3;

export const ToolbarTextBoxWrapper = styled.div`
  /* width: calc((100% - 40px * ${props => props.buttonCount}) - 25px); */
  height: 30px;
  margin: 5px;
  padding: 0px;
  position: relative;
  flex-grow: 4;
  font-size: 14.5px;
  outline: none;
  transition: 0.4s;
  background-color: #${props => !props.isDarkModeOrPrivateMode ? 'eeeeee' : '252525'};
  color: ${props => !props.isDarkModeOrPrivateMode ? 'black' : 'white'};
  border-radius: ${radiusSize}px;
  box-sizing: border-box;

  &:hover, &:focus, &:focus-within {
    box-shadow: 0 5px 10px -3px rgba(0,0,0,.15), 0 0 3px rgba(0,0,0,.1);
    transition: 0.2s;
    background-color: #${props => !props.isDarkModeOrPrivateMode ? 'ffffff' : '252525'};
  }

  div {
    width: ${buttonSize}px;
    height: 100%;
    margin: 0px;
    position: absolute;
  }

  div:first-child {
    left: 0px;
    border-top-left-radius: ${radiusSize}px;
    border-bottom-left-radius: ${radiusSize}px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  div:last-child {
    right: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: ${radiusSize}px;
    border-bottom-right-radius: ${radiusSize}px;
  }
`;

export const ToolbarTextBox = styled.input.attrs(props => ({
  spellCheck: false
}))`
  width: calc(100% - (${buttonSize}px * ${props => props.buttonCount}));
  height: 100%;
  margin: 0px;
  padding: 3px 5px;
  left: ${buttonSize}px;
  right: ${buttonSize}px;
  display: block;
  position: absolute;
  box-sizing: border-box;
  outline: none;
  background: unset;
  border: none;
  color: ${props => props.isShowing ? 'inherit' : 'transparent'};
  font-family: 'Noto Sans', 'Noto Sans JP';
  cursor: initial;
  /* border-left: solid 1px #c1c1c1; */
  /* border-right: solid 1px #c1c1c1; */
`;

export const ToolbarDummyTextBox = styled.div`
  width: calc(100% - (${buttonSize}px * ${props => props.buttonCount})) !important;
  height: 100% !important;
  margin: 0px !important;
  padding: 3px 5px !important;
  left: ${buttonSize}px !important;
  right: ${buttonSize}px !important;
  display: flex;
  align-items: center;
  position: absolute !important;
  box-sizing: border-box;
  outline: none;
  background: unset;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.isShowing ? 'inherit' : 'transparent'};
  font-family: 'Noto Sans', 'Noto Sans JP';
  cursor: text;

  & span {
    cursor: text;
  }
  
  /* border-left: solid 1px #c1c1c1; */
  /* border-right: solid 1px #c1c1c1; */
`;