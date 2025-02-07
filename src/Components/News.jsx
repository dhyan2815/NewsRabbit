// Importing necessary dependencies and components
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";

export class News extends Component {
  //Required default props
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  };

  // Required prop types
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // Predefined list of articles for demonstration purposes
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Athenkosi Tsotsi",
      title:
        "Proteas played some 'soft' cricket but still not close to full potential, says Test coach Conrad",
      description:
        "While he is pleased with his side getting the job done against Pakistan, which booked their place in the final of the World Test Championship, Proteas Test coach Shukri Conrad wants his charges to be more clinical and consistent in their performances.",
      url: "https://www.news24.com/sport/cricket/proteas/proteas-played-some-soft-cricket-but-still-not-close-to-full-potential-says-test-coach-conrad-20241230",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/12562/5149ec58098f4be8ab9668592639a120.jpg",
      publishedAt: "2024-12-30T05:01:00",
      content:
        "While he is pleased with his side getting the job done against Pakistan, which booked their place in the final of the World Test Championship, Proteas Test coach Shukri Conrad wants his charges to be… [+51 chars]",
    },
    {
      source: { id: "news-com-au", name: "News.com.au" },
      author: null,
      title: "Pat Cummins causes stir with divisive act",
      description:
        "Strap in for a mammoth day of Test cricket as the Boxing Day Test heads for a thrilling conclusion.",
      url: "https://www.news.com.au/sport/cricket/australia-vs-india-boxing-day-test-day-5-live-updates/live-coverage/f9bfa7f3714ac23d729f851b8338c730",
      urlToImage:
        "https://content.api.news/v3/images/bin/1372c6c33a153becb1af0d0e18bc747a",
      publishedAt: "2024-12-29T22:32:00Z",
      content:
        "Strap in for a mammoth day of Test cricket as the Boxing Day Test heads for a thrilling conclusion...",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban...",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary...",
    },
  ];

  // Constructor initializes the component's state
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Stores fetched articles
      loading: false, // Indicates whether data is being fetched
      page: 1, // Tracks the current page for pagination
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsRabbit`;
  }

  // Function to update the News whenever fetched
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true }); // Show loading spinner

    let data = await fetch(url);
    let parsedData = await data.json(); // Convert response to JSON
    this.setState({
      articles: parsedData.articles, // Update state with fetched articles
      totalResults: parsedData.totalResults,
      loading: false, // Hide loading spinner
    });
  }

  // Lifecycle method to fetch news articles after the component mounts
  async componentDidMount() {
    this.updateNews();
  }

  // Lifecycle method component responds to prop change of category dynamically
  async componentDidUpdate(prevProps) {
    // Checks if the previous props category have changed
    if (prevProps.category !== this.props.category) {
      this.updateNews();
    }
  }

  // Event handler for "Previous" button click
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  // Event handler for "Next" button click
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  // Function to capitalize first letter of the TOP HEADLINES
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Render method to display the component
  render() {
    return (
      <div className="container my-3">
        <h1 className="my-4 text-center">{`${this.capitalizeFirstLetter(
          this.props.category
        )} - Top Headlines`}</h1>

        {/* Show spinner while loading */}
        {this.state.loading && <Spinner />}

        {/* Display news articles */}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        {/* Pagination buttons */}
        <div className="button-container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
