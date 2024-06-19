import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const sortingAlgorithms = [
    {
        name: "버블정렬",
        path: "bubble"
    },
    {
        name: "삽입정렬",
        path: "insert"
    },
    {
        name: "선택정렬",
        path: "select"
    },
    {
        name: "합병정렬",
        path: "merge"
    },
    {
        name: "퀵정렬",
        path: "quick"
    },
    {
        name: "힙정렬",
        path: "heap"
    },
    {
        name: "팀정렬",
        path: "tim"
    },
]
const SortPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                {
                    sortingAlgorithms.map((algo, index) => (
                        <button
                            key={index}
                            onClick={()=>{navigate(algo.path)}}
                            type="button" 
                            class="btn btn-dark"
                        >{algo.name}</button>
                    ))
                }

            </div>
            <Outlet />
        </div>
    )
}

export default SortPage