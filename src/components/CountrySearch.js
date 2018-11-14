import React from 'react';

class CountrySearch extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    if (this.props.onSearch) {
      this.props.onSearch(e.target.value);
    }
  }

  render() {
    return (
      <input onChange={this.handleOnChange} placeholder="Search countries..." />
    );
  }

}

export default CountrySearch;