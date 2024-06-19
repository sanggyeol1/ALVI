import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './page/HomePage/HomePage';
import SortPage from './page/SortPage/SortPage';
import BacktrackingPage from './page/BacktrackingPage/BacktrackingPage';
import BubbleSort from './components/BubbleSort/BubbleSort';
import WalkPage from './page/Walk/WalkPage';
import SearchPage from './page/SearchPage/SearchPage';
import GreedyPage from './page/GreedyPage/GreedyPage';
import DynamicPage from './page/Dynamic/DynamicPage';
import ShortestPath from './page/ShortestPath/ShortestPath';
import InsertionSort from './components/InsertionSort/InsertionSort';
import SelectionSort from './components/SelectionSort/SelectionSort';
import MergeSort from './components/MergeSort/MergeSort';
import QuickSort from './components/QuickSort/QuickSort';
import TimSort from './components/TimSort/TimSort';
import HeapSort from './components/HeapSort/HeapSort';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sort" element={<SortPage />}>
              <Route path="bubble" element={<BubbleSort/>} />
              <Route path="insert" element={<InsertionSort/>} />
              <Route path='select' element={<SelectionSort/>} />
              <Route path='merge' element={<MergeSort/>} />
              <Route path='quick' element={<QuickSort/>} />
              <Route path='heap' element={<HeapSort/>} />
              <Route path='tim' element={<TimSort/>} />
            </Route>
            <Route path="search" element={<SearchPage />}>
            </Route>
            <Route path="shortest-path" element={<ShortestPath />}>
            </Route>
            <Route path="dynamic" element={<DynamicPage/>}>
            </Route>
            <Route path="greedy" element={<GreedyPage />}>
            </Route>
            <Route path="backtracking" element={<BacktrackingPage />}>
            </Route>
          </Route>
          <Route path="/walk" element={<WalkPage />}></Route>
        </Routes>
      </div>
  );
}

export default App;
