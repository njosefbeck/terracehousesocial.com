const socialMediaTypes = [
  "Instagram1",
  "Instagram2",
  "Twitter",
  "Blog1",
  "Blog2",
  "Snapchat",
  "Website",
  "YouTube",
  "Facebook",
  "Tumblr",
  "Other",
]

function cleanUpKey(key) {
  return key.trim().replace(/1|2/, "")
}

exports.createAccounts = node => {
  const accounts = []
  for (const key in node) {
    if (socialMediaTypes.includes(key)) {
      const type = cleanUpKey(key)
      if (node[key]) {
        accounts.push({ type, url: node[key] })
      }
      delete node[key]
    }
  }
  return accounts
}
