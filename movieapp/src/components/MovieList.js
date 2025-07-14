import React from 'react'
import { useState } from 'react';
import Carta from './Carta'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from 'react-stars'

const movielistStyle ={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  width:'100%',
  margin:'0px auto',
  background: '#0e0e0e',
  position:'relative',top:'-50px'
}

function MovieList({movielist}) {
  const [text, settext] = useState("");
  const [rate, setrate] = useState(5);
  
  return (
    <>
    <div style={{background:'#0e0e0e', height:'100px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'-50px'}}>
      <Form inline>
        <Row>
          <Col xs="auto">
            <ReactStars
              count={5}
              onChange={(ratingChanged)=>setrate(ratingChanged)}
              size={24}
              edit={true}
              color2={'#ff0000'} />
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e)=>settext(e.target.value)}
            />
          </Col>
          
        </Row>
      </Form>
    </div>
    <div style={movielistStyle}>
      {movielist.filter((e)=>e.name.toLowerCase().includes(text.toLowerCase()) && e.rating == rate).map((e)=><Carta e={e}/>)}
    </div>
    </>
  )
}

export default MovieList