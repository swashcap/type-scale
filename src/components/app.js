/** @jsx h */
import { h, Component } from 'preact'

import Controls from './controls'
import Footer from './footer'
import Header from './header'
import Preview from './preview'
import scalers from '../helpers/scalers'

export default class App extends Component {
  state = {
    items: [{
      coefficient: 1,
      count: 6,
      fontFamily: 'sans-serif',
      scale: 'classic',
      seed: 12
    }],
    settings: {
      displayUnit: 'px'
    }
  };

  changeStateItem = (index, key, value) => {
    this.setState({
      items: this.state.items.map((item, i) => (
        i === index
          ? {
            ...item,
            [key]: value
          }
          : item
      ))
    })
  };

  handleCoefficientChange = (index, value) => {
    this.changeStateItem(index, 'coefficient', value)
  };

  handleCountChange = (index, value) => {
    this.changeStateItem(index, 'count', value)
  };

  handleDisplayUnitChange = (event) => {
    this.setState({
      settings: {
        displayUnit: event.target.value
      }
    })
  };

  handleFontFamilyChange = (index, event) => {
    this.changeStateItem(index, 'fontFamily', event.target.value)
  };

  handleScaleChange = (index, event) => {
    this.changeStateItem(index, 'scale', event.target.value)
  };

  handleSeedChange = (index, value) => {
    this.changeStateItem(index, 'seed', value)
  };

  render (_, { items, settings }) {
    const [{ count, fontFamily, scale }] = items
    const sizes = Array.from(new Array(count)).map((_, currentIndex) => scalers.get(scale)({
      currentIndex,
      scale: items[0].coefficient,
      seed: items[0].seed
    }))

    return (
      <div id='app'>
        <Header />
        <main>
          <Preview fontFamily={fontFamily} sizes={sizes} settings={settings} />
        </main>
        <Controls
          items={items}
          onCoefficientChange={this.handleCoefficientChange}
          onCountChange={this.handleCountChange}
          onDisplayUnitChange={this.handleDisplayUnitChange}
          onFontFamilyChange={this.handleFontFamilyChange}
          onScaleChange={this.handleScaleChange}
          onSeedChange={this.handleSeedChange}
          settings={settings}
        />
        <Footer />
      </div>
    )
  }
}
