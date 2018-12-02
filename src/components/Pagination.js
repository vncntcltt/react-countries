import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/lib/Pagination';

class TablePagination extends React.Component {

  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  };

  render() {
    const { pageCount, activePage, onPageChange } = this.props;
    const pages = [];
    for (let page = 1; page <= pageCount; page++) {
      pages.push((
        <Pagination.Item
          key={page} 
          active={activePage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ));
    }
    return (
      <Pagination>
        <Pagination.First onClick={() => onPageChange(1)} />
        <Pagination.Prev onClick={() => { if (activePage > 1) onPageChange(activePage - 1); }} />
        {pages}
        <Pagination.Next onClick={() => { if (activePage < pageCount) onPageChange(activePage + 1); }}/>
        <Pagination.Last onClick={() => onPageChange(pageCount) } />
      </Pagination>
    );
  }

}

export default TablePagination;