import React from 'react';
import {ChevronRight, ChevronLeft} from '@material-ui/icons' ;
import './style.scss';
import playVideo from '../../img/playVideo.png';

export class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      tab: 7,
    }
  }

  leftScroll (event) {
    
    const {tab} = this.state;
    if(tab== 5){
      this.setState({tab: 5})
    }else{
      this.setState({tab: tab-1})  
      this.refs.scrollDiv.scrollLeft -=200;
    }
    
  };
  
  rightScroll (event)  {
    
    const {tab} = this.state;
    if(tab== 9){
      this.setState({tab: 9})
    }else{
      this.setState({tab: tab+1})
    } 
    this.refs.scrollDiv.scrollLeft +=220;
    
  };
  openTab(i){

    const selectedTab= parseInt(i.getAttribute("index"));
    i.setAttribute("index", 7);
    this.setState({tab: selectedTab})
  }

  videoTab(tab){
    this.setState({tab: tab})
  }


  channelCards (event) {
    const {tab} = this.state;
  var cards = [];
  for(var i=5;i<10 ;i++) {
    cards.push(
      <div index={i} onClick={(e) => this.openTab(e.target)} className={i==tab?"channelCardActive": "channelCard"}>
      {i}
      <i className={i==tab? "CardActive" : "Card"}>
      <img  src={playVideo} />
      </i>
      </div>
    );
  }
  return(
    cards
  );
 };



  render() {
    const {tab} = this.state;

    return (
      <div>
        <div className="dashboardBody">
          <ul>
            <li><h1>Conept Videos</h1></li>
            <li><p>Select a Number</p></li>
          </ul>
        </div>
        <div className="infoChannels">
          <button variant="fab" aria-label="Add" className="buttonScroll"  onClick={(e)=>this.leftScroll(e)}>
            <ChevronLeft />
          </button>
          <div className="channelScrollView" ref="scrollDiv">
            {this.channelCards()}
          </div>
          <button variant="fab" aria-label="Add" className="buttonScroll" onClick={(e)=>this.rightScroll(e)}>
            <ChevronRight />
          </button>
        </div>
        <div className="dashboardBody1">
          <ul>
            <li><h1>Live Classes</h1></li>
            <li><p>Select a Number</p></li>
          </ul>
        </div>
        <div className="tabSelector">
          <tr style={{'padding-bottom':'-1em'}}>
            <td onClick={()=> this.videoTab(5)}>
            5
            </td>
            <td onClick={()=> this.videoTab(6)}>
            6
            </td>
            <td onClick={()=> this.videoTab(7)}>
            7
            </td>
            <td onClick={()=> this.videoTab(8)}>
            8
            </td>
            <td onClick={()=> this.videoTab(9)}>
            9
            </td>
          </tr>
        </div>
        
        
      </div>
    );
  }
}

export default Dashboard;

