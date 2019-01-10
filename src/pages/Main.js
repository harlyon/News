import React, { Component } from 'react';
import axios from 'axios';
import noimage from './../image/noImage';
import Header from '../components/Header'
import Navba from '../components/Navba'

class Main extends Component {

  state = {
    articles: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/${this.props.articles.type}?${this.props.articles.query}&apiKey=a391fff851774b5d8804cf3027c4b8e8&pageSize=12`)
    .then(res=> {
    this.setState({ articles: res.data.articles, loading: false })
    // console.log(res.data);
    })
  }

  render() {
    return (
             <div>
               <Navba />
                   <Header />
                <div className="container">
                  <div className="row">
                    {
                    this.state.articles.map((item) => {
                        return(
                            <div key={item.url} className="col-md-4" style={{ marginBottom:"2rem" }}>
                            <div className="news__box">
                              <img
                                className="news__box-img"
                                src={item.urlToImage? item.urlToImage: noimage }
                                alt={item.author}/>
                                <div className="news__text">

                                  <h5 className="news__title">
                                    {/* { item.description.length < 50 ? `${item.description}` : `${item.description.substring(0, 55)}...` } */}
                                    {item.title}
                                  </h5>
                                  <p className="news__subtitle">Source: <span>
                                  {item.source.name}
                                   </span></p>
                                  <p className="news__subtitle">Author: <span>
                                    { item.author }
                                  </span></p>
                                </div>
                                <button className="news_buttons">
                                   <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                </button>
                            </div>
                          </div>

                        )
                    })
                   }
                  </div>
                </div>
            </div>
    );
  }
}

export default Main;