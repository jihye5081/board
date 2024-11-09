import React from 'react'
import styled from 'styled-components'
import { postingValue } from '../constant/postingvalue'

export default function BoardList() {
  return (
    <Wrapper>
        <Section>
            {
                postingValue.map((el,idx)=>(
                    <ListArticle>
                        <ListIndex>{idx+1}.</ListIndex>
                        <ListElement>{el.title}</ListElement>   
                    </ListArticle>
                ))
            }
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
    border: 4px solid black;
    width: 800px;
    height: 1000px;
    font-size: 32px;
`

const ListArticle= styled.article`
    width: 100%;
    display: flex;
    background-color: lightgoldenrodyellow;
`

const ListIndex = styled.div`
    display: flex;
    width: 10%;
    height: fit-content;
    padding: 8px 0;
`
const ListElement = styled.div`
    display: flex;
    width: 90%;
    height: fit-content;
    padding: 8px 0;
`