import { Component } from 'react';
import './App.css';
import TitleClassComponent from './TitleClassComponent';
import TitleFunctionalComponent from './TitleFunctionalComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      showTitles: true
    };
  }

  handleToggleShowTitles() {
    this.setState((state) => {
      return { showTitles: !state.showTitles };
    });
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Comparing Life Cycle class components and Effect functional components</h1>
        <p>to check the logs from the life cycles hooks and effect hook, open the inspector developer tool into the console tab.</p>
        <hr />
        { this.state.showTitles && <TitleClassComponent title={this.state.title} /> }
        <hr />
        { this.state.showTitles && <TitleFunctionalComponent title={this.state.title} /> }
        <hr />
        <button onClick={this.handleToggleShowTitles.bind(this)}>Toggle titles</button>
        <hr />
        <label>
          update titles text
          <input defaultValue={this.state.title} onChange={this.handleChangeTitle.bind(this)} />
        </label>
      </div>
    );
  }
}

export default App;
