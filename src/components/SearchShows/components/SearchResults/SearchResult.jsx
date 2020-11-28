import React from "react"
import styled from 'styled-components'

export const Image = styled.img`
  max-height: 200px;
`;
export const Show = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
`;
export const ShowName = styled.h3`
  display: block;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin: 0;
  line-height: 1;
  padding: 10px 0 8px;
  background: rgb(53, 41, 127);
  color: white;
`;

export const Details = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

export const SearchResult = ({result}) => {
  const {id, name, image: { medium: thumbnail }, network, rating, summary } = result.show;
  return (
    <Show key={id}>
      <ShowName>{name}</ShowName>
      <Details>
        <Image 
          src={thumbnail} 
          loading="lazy" 
          alt={`A thumbnail for the show ${name}`} 
        />
        <ul>
          { summary && (
            <li><strong>Overview:</strong> {summary.replace(/<[^>]*>?/gm, '')}</li>
          )}
          { network && ( 
            <li><strong>Network:</strong> {network.name}</li>
          )}
          { rating.average !== null && (
            <li><strong>Rating:</strong> {rating.average}</li>
          )}
        </ul>
      </Details>
    </Show>
  )
};