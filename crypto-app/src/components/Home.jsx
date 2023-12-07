import React from "react";
import { SpinnerDotted } from "spinners-react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi.js";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Currencies from "./Currencies.jsx";
import News from "./News.jsx";

const { Title } = Typography;
function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  
  return (
    <div className="home">
      {isFetching && (
        <SpinnerDotted color="#0486d2" className="loader" size={70} />
      )}
      {data && (
        <>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>
          <Row className="stat-container">
            <Col span={12}>
              <Statistic
                title="Total CryptoCurrencies"
                value={globalStats.total}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Market Cap"
                value={millify(globalStats.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total 24h Volume"
                value={millify(globalStats.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </Col>
          </Row>
          <div className="currency-container">
            <div className="headings">
              <h1 className="title">Top 10 Cryptocurrencies in the world</h1>
              <Link to="/cryptocurrencies">Show more</Link>
            </div>
            <Currencies simplified/>
          </div>
          <div className="news-container">
            <div className="headings">
              <h1 className="title">Latest Crypto News</h1>
              <Link to="/news">Show more</Link>
            </div>
            <News simplified/>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
