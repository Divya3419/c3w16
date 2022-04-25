import React from "react";
import { useEffect, useState } from "react";
 import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";


export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
    
  }, []);

  const getdata=async()=>{
    axios.get('http://localhost:8080/books')
    .then((res)=>{
      //console.log(res);
      const dAta=res.data
     // console.log(dAta);
     setData(dAta);
    })
    
  }

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        <BookCard {...data}/>
      </Grid>
    </>
  );
};
export default Books;
