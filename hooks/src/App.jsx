// import { useEffect, useState , useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const value = useRef(0)


// useEffect(()=>{
//   value.current = value.current + 1
// })


//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         +1
//       </button>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count - 1)}>-1</button>

//       <h3>the component is rendered this time {value.current} </h3>
//     </>
//   )
// }

// export default App




//now working on use memo ========================================================
import { useEffect, useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const value = useRef(0)

``
useEffect(()=>{
  value.current = value.current + 1
})


  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>-1</button>

      <h3>the component is rendered this time {value.current} </h3>
    </>
  )
}

export default App