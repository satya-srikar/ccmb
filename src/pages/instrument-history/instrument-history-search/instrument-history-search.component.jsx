import React from "react";

import InputComponent from "../../../components/input/input.component";
import PaginationComponent from "../../../components/pagination/pagination.component";

import "./instrument-history-search.styles.scss";

class InstrumentHistorySearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searchResults: [],
      page: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    let searchResults = [];
    for (let i = 1000; i > 0; i--) searchResults.push(`${i}`);
    this.setState({ searchResults });
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onPageChange = (page) => this.setState({ page });

  render() {
    const { page, search, searchResults, itemsPerPage } = this.state;
    let filteredResults = search
      ? searchResults.filter((result) => result.includes(search))
      : searchResults;

    return (
      <div className="instrument-history-read-edit-page">
        <div className="search-container">
          <InputComponent
            placeholder="Search Report ID"
            label="Search"
            name="reportId"
            value={search}
            onChange={this.onSearch}
          />
        </div>
        <hr />
        <div className="search-result-container">
          {filteredResults
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((result) => {
              return (
                <div key={result} className="search-result">
                  {result}
                </div>
              );
            })}
          <PaginationComponent
            page={page}
            itemsPerPage={itemsPerPage}
            dataCount={filteredResults.length}
            onPageChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default InstrumentHistorySearchPage;
