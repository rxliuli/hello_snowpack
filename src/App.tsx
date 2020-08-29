import React from 'react'
import Button from '@material-ui/core/Button'
import HelloPage from './pages/hello/HelloPage'
import HelloProxyServerData from './pages/hello/HelloProxyServerData'
import HelloStyleModule from './pages/hello/HelloStyleModule'

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <header>
        <h2>App</h2>
      </header>
      <p>环境变量：{import.meta.env.SNOWPACK_PUBLIC_IBL_ENV}</p>
      <HelloPage />
      <HelloProxyServerData />
      <HelloStyleModule />
      <Button variant={'contained'} color={'primary'}>
        按钮
      </Button>
    </div>
  )
}

export default App
