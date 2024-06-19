import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './page/HomePage/HomePage';
import SortPage from './page/SortPage/SortPage';
import LISVisualizer from './components/LISVisualizer';
import SubsetSum from './components/SubsetSum';
import BacktrackingPage from './page/BacktrackingPage/BacktrackingPage';
import BubbleSort from './components/BubbleSort/BubbleSort';
import WalkPage from './page/Walk/WalkPage';
import SearchPage from './page/SearchPage/SearchPage';
import GreedyPage from './page/GreedyPage/GreedyPage';
import DynamicPage from './page/Dynamic/DynamicPage';
import ShortestPath from './page/ShortestPath/ShortestPath';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sort" element={<SortPage />}>
              <Route path="bubble" element={<BubbleSort/>} />
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
            <Route path="search" element={<SearchPage />}>
              <Route path="lis" element={<LISVisualizer />} />
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
            <Route path="shortest-path" element={<ShortestPath />}>
              <Route path="lis" element={<LISVisualizer />} />
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
            <Route path="dynamic" element={<DynamicPage/>}>
              <Route path="lis" element={<LISVisualizer />} />
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
            <Route path="greedy" element={<GreedyPage />}>
              <Route path="lis" element={<LISVisualizer />} />
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
            <Route path="backtracking" element={<BacktrackingPage />}>
              <Route path="subset-sum" element={<SubsetSum />} />
            </Route>
          </Route>
          <Route path="/walk" element={<WalkPage />}></Route>
        </Routes>
      </div>
  );
}

export default App;
