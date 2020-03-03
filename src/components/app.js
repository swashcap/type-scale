/** @jsx h */
import { h, Component } from 'preact'

import Controls from './controls'
import Footer from './footer'
import Header from './header'
import Preview from './preview'

export default class App extends Component {
  state = {
    groups: [{
      coefficient: 1,
      items: [
        'Heading 1',
        'Heading 2',
        'Heading 3',
        'Heading 4',
        'Heading 5',
        'Heading 6'
      ],
      seed: 12
    }],
    settings: {
      displayUnit: 'px',
      fontFamily: 'sans-serif',
      scale: 'classic'
    }
  };

  handleCoefficientChange = (index, coefficient) => {
    this.setState({
      groups: this.state.groups.map((group, i) => (
        i === index
          ? { ...group, coefficient }
          : group
      ))
    })
  };

  handleContentChange = (index, itemIndex, value) => {
    this.setState({
      groups: this.state.groups.map((group, i) => ({
        ...group,
        items: i === index
          ? group.items.map((item, j) => j === itemIndex ? value : item)
          : group
      }))
    })
  };

  handleCountChange = (index, value) => {
    const { groups } = this.state
    const items = [...groups[index].items]
    const previousValue = items.length

    if (value > previousValue) {
      for (let i = previousValue; i < value; i += 1) {
        items.push(`Heading ${i + 1}`)
      }
    } else if (value < previousValue) {
      items.splice(previousValue - 1)
    }

    this.setState({
      groups: groups.map((group, i) => (
        i === index
          ? { ...group, items }
          : group
      ))
    })
  };

  handleDisplayUnitChange = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        displayUnit: event.target.value
      }
    })
  };

  handleFontFamilyChange = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        fontFamily: event.target.value
      }
    })
  };

  handleScaleChange = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        scale: event.target.value
      }
    })
  };

  handleSeedChange = (index, seed) => {
    this.setState({
      groups: this.state.groups.map((group, i) => (
        i === index
          ? { ...group, seed }
          : group
      ))
    })
  };

  render (_, { groups, settings }) {
    return (
      <div id='app'>
        <Header />
        <main>
          <Preview
            groups={groups}
            onContentChange={this.handleContentChange}
            settings={settings}
          />
        </main>
        <Controls
          groups={groups}
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
