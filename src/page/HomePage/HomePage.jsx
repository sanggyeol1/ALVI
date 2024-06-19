import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./HomePage.style.css"
import { useNavigate } from 'react-router-dom';
import { faRoute, faSort, faMagnifyingGlass, faSackDollar, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import ThemeCard from '../../components/ThemeCard/ThemeCard';
const algorithm_theme = [
    {
        name: '정렬 알고리즘',
        path: 'sort',
        icon: faSort,
        description:"버블, 퀵, 팀 등 7가지 정렬 알고리즘의 과정을 시각화하였다.",
    },
    {
        name: '이진탐색 알고리즘',
        path: "search",
        icon: faMagnifyingGlass,
        description:"이진탐색을 각 단계별로 나누어 그 과정을 자세히 볼 수 있다.",
    },
    {
        name: '그래프 탐색',
        path: "shortest-path",
        icon: faRoute,
        description:"다익스트라, A*, DFS, BFS 4가지의 그래프 탐색 알고리즘",
    },
    {
        name: '그리디 알고리즘',
        path: "greedy",
        icon: faSackDollar,
        description : "직관적이고 단순한 알고리즘",
    },
    {
        name: '백트래킹 알고리즘',
        path: "backtracking",
        icon: faChessQueen,
        description:"N-Queen 을통해서 쉽게 배우는 백트레킹의 과정",
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
                        <Col onClick={() => goToLink(item.path)} key={index} xs={12} md={6}>

                            <ThemeCard item={item} />

                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomePage