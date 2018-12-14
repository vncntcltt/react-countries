import React from 'react'
import { storiesOf } from '@storybook/react'

import Paginated from '../components/common/Paginated'

const PaginatedAlphabet = ({ paginatedItems }) => (
  <div>
    {paginatedItems.map(item => (
      <span key={item}>{item}</span>
    ))}
  </div>
)

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
storiesOf('Common/Paginated', module)
  .add('alphabet letters with 2 items per page', () => (
    <Paginated items={alphabet} itemsPropName={'paginatedItems'} itemsPerPage={2}>
      <PaginatedAlphabet />
    </Paginated>
  ))
  .add('alphabet letters with 5 items per page', () => (
    <Paginated items={alphabet} itemsPropName={'paginatedItems'} itemsPerPage={5}>
      <PaginatedAlphabet />
    </Paginated>
  ))
  .add('alphabet letters with 10 items per page', () => (
    <Paginated items={alphabet} itemsPropName={'paginatedItems'} itemsPerPage={10}>
      <PaginatedAlphabet />
    </Paginated>
  ))
  .add('alphabet letters with 50 items per page', () => (
    <Paginated items={alphabet} itemsPropName={'paginatedItems'} itemsPerPage={50}>
      <PaginatedAlphabet />
    </Paginated>
  ))
