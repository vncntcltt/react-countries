import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/lib/Pagination'

export default class Paginated extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    itemsPropName: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number,
    children: PropTypes.element.isRequired
  }

  static defaultProps = {
    itemsPerPage: 10
  }

  state = {
    currentPage: 1
  }

  onPageChange = page => {
    this.setState({ currentPage: page })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.setState({ currentPage: 1 })
    }
  }

  render() {
    const { items, itemsPropName, itemsPerPage, children } = this.props
    const pageCount = Math.ceil(items.length / itemsPerPage)
    const firstItemIndex = (this.state.currentPage - 1) * itemsPerPage
    const currentPageItems = items.slice(firstItemIndex, firstItemIndex + itemsPerPage)
    const pages = []
    for (let page = 1; page <= pageCount; page++) {
      pages.push(
        <Pagination.Item key={page} active={this.state.currentPage === page} onClick={() => this.onPageChange(page)}>
          {page}
        </Pagination.Item>
      )
    }
    const childrenWithCurrentPageItems = React.Children.map(children, child =>
      React.cloneElement(child, { [itemsPropName]: currentPageItems })
    )
    const paginatedChild =
      Array.isArray(childrenWithCurrentPageItems) && childrenWithCurrentPageItems.length === 1
        ? childrenWithCurrentPageItems[0]
        : React.Children.only(childrenWithCurrentPageItems)
    return (
      <>
        {paginatedChild}
        <Pagination>
          <Pagination.First onClick={() => this.onPageChange(1)} />
          <Pagination.Prev
            onClick={() => {
              if (this.state.currentPage > 1) this.onPageChange(this.state.currentPage - 1)
            }}
          />
          {pages}
          <Pagination.Next
            onClick={() => {
              if (this.state.currentPage < pageCount) this.onPageChange(this.state.currentPage + 1)
            }}
          />
          <Pagination.Last onClick={() => this.onPageChange(pageCount)} />
        </Pagination>
      </>
    )
  }
}
