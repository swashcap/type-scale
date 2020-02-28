/** @jsx h */
import { h, Component } from 'preact'

import Controls from './controls'
import Footer from './footer'
import Header from './header'
import Preview from './preview'

/**
 * {@link http://spencermortensen.com/articles/typographic-scale/}
 */
export const classic = ({
  currentIndex,
  numberOfItems,
  scale,
  seed
}) => seed * Math.pow(2, (currentIndex + 1) / numberOfItems) * scale

export const linear = ({
  currentIndex,
  scale,
  seed
}) => (currentIndex + 1) * seed * scale

/**
 * {@link https://en.wikipedia.org/wiki/Golden_ratio}
 */
export const goldenRatio = ({
  currentIndex,
  scale,
  seed
}) => seed * Math.pow(1.618, currentIndex + 1) * scale

const scalers = new Map([
  ['classic', classic],
  ['golden-ratio', goldenRatio],
  ['linear', linear]
])

export default class App extends Component {
  state = {
    items: [{
      coefficient: 1,
      fontFamily: 'sans-serif',
      scale: 'linear',
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
