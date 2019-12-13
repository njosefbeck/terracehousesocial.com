const socialMediaTypes = [
  'instagram1',
  'instagram2',
  'twitter',
  'blog1',
  'blog2',
  'snapchat',
  'website',
  'youTube',
  'facebook',
  'tumblr',
  'other',
]

function cleanUpKey(key) {
  return key.toLowerCase().trim().replace(/1|2/, '')
}

function createAccounts(node) {
  const accounts = []
  for (const key in node) {
    if (socialMediaTypes.includes(key)) {
      const type = cleanUpKey(key);
      if (node[key]) {
        accounts.push({ type, url: node[key] })
      }
      delete node[key]
    }
  }
  return accounts
}

function createImageFilename(name) {
  if (!name) {
    return
  }
  return name.toLowerCase().trim().replace(/\"/g, "").split(' ').join('_')
}

function massageNode(node) {
  node.accounts = createAccounts(node)
  node.imageFilename = createImageFilename(node.englishName)

  return node
}

module.exports = massageNode
