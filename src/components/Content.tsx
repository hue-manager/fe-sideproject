import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  intro: string
  children: ReactNode
}

const Content = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <header className="head">
          <h2>{props.title}</h2>
          <span>{props.intro}</span>
        </header>
        <div className="output">{props.children}</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 150px;
  .head {
    display: flex;
    gap: 40px;
    margin: 0 50px;
    padding-bottom: 20px;

    h2 {
      color: var(--color-black70);
      font-size: 18px;
      font-weight: 700;
    }
    span {
      color: var(--color-black70);
      font-size: 16px;
    }
  }
  .output {
    margin: 50px;
  }
`

export default Content
