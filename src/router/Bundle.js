import React, {Component} from 'react'

class Bundle extends Component {
  constructor(props) {
    super(props)
  }
    
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    // console.log('Bundle componentWillMount', this.props)
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('Bundle componentWillReceiveProps', nextProps)
    if (nextProps.load !== this.props.load) {
        this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
        mod: null
    });
    props.load((mod) => {
        this.setState({
            // handle both es imports and cjs
            mod: mod.default ? mod.default : mod
        })
    })
  }

  render() {
    // console.log('~~~~~',this.state.displayLoading, this.constructor.name)
    return this.props.children(this.state.mod)
  }

}

export default Bundle;