module.exports = {
  /**
   * Customize Webpack config
   * {@link https://github.com/preactjs/preact-cli#webpack}
   */
  webpack(config, { isServer }) {
    if (!isServer && config.mode === 'production') {
      config.output.publicPath = '/type-scale/'
    }

    return config
  }
}
