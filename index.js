const Web3 = require("web3-eth")
const url = require("url")
var args = process.argv.slice(2)
const ws_endpoint = args[0]

if (!ws_endpoint) {
    console.log("Please provide WS url as paramater to npm start")
    process.exit()
}

const parsed_ws_endpoint = url.parse(ws_endpoint)
const {host, protocol} = parsed_ws_endpoint
if (!protocol || !host) {
    console.log("Wrong Web Sockets endpoint provided")
    process.exit()
}

var web3 = new Web3(new Web3.providers.WebsocketProvider(ws_endpoint))

async function subscribeToBlocks() {
    web3.subscribe('newBlockHeaders', (err, block) => {
        if (err) return console.log(err);
        console.log(new Date().toISOString() + ', got new block: ' + block.number)
    })
}

subscribeToBlocks()