import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./HomePage.style.css"
import { useNavigate } from 'react-router-dom';
import { faRoute, faSort, faMagnifyingGlass, faSackDollar,faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import ThemeCard from '../../components/ThemeCard/ThemeCard';
const algorithm_theme = [
    {
        name: '정렬 알고리즘',
        path: 'sort',
        icon: faSort,
    },
    {
        name: '탐색 알고리즘',
        path: "search",
        icon: faMagnifyingGlass,
    },
    {
        name: '최단경로 알고리즘',
        path: "shortest-path",
        icon: faRoute
    },
    {
        name: '동적 프로그래밍',
        path: "dynamic",
        icon: faSuitcaseRolling
    },
    {
        name: '그리디 알고리즘',
        path: "greedy",
        icon: faSackDollar
    },
    {
        name: '백트래킹 알고리즘',
        path: "backtracking",
        icon: faChessQueen
    },
]



const HomePage = () => {
    const navigate = useNavigate()

    const goToLink = (path) => {
        navigate(path)
    }

    return (
        <div>

            <Row>
                {
                    algorithm_theme.map((item, index) => (
                        <Col onClick={() => goToLink(item.path)} key={index} xs={12} md={6} lg={4}>
                            
                            <ThemeCard item={item}/>

                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomePage