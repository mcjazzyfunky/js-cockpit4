const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,

    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  })

  config.module.rules = config.module.rules.filter(
    (it) => !it || !it.test || !it.test.toString().startsWith('/\\.css$/')
  )

  config.module.rules.push({
    test: /\.css$/,
    use: ['raw-loader']
  })

  const alias = (config.resolve && config.resolve.alias) || {}

  alias['js-cockpit$'] = path.resolve(__dirname, '../src/main/js-cockpit.ts')
  config.resolve.alias = alias
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
