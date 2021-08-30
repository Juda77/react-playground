import React from "react";

export default class FetchMeme extends React.Component {

  state = {
    loading: true,
    index: 0
  }

  async componentDidMount() {
    const url = "https://api.imgflip.com/get_memes";
    let response = await fetch(url);
    response = await response.json();
    this.setState({
      loading: false,
      items: response
    });
  }

  displayMeme = () => {
    this.setState({
      index: (this.state.index + 1) % 100
    });
  }

  render() {

    if (this.state.loading) {
      return(
        <div>Loading...</div>
      );
    }

    return(
      <div>
        <button onClick={this.displayMeme}>Get new meme</button>
        <img src={this.state.items.data.memes[this.state.index].url} alt="funny-meme-lol"/>
      </div>
    );
  }

}