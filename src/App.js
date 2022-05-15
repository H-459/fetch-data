import logo from './logo.svg';
import './App.css';

// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => {

//   })
//   .catch(err => {
//   })

const mySetTimeout = ( timeout ) => {
  return new Promise((resolve, reject) => {

  });
}

mySetTimeout(1000)
  .then(() => {console.log("timer expired")})
  .catch(() => {console.log("error in timer")})

  const returnPromise = () => {
    let myPromise = new Promise((resolve, reject) => {
      reject(10);
    })

    return myPromise;
  } 

  returnPromise()
  .then(data => console.log("data = " + data))
  .catch(err => console.log("error = " + err));


function App() {

  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
