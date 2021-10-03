import { Component } from 'react';

class TitleClassComponent extends Component {

  /**
   * this life cycle hooks helps us to tell our component if we want to avoid
   * the rerendering in some scenarios, for example the props didn't change.
   * @param {*} nextProps next props to be rendered
   * @param {*} nextState next state to be rendered
   * @returns 
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps && nextProps.title !== this.props.title) {
      return true;
    }
    return false;
  }

  /**
   * this life cycle hook is triggered once when the component is mounted
   */
  componentDidMount() {
    console.log('TitleClassComponent componentDidMount');
  }

  /**
   * this life cycle hook is triggered every time the component is rerendered by
   * props or state changes.
   */
  componentDidUpdate() {
    console.log('TitleClassComponent componentDidUpdate');
  }

  /**
   * this life cycle hook is triggered when the component will be destroyed.
   */
  componentWillUnmount() {
    console.log('TitleClassComponent componentWillUnmount');
  }

  render() {
    return (
      <div className="TitleClassComponent">
        This a class component
      </div>
    );
  }
}

export default TitleClassComponent;