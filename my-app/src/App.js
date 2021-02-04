import React from 'react';
import './App.css';
//import {restClient} from "polygon.io";
import { Button, Container, Row, Col, Table, InputGroup, FormControl, Card } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "sandbox_c0b2k4n48v6sc0gs2p8g" // Replace this
//actual: c0b2k4n48v6sc0gs2p80
const finnhubClient = new finnhub.DefaultApi();

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: Math.random() },
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
      { category: 'E', value: Math.random() },
    ],
  },
];


function App() {

 


function testStock(){

  console.log("clicked");

  finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
    console.log(data)
});

 //const rest = restClient("S_QPT2wNwIkT_aYgmU4gyA_ZV3cCfzV_zS_M_4");
  // rest.forex
  // .previousClose()
  // .then(res => console.log(res))
  // .catch(err => console.log(err));
}


  

  return (
    <div className="App">
      <Container fluid>
        <Row><Col><Card className="m-2">
  <Card.Header>BCONomics</Card.Header></Card></Col></Row>
  <Row><Button onClick={testStock}>Test</Button></Row>
        {/* <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Stock</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="AAPL"
                aria-label="AAPL"
                aria-describedby="basic-addon1"
              />
            </InputGroup></Col>
        </Row> */}
        <Row>
          <Col><Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <th>ROIC</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Sales</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>EPS</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Equity</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Cash</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table></Col>
        </Row>
        <Row>
          <Col><InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Sticker Price</InputGroup.Text>
            </InputGroup.Prepend>

            <InputGroup.Append>
              <InputGroup.Text>205.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>MOS Price</InputGroup.Text>
              </InputGroup.Prepend>

              <InputGroup.Append>
                <InputGroup.Text>70.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup></Col></Row>
        <Row>
          <Col>
            <LineChart width={500} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
              <YAxis dataKey="value" />
              <Tooltip />
              <Legend />
              {series.map(s => (
                <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
              ))}
            </LineChart>
          </Col>
          <Col><LineChart width={500} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            {series.map(s => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart></Col>
          <Col><LineChart width={500} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            {series.map(s => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart></Col></Row>

      </Container>
    </div>
  );
}

export default App;
