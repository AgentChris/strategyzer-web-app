import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ContentEditable from 'react-contenteditable'
import ReactTooltip from 'react-tooltip'
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

// https://www.alexandercowan.com/business-model-canvas-templates/

const CANVAS_ITEM_DATA = {
  key_partners: 'What can the company not do so it can focus on its Key Activities? <br/> For example: Lemonade Stand we would have: Municipalities',
  key_activities: 'What uniquely strategic things does the business do to deliver its proposition? <br/> For example: Lemonade Stand we would have: Making lemonade, Marketing, Selling',
  key_resources: 'What unique strategic assets must the business have to compete? <br/> For example: Lemonade Stand we would have: Ingredients, Sales people, Both & equipment',
  customer_relationship: 'How do you interact with the customer through their ‘journey’? <br/> For example: Lemonade Stand we would have: Personal',
  customer_segments: 'Who are the customers? What do they think? See? Feel? Do? <br/> For example: Lemonade Stand we would have: Park visitors',
  channels: 'How are these propositions promoted, sold and delivered? Why? Is it working? <br/>  For example: Lemonade Stand we would have: Booth sale WWW.Kellyslemonade.com',
  value_proposition: 'What’s compelling about the proposition? Why do customers buy, use? <br/>  For example: Lemonade Stand we would have: Cold tasty natural lemonade on-the-go',
  cost_structure: 'What are the business’ major cost drivers? How are they linked to revenue? <br/>  For example: Lemonade Stand we would have: Ingredients, Salaries/commission, Equipment, Flayers',
  revenue_stream: 'How does the business earn revenue from the value propositions? <br/> For example: Lemonade Stand we would have: Lemonade sales, Tips',
};

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

    ReactGA.initialize('UA-120608794-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }


  generateURL = () => {
    let savedURL = new URL(window.location);

    delete this.state['savedURL'];
    savedURL.search = encodeQueryString(this.state);
    localStorage.setItem("history_" + this.state.version, savedURL);

    this.setState({ savedURL });
  };

  changeData = (key, event) => {
    this.setState({ [key]: event.target.value }, () => {
      // update query params
      const newRelativePathQuery = window.location.pathname + '?' + encodeQueryString(this.state);
      window.history.pushState(null, '', newRelativePathQuery);
    });
    ReactGA.event({
      category: 'saveURL',
      action: 'save url'
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
        <ReactTooltip place="bottom" type="dark" effect="float" multiline />
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
            <i className="fas fa-link" data-tip={CANVAS_ITEM_DATA.key_partners} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_partners", event);
            }} html={key_partners} />
          </div>
          <section className="canvas-item key-activities">
            <span>Key Activities</span>
            <i className="fas fa-check-circle" data-tip={CANVAS_ITEM_DATA.key_activities} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_activities", event);
            }} html={key_activities} />
          </section>
          <section className="canvas-item key-resources">
            <span>Key Resources</span>
            <i className="fas fa-industry" data-tip={CANVAS_ITEM_DATA.key_resources} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("key_resources", event);
            }} html={key_resources} />
          </section>
          <div className="canvas-item customer-relationship">
            <span>Customer Relationship</span>
            <i className="fas fa-heart" data-tip={CANVAS_ITEM_DATA.customer_relationship} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("customer_relationship", event);
            }} html={customer_relationship} />
          </div>
          <div className="canvas-item customer-segments">
            <span>Customer Segments</span>
            <i className="fas fa-users" data-tip={CANVAS_ITEM_DATA.customer_segments} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("customer_segments", event);
            }} html={customer_segments} />
          </div>
          <div className="canvas-item channels">
            <span>Channels</span>
            <i className="fas fa-shuttle-van" data-tip={CANVAS_ITEM_DATA.channels} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("channels", event);
            }} html={channels} />
          </div>
          <div className="canvas-item value-proposition">
            <span>Value Proposition</span>
            <i className="fas fa-gift" data-tip={CANVAS_ITEM_DATA.value_proposition} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("value_proposition", event);
            }} html={value_proposition} />
          </div>
          <div className="canvas-item cost-structure">
            <span>Cost Structure</span>
            <i className="fas fa-tags" data-tip={CANVAS_ITEM_DATA.cost_structure} />
            <ContentEditable className="content-info" onChange={(event) => {
              this.changeData("cost_structure", event);
            }} html={cost_structure} />
          </div>
          <div className="canvas-item revenue-streams">
            <span>Revenue Streams</span>
            <i className="fas fa-money-bill-wave" data-tip={CANVAS_ITEM_DATA.revenue_stream} />
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
                                  className="contact-link" target="_blank">here</a>.
            <span className="learn-more">
              Learn more about this&nbsp;
              <a className="contact-link" target="_blank"
                 href="https://strategyzer.com/canvas/business-model-canvas">here</a>.
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
