import React from 'react';
import Button from '@material-ui/core/Button';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <header>
        <h2>App</h2>
      </header>
      <p>环境变量：{import.meta.env.SNOWPACK_PUBLIC_IBL_ENV}</p>
      <Button>按钮</Button>
    </div>
  );
}

export default App;
