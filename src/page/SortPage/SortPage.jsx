import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const sortingAlgorithms = [
    {
        name:"버블정렬",
        path:"bubble"
    },
    {
        name:"삽입정렬",
        path:"insert"
    },
    {
        name:"선택정렬",
        path:"select"
    },
    {
        name:"합병정렬",
        path:"merge"
    },
]
const SortPage = () => {

    const navigate = useNavigate()

  return (
    <div>
            <Row>
                {
                    sortingAlgorithms.map((item, index)=>(
                        <Col xs={12} md={6} lg={4}>
                            <div onClick={()=>navigate(item.path)}>{item.name}</div>
                        </Col>
                    ))
                }
            </Row>
        <Outlet />
    </div>
  )
}

export default SortPage