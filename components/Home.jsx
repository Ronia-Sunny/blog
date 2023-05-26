import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  var[names,setNames]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setNames(response.data);
      console.log(response.data);
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div> style={{paddingTop:"40px"}}
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{color:"brown",fontSize:"20px"}}>BlogId
            </TableCell>
            <TableCell style={{color:"brown",fontSize:"20px"}}>Title
           </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {names.map((value,index)=>{
            return(
              <TableRow>
                <TableCell>{value.title}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
  )
}

export default Home