const crypto = require('libp2p-crypto')
const PeerId = require('peer-id')
const ethers = require('ethers')

const b58 = '16Uiu2HAmN5nCWEeX4jViWAjotMpMvyn3eB7TfekqYQsn5wCVcp75'

getPid = async () => {
    // Getting Public key (Buffer) from b58 string
    const pid = await PeerId.createFromB58String(b58)
    pk = crypto.keys.unmarshalPublicKey(pid.marshalPubKey())

    // Getting EVM address from public key (Buffer) from previous step
    address = await ethers.utils.computeAddress(pk._key)
    console.log(address)
}

getPid()



