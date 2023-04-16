import React from 'react'
import ReactPaginate from 'react-paginate'
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi'
import '../../styles/paginate.css'

const PER_PAGE = 5

interface Props {
  totalElements: number
  changePageHandler: (event: { selected: number }) => void
}

const Paginate = ({ totalElements, changePageHandler }: Props) => {
  return (
    <ReactPaginate
      pageCount={totalElements}
      pageRangeDisplayed={5}
      previousLabel={<TfiAngleLeft />}
      nextLabel={<TfiAngleRight />}
      onPageChange={changePageHandler}
      containerClassName="pagination-ul"
      activeClassName="current-page"
    />
  )
}

export default Paginate
