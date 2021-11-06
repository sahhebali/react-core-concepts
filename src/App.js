import logo from './logo.svg';
import './App.css';

const person = {
  backgroundColor: 'red',
  color: 'white'
}
function App() {
  const nayoks = ['salman', 'sharuk khan', 'akshay kumer', 'ayman sadik', 'suvo']


  const cinemas = [
    { nayok: 'prosenjit', nayika: 'rituporna' },
    { nayok: 'jit', nayika: 'koyel' },
    { nayok: 'mithun', nayika: 'deboshree' },
    { nayok: 'ornob', nayika: 'nusrat' }

  ]
  return (
    <div className="App">
      <h1 style={person}>LEARN REACT J.S</h1>
      <br />
      <br />
      <ul>
        {
          nayoks.map(nayok => <li> {nayok}</li>)
        }
      </ul>

      <Cinemas name="www" nayika="jemee"></Cinemas>
      {
        cinemas.map(cinema => <Cinemas name={cinema.nayok} nayika={cinema.nayika}></Cinemas>)
      }

      <br />
      <br />
      <br />
      <br />




      <hr />
      {/* <Friend name={nayoks[0]} job="Student"></Friend>

      <Friend name={nayoks[1]} job="Teacher"></Friend>

      <Friend name={nayoks[2]} job="learn web-developer"></Friend> */}



    </div>
  );
}


// function Person() {
//   return (
//     <div className="persion">
//       <h1>Name : Mahammad sami</h1>
//       <h4>job : Criceter</h4>
//     </div>
//   )
// }


function Cinemas(props) {
  return (
    <div className="persion">
      <h1>Name : {props.name} </h1>
      <h4>Nayika : {props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className='persion'>
      <h1>Name :{props.name} </h1>
      <h4>Proffeson :{props.job} </h4>
    </div>
  )
}

export default App;


/* <Person name="virat kholi" job="criceter"></Person>
     <Person name="ronaldo" job="footballer"></Person>
     <Person name="sharuk khan" job="actor"></Person> */

/* <Friend name="Abdul Hanid" job="Student"></Friend>
  <Friend name="Md Insan" job="Worker"></Friend>
  <Friend name="Amanullha" job="student"></Friend> */

