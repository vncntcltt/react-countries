import React from 'react';

class CountrySearch extends React.Component {

  handleOnChange = (e) => {
    if (this.props.onSearch) {
      this.props.onSearch(e.target.value);
    }
  }

  render() {
    return (
      <input onChange={this.handleOnChange} placeholder="Search countries..." />
    )
  }

}

export default CountrySearch