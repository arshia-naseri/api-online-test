import React,{useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [weather,setWeather] = useState()
  const [load,setLoad] = useState(false)

  useEffect(() =>{
    console.log('use Effect activated')
    getCurrentCondition()
  },[])

  function getCurrentCondition(){
    let cancel
    axios.get('http://dataservice.accuweather.com/currentconditions/v1/55488?apikey=AGGlEh0AJojABzAfRuCHS7obG6AB9arV&details=true',{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setWeather(res.data[0])
      setLoad(true)
    })


    return () => cancel()
  }

  if(!load) { return ('loading still...')}

  console.log(weather)
  return (
    <>
    <div>Hello world</div>
    <div>The Tempeture is {weather.Temperature.Metric.Value}C</div>
    </>
  );
}

export default App;
