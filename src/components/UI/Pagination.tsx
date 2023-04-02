import instance from '@src/api/apiController'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
  activePage: number
  pages: number
  setActivePage: (i: number) => void
}

const Pagination = ({ activePage, pages, setActivePage }: Props) => {
  const getPages = () => {
    const elements = []
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <div
          className={`${activePage === i ? 'active' : ''}`}
          onClick={() => setActivePage(i)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </div>
      )
    }
    return elements
  }

  return <PaginationStyle>{getPages()}</PaginationStyle>
}

const PaginationStyle = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  justify-content: center;
  width:100%
  margin: 20px auto;
  padding-bottom: 50px;
  > div {
    width: 33px;
    height: 33px;
    background: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bdbdbd;
    margin-right: 20px;
    cursor: pointer;
    &.active {
      background-color: var(--color-primary);
      color: white;
    }
  }
`

export default Pagination
