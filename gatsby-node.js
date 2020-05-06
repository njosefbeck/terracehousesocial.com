const { createAccounts } = require('./massageNode')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Airtable') {
    const accounts = createAccounts(node.data)
    createNodeField({
      node,
      name: 'Accounts',
      value: accounts
    })
  }
}
