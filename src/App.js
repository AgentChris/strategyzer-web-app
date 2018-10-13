import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="header">
          <h1 className="title">The Business Model Canvas</h1>
          <div className="header-container">
            <span className="header-input design-input">
            <label className="label">Designed for:</label>
            <input type="text" />
          </span>
            <span className="header-input design-input">
            <label className="label">Designed by:</label>
            <input type="text" />
          </span>
            <span className="header-input date">
            <label className="label">Date:</label>
            <input type="text" />
          </span>
            <span className="header-input version">
            <label className="label">Version:</label>
            <input type="text" />
          </span>
          </div>
        </section>
        <section className="container">
          <div className="canvas-item key-partners">
            <span>Key Partners</span>
            <div contentEditable className="content-info"></div>
          </div>
          <section className="canvas-item key-activities">
            <span>Key Activities</span>
            <div contentEditable className="content-info"></div>
          </section>
          <section className="canvas-item key-resources">
            <span>Key Resources</span>
            <div contentEditable className="content-info"></div>
          </section>
          <div className="canvas-item customer-relationship">
            <span>Customer Relationship</span>
            <div contentEditable className="content-info"></div>
          </div>
          <div className="canvas-item customer-segments">
            <span>Customer Segments</span>
            <div contentEditable className="content-info"></div>
          </div>
          <div className="canvas-item channels">
            <span>Channels</span>
            <div contentEditable className="content-info"></div>
          </div>
          <div className="canvas-item value-proposition">
            <span>Value Proposition</span>
            <div contentEditable className="content-info"></div>
          </div>
          <div className="canvas-item cost-structure">
            <span>Cost Structure</span>
            <div contentEditable className="content-info"></div>
          </div>
          <div className="canvas-item revenue-streams">
            <span>Revenue Streams</span>
            <div contentEditable className="content-info"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
