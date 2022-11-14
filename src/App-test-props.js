import './App.css';

// Component test for props
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = (props) => {
  return (
    <div className="App">
        <Person name={props.customName} lname={props.lname} age={props.age} />
    </div>
  );
}

const Test = () => {
  return (
    <div className="customApp">
      <App customName={'Isan'} lname={'Lagunzad'} age={'25'} />
    </div>
  )
}

export default Test;
