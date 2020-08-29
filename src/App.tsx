import React from 'react'

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <header>
        <h2>App</h2>
      </header>
      <p>env：{import.meta.env.SNOWPACK_PUBLIC_IBL_ENV}</p>
    </div>
  )
}

export default App
