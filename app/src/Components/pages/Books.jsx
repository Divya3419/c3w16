import React from "react";
import { useEffect, useState } from "react";
 //import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";


export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getdata=async()=>{
    
      let res=await fetch('http://localhost:8080/books')
        let data=await res.json();
        console.log(data);
        setData(data)
      
      
      }
    
    getdata();
    
  }, []);

  
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
