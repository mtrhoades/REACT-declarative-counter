// REACT imports:
import React, { useState } from 'react'; // importing a hook


// interpolate js into jsx using: {}
// function App(){
//     let [ counter, changeCounter ] = useState(1)
//     return (
//         <h1>{counter}</h1>
//     )
// }



// // interpolate and make variable global:
// function App(){
//   let [ counter, changeCounter ] = useState(1)
//   window.changeCounter = changeCounter
//       return (
//         <h1>{counter}</h1>
//     )

// }


// render counter in multiple places
function App(){
    let [ counter, changeCounter ] = useState(1) // most popular hook in react
    window.changeCounter = changeCounter
    return (
        <div>
            <h1>{counter}</h1>
            <h4>{counter}</h4>
        </div>
    )
}



// exports:
export default App;
