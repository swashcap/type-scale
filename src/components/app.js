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
    const [{ fontFamily, scale }] = items
    const sizes = Array.from(new Array(6)).map((_, currentIndex) => scalers.get(scale)({
      currentIndex,
      numberOfItems: 6,
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
