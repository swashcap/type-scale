/** @jsx h */
import { h, Component } from 'preact'

import Controls from './controls'
import Footer from './footer'
import Header from './header'
import Preview from './preview'

export default class App extends Component {
 state = {
   items: [{
     scale: 1,
     type: 'linear'
   }]
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

 handleScaleChange = (index, value) => {
   this.changeStateItem(index, 'scale', value)
 };

 handleTypeChange = (index, event) => {
   this.changeStateItem(index, 'type', event.currentTarget.value)
 };

 render (_, { items }) {
   const sizes = [0.75, 1, 1.25, 1.5, 1.75, 2.5].map(s => s * items[0].scale)

   return (
     <div id='app'>
       <Header />
       <main>
         <Preview sizes={sizes} />
       </main>
       <Controls
         items={items}
         onScaleChange={this.handleScaleChange}
         onTypeChange={this.handleTypeChange}
       />
       <Footer />
     </div>
   )
 }
}
