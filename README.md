## Subscribe to Ethereum block headers

1. Install dependencies `npm install`
2. Launch `npm start <webscokets_endpoint>`, where `<webscokets_endpoint>` is websocket endpoint

Usage example:

```
subscibe-block-headers viktor$ npm start wss://mainnet.infura.io/ws

> subscribe-block-headers@1.0.0 start /Users/viktor/Documents/POANetwork/subscibe-block-headers
> node index "wss://mainnet.infura.io/ws"

2020-02-05T13:59:15.614Z, got new block: 9423049
```