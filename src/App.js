import { useState, useEffect } from 'react';

import './App.css';
import CatFacts from './Components/CatFacts';
import Exchange from './Components/Exchange';


// const myFetchCalls = async() => {
//   try {
//     const response = await fetch('https://cat-fact.herokuapp.com/facts');
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


function App(props) {
  
  const [image, setImage] = useState(undefined);

  const getNewImageURL = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      return data.message;
    } catch(e) {
      console.log(e);
    }
    
    return undefined
  
  }
  
  useEffect( () => {
    const fetchData = async () => {
      const image = await getNewImageURL();
      setImage(image);
    }

    fetchData();
  }, [])

  useEffect( () => {
    console.log("Inside image use Effect");
  }, [image]);


  const setNewImage = async () => {
    const newImage = await getNewImageURL();
    console.log(newImage);
    setImage(newImage);
  } 
  return (
    <div className="App">
      <Exchange />
      {/* <CatFacts /> */}
      {/* <div>
        <button onClick={setNewImage}>Click me</button>
      </div>
       { image && <img src={image} alt="Dog"></img> } */}
    </div>
  );
}

export default App;
