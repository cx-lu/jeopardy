import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/results";

class App extends Component {
  state = {
    difficulty: "",
    category: "",
    startDate: "",
    endDate: "",
    results: []
  };

  constructor(props) {
    super(props);
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://jservice.io/api/clues?value=" +
        this.state.difficulty +
        "&category=" +
        this.state.category +
        "&min_date=" +
        this.state.startDate +
        "&max_date=" +
        this.state.endDate
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data });
      })
      .catch(console.log);
    console.log(
      "http://jservice.io/api/clues?value=" +
        this.state.difficulty +
        "&category=" +
        this.state.category +
        "&min_date=" +
        this.state.startDate +
        "&max_date=" +
        this.state.endDate
    );
  }

  changeCategory(newCategory) {
    this.setState({
      category: newCategory
    });
  }

  changeDifficulty(newDifficulty) {
    console.log(newDifficulty);
    this.setState({
      difficulty: newDifficulty
    });
  }

  changeStartDate(newDate) {
    this.setState({
      startDate: newDate
    });
  }

  changeEndDate(newDate) {
    this.setState({
      endDate: newDate
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          changeParentDifficulty={this.changeDifficulty}
          changeParentCategory={this.changeCategory}
          changeParentStartDate={this.changeStartDate}
          changeParentEndDate={this.changeEndDate}
          parent={this}
        />
        <Results results={this.state.results} />

        <div style={{ textAlign: "center", margin: "50px" }}>
          <p>Search by difficulty, date, or category for clues!</p>
        </div>
      </div>
    );
  }
}

export default App;
