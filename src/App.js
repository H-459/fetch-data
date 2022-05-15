import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// const myFetchCalls = async() => {
//   try {
//     const response = await fetch('https://cat-fact.hejijirokuapp.com/facts');
//     const data = await response.json();
  
//     console.log(data);
//   } catch(e) {
//     console.log("Error = " + e);
//   }
// }

//myFetchCalls();



// const mySetTimeout = ( timeout ) => {
//   return new Promise((resolve, reject) => {
//     if (timeout < 0) {
//       reject("Timeout value is negative");
//       return;
//     }

//     setTimeout(() => { resolve("success") }, timeout );
//   });
// }

// // mySetTimeout(-1000)
// //   .then(() => {console.log("timer expired")})
// //   .catch(() => {console.log("error in timer")})

// const myFunction = async () => {
//   console.log("Function start");
//   try {
//     const response = await mySetTimeout(-1000);
//   } catch(e) {
//     console.log(e);

//   }
//   // console.log(response);
// }

//   myFunction();
//   // returnPromise()
//   // .then(data => console.log("data = " + data))
//   // .catch(err => console.log("error = " + err));


function App() {
  
  const [image, setImage] = useState(undefined);

  const getNewImageURL = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
    
  }
  
  const setNewImage = async () => {
    const newImage = await getNewImageURL();
    console.log(newImage);
    setImage(newImage);
  } 
  return (
    <div className="App">
      <div>
        <button onClick={setNewImage}>Click me</button>
      </div>
      { image && <img src={image} alt="Dog"></img> }
    </div>
  );
}

export default App;
