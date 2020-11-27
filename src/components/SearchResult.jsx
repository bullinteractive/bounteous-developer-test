import React from "react"
import styled from 'styled-components'

export const Image = styled.img`
  display: block;
  max-height: 100px;
  margin: 0 auto;
`;
export const Show = styled.div`
  display: block;
  margin: 0 auto;
`;
export const ShowName = styled.h2`
  display: block;
  text-align: center;
`;

export const SearchResult = ({result}) => {
  console.log(result.show)
  const {id, name, image: { medium: thumbnail } } = result.show;
  return (
    <Show key={id}>
      <ShowName>{name}</ShowName>
      <Image 
        src={thumbnail} 
        loading="lazy" 
        alt={`A thumbnail for the show ${name}`} 
      />
    </Show>
  )
};