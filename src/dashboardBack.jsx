import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


const padding = 0.3;
var popup = false;

class DashboardBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3, cardType: 0 }, { x: 0 + padding, y: 0, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 0, z: -3, cardType: 2 }, { x: -1, y: 1 + padding, z: -3, cardType: 0 }, { x: 0 + padding, y: 1 + padding, z: -3, cardType: 3 }, { x: 1 + padding * 2, y: 1 + padding, z: -3, cardType: 4 }, { x: -1, y: 2 + padding * 2, z: -3, cardType: 0 }, { x: 0 + padding, y: 2 + padding * 2, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 2 + padding * 2, z: -3, cardType: 2 }],
      widgetData: [],
      bitcoin: { quote: { trade_price: "" } },
      tesla: { quote: { trade_price: "" } },
      EUR: { quote: { trade_price: "" } },
      USD: { quote: { trade_price: "" } },
      Soccer: { quote: { trade_price: "" } },
      stockPriceColor : "grey"
      
    };

    //this is for the stock price color
    this.complicatedLogic;

    //end
  }
  complicatedLogic(){

  }
  componentWillMount() {
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=BTCBTSP").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult)
      this.setState({ bitcoin: jsonResult[0] })
    }
      )
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=TSLA_XNGS").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ tesla: jsonResult[0] })
    }
      )
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=EURUSD").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ EUR: jsonResult[0] })
    }
    
      )
      fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=USDEUR").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ USD: jsonResult[0] })
    })
  
    fetch("http://conu.astuce.media/api/sports/football/team/stats.json?Coverage=Event&LevelOfDetail=High&Affiliation=17435833f1ed42848320a80f013bbb3f&Event=180120-swa-liv").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ Soccer: jsonResult })
    })
    }


  render() {
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1, z: this.state.grid[0].z }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/e98a643c-6c75-4b0f-9b85-330ced40b0cb/" rotation=" 0 0" height=".5" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1.35, z: this.state.grid[0].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="15" value="Gaming" position={{ x: this.state.grid[0].x - 0.5, y: this.state.grid[0].y + 1, z: this.state.grid[0].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="New Games that are available on the PSN Platform" position={{ x: this.state.grid[0].x - 0.5, y: this.state.grid[0].y + 0.75, z: this.state.grid[0].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y + 1, z: this.state.grid[1].z  }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/3f66ea01-bb96-4f76-b42b-c86f57763280/" rotation=" 0 0" height=".5" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y + 1.35, z: this.state.grid[1].z }} />
          <Entity primitive="a-text" color={this.state.stockPriceColor} height="0.3" width="0.2" value="550k" position={{ x: this.state.grid[1].x-.5, y: this.state.grid[1].y + 0.7, z: this.state.grid[1].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="15" value="Fast Cars" position={{ x: this.state.grid[1].x - 0.5, y: this.state.grid[1].y + 0.9, z: this.state.grid[0].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="Ferrari's sales drop 20%" position={{ x: this.state.grid[1].x - 0.5, y: this.state.grid[1].y + 0.75, z: this.state.grid[1].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y + 1, z: this.state.grid[2].z  }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/ffcc6fdf-adf0-42c9-a0e1-f98ff5dbb0b8/" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y + 1.35, z: this.state.grid[2].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="15" value="Weather" position={{ x: this.state.grid[2].x - 0.5, y: this.state.grid[2].y + 0.9, z: this.state.grid[2].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="It will be 1.94 degrees tonight." position={{ x: this.state.grid[2].x - 0.5, y: this.state.grid[2].y + 0.75, z: this.state.grid[2].z }} />

        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 1, z: this.state.grid[3].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/64efbc5e-3f91-448d-aa2a-ed6e77fd98f3/" rotation=" 0 0" height=".5" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 1.35, z: this.state.grid[3].z }} />
         
          <Entity primitive="a-text" color="black" height="0.9" width="1.2" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 0.7, z: this.state.grid[3].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="BitCoin trade price is: " position={{ x: this.state.grid[3].x - 0.5, y: this.state.grid[3].y + 0.75, z: this.state.grid[3].z }} />
       
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y + 1, z: this.state.grid[4].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/8df18394-f4d4-4bf7-a556-2004d2dced32/" rotation=" 0 0" height=".5" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y + 1.35, z: this.state.grid[4].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="15" value="AI" position={{ x: this.state.grid[4].x - 0.5, y: this.state.grid[4].y + 0.9, z: this.state.grid[4].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="How can I help you today?" position={{ x: this.state.grid[4].x - 0.5, y: this.state.grid[4].y + 0.75, z: this.state.grid[4].z }} />

        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y + 1, z: this.state.grid[5].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://ucarecdn.com/6d93bfba-2b65-4f1c-8a1b-81feeceae3cf/" rotation=" 0 0" height=".5" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y + 1.35, z: this.state.grid[5].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="15" value="Italk" position={{ x: this.state.grid[5].x - 0.5, y: this.state.grid[5].y + 0.9, z: this.state.grid[5].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="1" wrap-count="20" value="You have 0 new message" position={{ x: this.state.grid[5].x - 0.5, y: this.state.grid[5].y + 0.75, z: this.state.grid[5].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y + 1, z: this.state.grid[6].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y + 1.35, z: this.state.grid[6].z }} />
         
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y + 1, z: this.state.grid[7].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y + 1.35, z: this.state.grid[7].z }} />
         
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y + 1, z: this.state.grid[8].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y + 1.35, z: this.state.grid[8].z }} />
         
        </a-entity>
        </a-entity>

        );
  }
}

export default DashboardBack;
