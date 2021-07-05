import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange(event) {
    // console.log("work")
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form className="meme-form">
            {
                /**
                  * Create 2 input fields, one for the topText and one for the bottomText
                  * Remember that these will be "controlled forms", so make sure to add
                  * all the attributes you'll need for that to work
                  */
            }
            <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="Add top text" />
            <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} placeholder="Add bottom text" />

          <button>Gen</button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
