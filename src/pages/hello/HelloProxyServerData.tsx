import React, { useState, useEffect } from 'react'

const HelloProxyServerData: React.FC = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    ;(async () => {
      const resp = await fetch(
        'https://ym.ibingli.cn/api/common/install/package/get',
        {
          body:
            '{"secret":"3.14","id":"undefined_1598712828136","data":{"type":2},"sign":"cc38c5ac086a3fc49c4759cb2b897722","client":{"caller":"webcaller","os":"web"},"encrypt":"md5"}',
          method: 'POST',
        },
      )
      const data = await resp.json()
      setData(data)
    })()
  }, [])
  return (
    <div>
      <h2>HelloProxyServerData</h2>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}

export default HelloProxyServerData
