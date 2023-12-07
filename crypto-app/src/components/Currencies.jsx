import React, { useState, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi.js";
import { Card, Row, Col } from "antd";
import "../Styles/currency.css";

function Currencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setcrypto] = useState(cryptoList?.data?.coins);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setcrypto(filterData);
  }, [cryptoList, search]);

  console.log(crypto);
  return (
    <>
      {!simplified && (
        <div className="search-item">
          <input
            type="text"
            placeholder="Search for Crypto currency"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="card-container">
        {crypto?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="cyrpto-card"
            key={currency.uuid}
          >
            <Link to={`/${currency.uuid}`}>
              <Card
              className="card"
                title={`${currency.rank} ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    width="30px"
                    height="30px"
                  />
                }
                hoverable
              >
                <p>Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily change : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Currencies;
