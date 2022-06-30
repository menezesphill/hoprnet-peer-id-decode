const { getAddressFromPeer } = require('./getAddr')

getAddr = async () => {
    const b58 = '16Uiu2HAmHmyYWNZ8qnKbqEh96XAJGvHxmGUfBSAaDdVspEuhTD6S'
    const addr = await getAddressFromPeer(b58)
    return addr
}

getAddr().then( console.log )