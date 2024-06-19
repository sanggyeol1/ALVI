import React from 'react';
import './Walk.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaPaw, FaStore, FaUser, FaUserCircle, FaCog, FaMoon, FaUmbrellaBeach, FaTree, FaDog, FaBicycle, FaLeaf, FaWater, FaChild, FaHeart, FaDumbbell } from 'react-icons/fa';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa';
import { FaUserPlus, FaShareAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import MyLocationMap from '../map/MyLocationMap';

const Header = () => (
  <header className="header">
    <div className="logo">팰 워크</div>
    <div className="profile-settings">
      <button className="icon-button">
        <FaUserCircle className="icon" />
         Mypage
      </button>
      <button className="icon-button">
        <FaCog className="icon" />
        Set
      </button>
    </div>
  </header>
);

const PointsAndPets = () => (
  <section className="points-pets">
    <div className="points">
      <h2>현재 포인트: <span className="points-value">1004</span></h2>
    </div>
    <div className="pet">
      <h3>보유 반려동물: 시고르자브</h3>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMDRfMTQ3%2FMDAxNjcwMTQxNDExOTAy.iDfbhJ6fwx2XwWcKHIKuxl0sQ6qb-HtdR0x3uYhte7Eg.5FgXGTMZ__RUHMmA0UcY0Gcj9hplYQIrQjUxJ60Ew7Qg.JPEG.xgf6580%2FIMG_6881.JPG&type=a340" alt="시고르자브" className="pet-image" />
    </div>
    <button className="start-walk-button">산책 시작</button>
  </section>
);

const SearchTrails = () => (
  <section className="search-trails">
    <div className="search-bar-container">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="산책로 검색..." className="search-bar" />
    </div>
    <div className="filters">
      <button className="filter-button"><FaMoon className="filter-icon" /> 야경 </button>
      <button className="filter-button"><FaUmbrellaBeach className="filter-icon" /> 피서 </button>
      <button className="filter-button"><FaTree className="filter-icon" /> 그늘 </button>
      <button className="filter-button"><FaDog className="filter-icon" /> 반려견 </button>
      <button className="filter-button"><FaBicycle className="filter-icon" /> 자전거</button>
      <button className="filter-button"><FaLeaf className="filter-icon" /> 벚꽃</button>
      <button className="filter-button"><FaWater className="filter-icon" /> 바다</button>
      <button className="filter-button"><FaChild className="filter-icon" /> 가족</button>
      <button className="filter-button"><FaHeart className="filter-icon" /> 애인</button>
      <button className="filter-button"><FaUser className="filter-icon" /> 혼자</button>
      <button className="filter-button"><FaDumbbell className="filter-icon" /> 운동</button>
    </div>
  </section>
);

const RecommendedTrails = () => (
  <section className="recommended-trails">
    <h2>주변 산책로 추천</h2>
    <ul className="trail-list">
      <li className="trail-item">
        <FaMapMarkerAlt className="trail-icon" />
        가천대 기숙사 운동장 - 2km - 
        <span className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
        </span>
      </li>
      <li className="trail-item">
        <FaMapMarkerAlt className="trail-icon" />
        태평역 탄천 - 3km - 
        <span className="stars">
          <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
        </span>
      </li>
      <li className="trail-item">
        <FaMapMarkerAlt className="trail-icon" />
        AI공학관 샛길 - 1km - 
        <span className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </span>
      </li>
    </ul>
  </section>
);

const WalkHistory = () => (
  <section className="walk-history">
    <button className="start-walk-button">
      <FaWalking className="button-icon" />
      산책 시작
    </button>
    <div className="history">
      <h2>최근 산책 기록</h2>
      <ul className="history-list">
        <li className="history-item">
          <FaMapMarkerAlt className="history-icon" />
          잠실한강공원 - 1km <br/><FaStar className="point-icon" /> 10포인트 획득
        </li>
        <li className="history-item">
          <FaMapMarkerAlt className="history-icon" />
          가천대 기숙사 운동장 - 2km <br/><FaStar className="point-icon" /> 20포인트 획득
        </li>
      </ul>
    </div>
  </section>
);

const InviteAndShare = () => (
  <section className="invite-share">
    <button className="invite-button">
      <FaUserPlus className="button-icon" />
      친구 초대
    </button>
    <button className="share-button">
      <FaShareAlt className="button-icon" />
      공유하기
    </button>
    <div className="sns-buttons">
      <button className="sns-button">
        <FaTwitter className="sns-icon" />
        X
      </button>
      <button className="sns-button">
        <FaFacebook className="sns-icon" />
        facebook
      </button>
      <button className="sns-button">
        <FaInstagram className="sns-icon" />
        Instagram
      </button>
    </div>
  </section>
);

const FooterNav = () => (
  <nav className="footer-nav">
    <NavLink to="/" className="nav-button" activeClassName="active-nav-button" exact>
      <FaHome className="nav-icon" />
      <span>홈</span>
    </NavLink>
    <NavLink to="/search" className="nav-button" activeClassName="active-nav-button">
      <FaSearch className="nav-icon" />
      <span>산책로 검색</span>
    </NavLink>
    <NavLink to="/pets" className="nav-button" activeClassName="active-nav-button">
      <FaPaw className="nav-icon" />
      <span>반려동물</span>
    </NavLink>
    <NavLink to="/shop" className="nav-button" activeClassName="active-nav-button">
      <FaStore className="nav-icon" />
      <span>포인트 샵</span>
    </NavLink>
    <NavLink to="/profile" className="nav-button" activeClassName="active-nav-button">
      <FaUser className="nav-icon" />
      <span>프로필</span>
    </NavLink>
  </nav>
);



const WalkPage = () => {
  return (
    <div className="walk-page">
      <Header />
      <main>
        <PointsAndPets />
        <SearchTrails />
        <RecommendedTrails />
        <WalkHistory />
        <InviteAndShare />
        <MyLocationMap/>
      </main>
      <FooterNav />
    </div>
  );
};

export default WalkPage;
