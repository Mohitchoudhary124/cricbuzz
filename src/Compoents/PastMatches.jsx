import React, { useState, useEffect } from "react";
import { Card, Col, Row, Tabs } from "antd";

export default function PastMatches() {
  const [loading, setloading] = useState(false);

  const [pastMatches, setPastMatches] = useState([]);
  const apiData = async () => {
    setloading(true);
    const url = "https://cricket-live-data.p.rapidapi.com/series";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "49966f0e98msh089a0259b71962bp12874bjsn199e15731aaf",
        "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("api result data for cricket", result);
      setPastMatches(result?.results);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Test Matches",
      children: pastMatches[0]?.series.map((item) => {

        return (
          <Col span={8}>
            <Card
              title="Past Test Matches Details"
              style={{
                // width: 300,
                border: "1px solid black",
                margin: "5px 5px 5px 5px",
              }}
            >
              <p>{item.season}</p>
              <p>{item.series_name}</p>
              <p>{item.status}</p>
            </Card>
          </Col>
        );
      }),
    },
    {
      key: "2",
      label: "ODI",
      children: pastMatches[3]?.series.map((item) => {

        return (
          <Col span={8}>
            <Card
              title="Past ODI Matches Details"
              style={{
                // width: 300,
                border: "1px solid black",
                margin: "5px 5px 5px 5px",
              }}
            >
              <p>{item.season}</p>
              <p>{item.series_name}</p>
              <p>{item.status}</p>
            </Card>
          </Col>
        );
      }),
    },
    {
      key: "3",
      label: "T20I",
      children: pastMatches[1]?.series.map((item) => {

        return (
          <Col span={8}>
            <Card
              title="Past T20I Matches Details"
              style={{
                // width: 300,
                border: "1px solid black",
                margin: "5px 5px 5px 5px",
              }}
            >
              <p>{item.season}</p>
              <p>{item.series_name}</p>
              <p>{item.status}</p>
            </Card>
          </Col>
        );
      }),
    },
  ];
console.log(pastMatches)
  return (
    <div>
     <h3> Past matches   </h3>
      {loading===true?<div class="text-center"><div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div></div>:
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}
      
      {/* <div style={{display:"flex",alignContent:"center",justifyItems:"center"}}> */}
      {/* <Row> */}
      {/* </Row> */}
      {/* </div> */}
         </div>
  );
}
