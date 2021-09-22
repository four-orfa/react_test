import React, { useState } from 'react'
const App = (props) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <div>
      <p>
        現在の{name}は、{price}円です。
        <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
        <button onClick={() => setState(props)}>Reset</button>
        <input type='text' value={name} onChange={(e) => setState({ ...state, name: e.target.value })} />
      </p>
    </div>
  )
}

App.defaultProps = {
  name: 'Sample',
  price: 1000,
}

export default App
