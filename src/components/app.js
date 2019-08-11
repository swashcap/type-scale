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
     scale: 1,
     type: 'linear'
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

  handleDisplayUnitChange = (event) => {
    this.setState({
      settings: {
        displayUnit: event.target.value
      }
    })
  };

 handleScaleChange = (index, value) => {
   this.changeStateItem(index, 'scale', value)
 };

 handleTypeChange = (index, event) => {
   this.changeStateItem(index, 'type', event.currentTarget.value)
 };

 render (_, { items, settings }) {
   const scaler = scalers.get(items[0].type)
   const sizes = Array.from(new Array(6)).map((_, currentIndex) => scaler({
     currentIndex,
     numberOfItems: 6,
     scale: items[0].scale,
     seed: 12
   }))

   return (
     <div id='app'>
       <Header />
       <main>
         <Preview settings={settings} sizes={sizes} />
       </main>
       <Controls
         items={items}
         onDisplayUnitChange={this.handleDisplayUnitChange}
         onScaleChange={this.handleScaleChange}
         onTypeChange={this.handleTypeChange}
         settings={settings}
       />
       <Footer />
     </div>
   )
 }
}
