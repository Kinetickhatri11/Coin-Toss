// Write your code here
import {Component} from 'react'
import './index.css'

const headsCoinUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsCoinUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {coinUrl: headsCoinUrl, heads: 0, tails: 0}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coinUrl: headsCoinUrl,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        coinUrl: tailsCoinUrl,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {coinUrl, heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-call">Heads (or) Tails</p>
          <img src={coinUrl} className="coin-img" alt="toss result" />
          <button className="toss-button" type="button" onClick={this.onToss}>
            Toss coin
          </button>
          <div className="count-container">
            <p>Total:{total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
