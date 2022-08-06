
import './fontfamily.css';
import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country:'us',
    category:'sports',
    pagesize:5
  }
  static PropType = {
    country:PropTypes.string,
    category:PropTypes.string,
    pagesize:PropTypes.number
  }

  articles = [ {
    "source": {
      "id": "bbc-sport",
      "name": "BBC Sport"
    },
    "author": "BBC Sport",
    "title": "Shane Warne memorial - watch & follow updates",
    "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
    "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
    "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
    "publishedAt": "2022-03-30T08:22:26.498888Z",
    "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
  },
  {
    "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
    "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
];
capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - News Giraffe`;
  }
    async componentDidMount () {
    this.props.progress(15)
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=57af6b11642642c9bf714d2db86f8aa3&pagesize=${this.props.pagesize}`;  
    this.props.progress(30)
    this.setState({loading:true})
    this.props.progress(45)
    let data = await fetch(url);
    this.props.progress(50)
    let parseData = await data.json();
    this.props.progress(70)
    this.setState({
      articles: parseData.articles,totalResults:parseData.totalResults,loading:false
    });
    this.props.progress(100)  
      
  }

  // handlePrevClick = async () => {
  //   console.log("Previous");
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4381a4396a9942dd987149be3b9e653c&page=${
  //     this.state.page - 1
  //   }&pagesize=${this.props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   this.setState({ articles: parseData.articles });
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading:false,
      
  //   });
  // };
  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)) {
      
  //   }
  //   else{
  //   console.log("Next");
  //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4381a4396a9942dd987149be3b9e653c&page=${
    //    this.state.page + 1
      //}&pagesize=${this.props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   this.setState({ articles: parseData.articles });
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parseData.articles,
  //     loading:false
  //   });
  // }
  // };
  fetchMoreData =async () => {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=57af6b11642642c9bf714d2db86f8aa3&page=${
      this.state.page+1
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
   
    this.setState({
       articles: this.state.articles.concat(parseData.articles),loading:false
      });
  };

  render() {

    return (
        <>
        <h1 className={`text-center text-${this.props.text} font-family4`} style={{margin:'30px'}}>NewsGiraffe - {this.capitalizeFirstLetter(this.props.category)} Top Headlines</h1>
        {this.state.loading&& <h1> <Spinner/> </h1>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner dark={this.props.dark} /></h4>}
        >
        <div className="container">
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((element) => {
            return (
              
              
              <div className="col-md-4" key={element.url}>
                <Newsitem 
                  title={element.title}
                  description={element.description}
                  newsUrl={!element.urlToImage?"https://cdn.cnn.com/cnnnext/dam/assets/220804023637-marjory-stoneman-douglas-high-school-building-super-tease.jpg":element.urlToImage
                }
                author={element.author}
                date={element.publishedAt}
                linkUrl={element.url}
                source={element.source.name}
                text={this.props.text}
                dark={this.props.dark} 
                />

              </div>
              
            );
         })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between text-warning">
        <button
        disabled={this.state.page <= 1}
        type="button"
        className="btn btn-dark"
        onClick={this.handlePrevClick}
        >
        &larr; Previous
          </button>
           Page Number {this.state.page}
          <button
          type="button"
          className="btn btn-dark "
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)?true:false}
          onClick={this.handleNextClick}
          >
          Next &rarr;
          </button>
        </div> */}
        
      </>
      );
  }
}

export default News;
