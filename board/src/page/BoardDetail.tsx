import React from 'react'
import styled from 'styled-components'
import { postingValue } from '../constant/postingvalue'

export default function BoardDetail() {
  return (
    <Wrapper>
      <Section>
        <ListTitle>title</ListTitle>
        <ListWrapper>
          <ListWriter>writername</ListWriter>
          <ListDate>date</ListDate>
        </ListWrapper>
        <ListContent>
        </ListContent>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 1000px;
  font-size: 32px;
  border: 4px solid black;
`

const ListTitle = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ListWriter = styled.div`
  display: flex;
  font-size: 32px;
`

const ListDate = styled.div`
  display: flex;
  font-size: 32px;
`

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
`