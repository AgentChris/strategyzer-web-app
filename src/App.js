import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'
import './App.scss';

function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function encodeQueryString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


function getTodayString() {
  // return Example dd/mm/yyyy
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      designed_for: '',
      designed_by: '',
      date: getTodayString(),
      version: '0.0.1',
      key_partners: '',
      key_activities: '',
      key_resources: '',
      customer_relationship: '',
      customer_segments: '',
      channels: '',
      value_proposition: '',
      cost_structure: '',
      revenue_stream: '',
      savedURL: ''
    }
  }

  componentDidMount() {
    const new_state = {};

    Object.keys(this.state).forEach((key) => {
      new_state[key] = getQueryStringValue(key) || this.state[key];
    });

    delete new_state['savedURL'];
    this.setState({ ...new_state });
  }


  generateURL = () => {
    let savedURL = new URL(window.location);

    delete this.state['savedURL'];
    savedURL.search = encodeQueryString(this.state);
    localStorage.setItem("history_" + this.state.version, savedURL);

    this.setState({ savedURL });
  };

  changeData = (key, event) => {
    this.setState({ [key]: event.target.value },()=>{
      // update query params
      const newRelativePathQuery = window.location.pathname + '?' + encodeQueryString(this.state);
      window.history.pushState(null, '', newRelativePathQuery);
    });
  };

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    const {
      designed_for, key_partners, version,
      key_activities, designed_by, date,
      key_resources, savedURL,
      customer_relationship,
      customer_segments,
      channels,
      value_proposition,
      cost_structure,
      revenue_stream
    } = this.state;
    return (
      <div className="App">
        <section className="header">
          <h1 className="title">The Business Model Canvas</h1>
          <div className="header-container">
            <span className="header-input design-input">
            <label className="label">Designed for:</label>
            <input value={designed_for} type="text" onChange={(event) => {
              this.changeData("designed_for", event);
            }} />
          </span>
            <span className="header-input design-input">
            <label className="label">Designed by:</label>
            <input value={designed_by} type="text" onChange={(event) => {
              this.changeData("designed_by", event);
            }} />
          </span>
            <span className="header-input date">
            <label className="label">Date:</label>
            <input value={date} type="text" onChange={(event) => {
              this.changeData("date", event);
            }} />
          </span>
            <span className="header-input version">
            <label className="label">Version:</label>
            <input value={version} type="text" onChange={(event) => {
              this.changeData("version", event);
            }} />
          </span>
          </div>
        </section>
        <section className="container">
          <div className="canvas-item key-partners">
            <span>Key Partners</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_partners", event);
            }} html={key_partners} />
          </div>
          <section className="canvas-item key-activities">
            <span>Key Activities</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_activities", event);
            }} html={key_activities} />
          </section>
          <section className="canvas-item key-resources">
            <span>Key Resources</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_resources", event);
            }} html={key_resources} />
          </section>
          <div className="canvas-item customer-relationship">
            <span>Customer Relationship</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("customer_relationship", event);
            }} html={customer_relationship} />
          </div>
          <div className="canvas-item customer-segments">
            <span>Customer Segments</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("customer_segments", event);
            }} html={customer_segments} />
          </div>
          <div className="canvas-item channels">
            <span>Channels</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("channels", event);
            }} html={channels} />
          </div>
          <div className="canvas-item value-proposition">
            <span>Value Proposition</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("value_proposition", event);
            }} html={value_proposition} />
          </div>
          <div className="canvas-item cost-structure">
            <span>Cost Structure</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("cost_structure", event);
            }} html={cost_structure} />
          </div>
          <div className="canvas-item revenue-streams">
            <span>Revenue Streams</span>
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("revenue_stream", event);
            }} html={revenue_stream} />
          </div>
        </section>
        <section className="save-section">
          <button onClick={this.generateURL} className="btn-save">Save</button>
          {savedURL ?
            [<label>Share URL:</label>,
              <input type="text" className="save-url-input" value={savedURL} onFocus={this.handleFocus} />] : null
          }
          <div className="contact-link-container">
            You can contact me <a href="https://www.linkedin.com/in/christian-poputea-0a3b49122"
                                  className="contact-link">here</a>.
          </div>
        </section>
      </div>
    );
  }
}

export default App;
