import { useEffect } from "react";

function TitleFunctionalComponent(props) {
  /**
   * this effect will only triggered when the component is mounted.
   */
  useEffect(() => {
    console.log('TitleFunctionalComponent useEffect(()=>{}, []) equivalent to componentDidMount');
  }, []);

  /**
   * this effect will only triggered when the component is destroyed, to used it we need to return other call back
   * into the first callback function.
   */
  useEffect(() => {
    return () => {
      console.log('TitleFunctionalComponent useEffect(()=>{ return () => {} }, []) equivalent to componentWillUnmount');
    }
  }, []);

  /**
   * this effect will be triggered for any updated on the props or state we specified into the second
   * effect parameter (array).
   */
  useEffect(() => {
    console.log('TitleFunctionalComponent useEffect(()=>{}, [title]) equivalent to componentDidUpdate (by controlled props or states)');
  }, [props.title]);
  return (
    <div className="TitleFunctionalComponent">
      This a functional component
    </div>
  );
}

export default TitleFunctionalComponent;