import React, { Component } from "react";
import PlayerImage from "./components/PlayerImage";
import Wrapper from "./components/Wrapper";
import ImagesRow from "./components/ImagesRow";
import Scores from "./components/Scores";
import Status from "./components/Status";
import players from "./images.json";

class App extends Component {
  state = {
    "players": players,
    "sorted_players": players,
    "score": 0,
    "top_score": 0,
    "status": "Click an image to Begin Game!"
  };

  clickImage = id => {
    const playerList = this.state.players;
    var score = this.state.score;
    var top_score = this.state.top_score;
    var status = this.state.status;

    if (!playerList[parseInt(id)].clicked){
      playerList[parseInt(id)].clicked = true;

      score++;

      if (score > top_score){
        top_score++;
      }

      status = "You guessed correctly!";
    } else{
      playerList.forEach(function(value){
        value.clicked = false;
      });

      score = 0;

      status = "You guessed incorrectly!";
    }

    var playerListCopy = playerList.slice(0);
    var playerListSorted = [];

    while (playerList.length > 0){
      const rand_index = Math.floor(Math.random()*playerList.length);
      playerListSorted.push(playerList[rand_index]);
      playerList.splice(rand_index, 1);
    }
    console.log("Player List: "+playerListCopy);
    this.setState({
    "players": playerListCopy,
    "sorted_players": playerListSorted,
    "score": score,
    "top_score": top_score,
    "status": status
    });

  }

  render(){
    return (
      <Wrapper>
        <Status status = {this.state.status}/>
        <Scores score = {this.state.score} top_score = {this.state.top_score}/>
        <ImagesRow>
        {this.state.sorted_players.slice(0,4).map(player => (
          <PlayerImage
            clickImage = {this.clickImage}
            src = {player.src}
            id = {player.id}
          />
        ))}
        </ImagesRow>
        <ImagesRow>
        {this.state.sorted_players.slice(4,8).map(player => (
          <PlayerImage
            clickImage = {this.clickImage}
            src = {player.src}
            id = {player.id}
          />
        ))}
        </ImagesRow>
        <ImagesRow>
        {this.state.sorted_players.slice(8,12).map(player => (
          <PlayerImage
            clickImage = {this.clickImage}
            src = {player.src}
            id = {player.id}
          />
        ))}
        </ImagesRow>
      </Wrapper>
    )
  }

}

export default App;