import React, { useEffect,useState } from 'react';
import Highcharts  from 'highcharts'
import './Dashboard.css'
import RePieChart from './RePieChart';
// import StockDataFetcher from './StockDataFetcher';

const Dashboard = () => {

//   const fetchCompanytechnical  = () => {
    const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.iex.cloud/v1/data/CORE/IEX_DEEP/${symbol}?token=pk_85f727a2802d4a7d9de64485baeb569b`);
    //   https://api.iex.cloud/v1/data/CORE/VOLUME_BY_VENUE/
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const price = data && data[0] && data[0].trades? data[0].trades.map((t) => t.price): [];
  console.log("price-->",price);
  const time = data && data[0] && data[0].trades? data[0].trades.map((tm) => tm.timestamp):[];
  console.log("time-->",time);

  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };
  
  // Example usage
  const timestamps = time;
  ;
  
  const readableTimes = timestamps.map(convertTimestampToTime);
  console.log("readableTimes-->",readableTimes);



//   useEffect(() => {
//     if (symbol) {
//       fetchData();
//     }
//   }, [symbol]);

//   }
  const chart = () =>{


    Highcharts.chart('ch', {
      title: {
        text: 'Line Chart',
        style: {
          color: '#FFF'
        }
      },
      chart: {
        backgroundColor: '#177DBF'
      },
      xAxis: {
        categories: readableTimes,
        // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      xAxis: {
        labels: {
          style: {
            color: '#FFF'
          }
        },
        title: {
          text: 'X Axis'
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#FFF'
          }
        },
        title: {
          text: 'Values'
        }
      },
      series: [{
        name: 'Series 1',
        data: price,
        //[10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120]
      }]
    });
  }


  useEffect(() => {
    fetchData();
    chart()
  }, [symbol]);
  return (
    <>        
        
      <div className='dashboard'>
      <div>
        <h2>
             Enter Company's Symbol:
            <input type="text" value={symbol} onChange={handleSymbolChange} />
        </h2>
        {/* <button onClick={fetchData}>Fetch Data</button> */}
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Data for company symbol: {symbol}</h2>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      )}
      <div className="dashboard-container">
        <div className="left-board">
          <div className="head">
            <h1>APL Apollo Tubes Ltd</h1>
          </div>
          <div className="table">
            <div className="l-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
            <div className="c-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
            <div className="r-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="right-dashboard">
          <div className="news-panel">
            <h4>NEWS</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, excepturi dolorum tenetur facere corrupti at quam autem consequatur dolor non praesentium vel.</p>
          </div>
        </div> */}
        {/* <div className="upper-body">
                <h1>Utique Enterprises Ltd</h1>
            </div>
            <div className="lower-table"></div> */}
      </div>
      <div id="ch" style={{ width: '100%', height: '50%' }}></div>
      <RePieChart />
    </div>
    </>
  );
}

export default Dashboard;

