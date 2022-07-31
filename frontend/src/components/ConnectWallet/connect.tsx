import { useStarknet, useConnectors, StarknetProvider } from '@starknet-react/core'
import { Provider } from 'starknet'
export default function ConnectWallet() {
  const { account } = useStarknet()
  const { available, connect, disconnect } = useConnectors()

  if (account) {
    return (
      <div>
        <p>Account: {account}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return (
    <div>
      {available.map((connector) => (
        <button key={connector.id()} onClick={() => connect(connector)}>
          {`Connect ${connector.name()}`}
        </button>
      ))}
    </div>
  )
}
