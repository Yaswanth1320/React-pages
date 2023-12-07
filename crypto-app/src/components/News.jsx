import React, { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";
import { Row, Col, Card } from "antd";
import "../Styles/news.css";
import moment from "moment";
import { NEWS_API_KEY } from "../config/key";

function News({ simplified }) {
  const [loading, setLoading] = useState(false);
  const [cryptonews, setNews] = useState();
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState();

  useEffect(() => {
    const filterData = filterdata?.filter((news) =>
      news.title.toLowerCase().includes(search.toLowerCase())
    );
    setNews(filterData);
  }, [filterdata, search]);

  const options = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
    headers: {
      "X-RapidAPI-Key": NEWS_API_KEY,
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.request(options);
        setLoading(false);
        console.log(response.data.data);
        setNews(response.data.data);
        setFilterdata(response.data.data);
      } catch (error) {
        setLoading(true);
        console.error(error);
      }
    }
    fetchData();
  }, [setNews]);

  return (
    <>
      {!simplified && (
        <div className="search-item">
          <input
            type="text"
            placeholder="Search for News"
            onChange={(e) => setSearch(e.target.value)}
          />
          {loading && <SpinnerDotted className="loader" />}
        </div>
      )}
      <div className="news">
        {!loading && (
          <Row gutter={[48, 48]}>
            {cryptonews?.map((news, i) => (
              <Col xs={24} sm={24} lg={8} className="news-card" key={i}>
                <Card className="card" hoverable>
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <h4 className="news-title">{news.title}</h4>
                      <img
                        src={news.thumbnail}
                        alt="image"
                        height="90px"
                        width="180px"
                      />
                    </div>
                    <hr className="line" />
                    <div className="desc">
                      <p>{news.description}</p>
                    </div>
                    <p className="date">
                      {moment(news.createdAt).startOf("ss").fromNow()}
                    </p>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}
export default News;
