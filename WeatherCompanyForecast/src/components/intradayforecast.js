import React, { useState, useEffect} from 'react';
import { Button, TextInput, Form, Loading, ToastNotification } from 'carbon-components-react';
import {DataTable,Table,TableHead,TableRow,TableHeader,TableBody,TableCell,TableContainer,Select,SelectItem} from 'carbon-components-react';

function Intradayforecast({maplat, maplong}) {

  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [geocodeobj, setGeocodeobj] = useState({});
  const [isLoading,setLoading] = useState(false);
  
  const [errtext, seterrtext] = useState('A valid value is required');
  const [buttonstate, setbuttonstate] = useState(false);
  const [lterrstate, setlterrstate] = useState(false);
  const [lngerrstate, setlngerrstate] = useState(false);

  const [err1status, seterr1status] = useState(false); 
  const [err2status, seterr2status] = useState(false);
  const [err3status, seterr3status] = useState(false);

  const [lang,setlang] = useState('en-US');
  const [day,setday] = useState('7');
  const [unit,setunit] = useState('m');

      useEffect(() => {

    function autofill() {
      setlatitude(maplat);
      setlongitude(maplong);
      setlterrstate(false);
      setlngerrstate(false)
      setbuttonstate(false)
    }
    autofill();
  }, [maplat,maplong]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
      

  if (latitude && longitude) {
      
        const geocode2 = async() => {

        try{
        
          let apikey;

          if(process.env.REACT_APP_mode === "dev"){
            apikey = process.env.REACT_APP_WEATHER_API_KEY;
          }
          else{

           let keyresponse = await fetch('/getapikey');
           let keyresult = await keyresponse.json();
           apikey = keyresult["apikey"];

          }

            let response = await fetch(`https://api.weather.com/v1/geocode/${latitude}/${longitude}/forecast/intraday/${day}day.json?units=${unit}&language=${lang}&apiKey=${apikey}`)
            let result = await response.json();

            setGeocodeobj({...result});

            setLoading(false);

        }
        catch(error){
            seterr2status(true);
            setLoading(false);
        }

        }
      geocode2();
      setlatitude('');
      setlongitude('');

      }
    
      else {
      seterr1status(true);
      setLoading(false);
    }
  };

const headers = [
  {
    key: 'day',
    header: 'Day of Week',
  },
  {
    key: 'temporal',
    header: 'Day Part',
  },
    {
    key: 'temp',
    header: 'Temperature',
  },
    {
    key: 'wspd',
    header: 'Wind Speed',
  },
    {
    key: 'wx',
    header: 'Weather Summary',
  },
];


const validLatf = (e) => {

        if(!e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)){
              setlterrstate(true)
              seterrtext("Only valid co-ordinates allowed. No characters");
              setbuttonstate(true)
           }
        else{
            setlterrstate(false)
            setbuttonstate(false)
        }        
    
        setlatitude(e.target.value)
    
    
}
const validLongf = (e) => {

        if(!e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)){
              setlngerrstate(true)
              seterrtext("Only valid co-ordinates allowed. No characters");
              setbuttonstate(true)
           }
        else{
            setlngerrstate(false)
            setbuttonstate(false)
        }        

        setlongitude(e.target.value)
    
    
}

function err1closef() {
  seterr1status(false);
}
function err2closef() {
  seterr2status(false);
}
function err3closef() {
  seterr3status(false);
}
const langset = [
  {
    id: 'am-ET',
    text: 'Amharic - (Ethiopia)'
  },
  {
    id: 'ar-AE',
    text: 'Arabic - (United Arab Emirates) '
  },
  {
    id: 'az-AZ',
    text: 'Azerbaijani - (Azerbaijan)'
  },
  {
    id: 'bg-BG',
    text: 'Bulgarian - (Bulgaria)'
  },
    {
    id: 'bn-BD',
    text: 'Bengali, Bangla - (Bangladesh)'
  },
  {
    id: 'en-US',
    text: 'English - (United States of America)'
  },
    {
    id: 'bn-IN',
    text: 'Bengali, Bangla - (India)'
  },
    {
    id: 'hi-IN',
    text: 'Hindi - (India)'
  },
    {
    id: 'mr-IN',
    text: 'Marathi - (India)'
  },
    {
    id: 'pa-IN',
    text: 'Punjabi - (India)'
  },
    {
    id: 'ta-IN',
    text: 'Tamil - (India)'
  },
  {
    id: 'te-IN',
    text: 'Telugu - (India)'
  },
      {
    id: 'gu-IN',
    text: 'Gujarati - (India)'
  },
        {
    id: 'kn-IN',
    text: 'Kannada - (India)'
  }      
];

const unitset = [
  {
    id: 'm',
    text: 'Metric system'
  },
  {
    id: 'e',
    text: 'Imperial system'
  },
     
];
const dayset = [
  {
    id: '3',
    text: '3-day'
  },
  {
    id: '5',
    text: '5-day'
  },
    {
    id: '7',
    text: '7-day'
  },
    {
    id: '10',
    text: '10-day'
  },
    {
    id: '15',
    text: '15-day'
  },
     
];
const handlelangchoice = (event) => {
      //console.log(event.target.value);
      setlang(event.target.value);
}
const handleunitchoice = (event) => {
      //console.log(event.target.value);
      setunit(event.target.value);
}
const handledaychoice = (event) => {
      //console.log(event.target.value);
      setday(event.target.value);
}
  return (
    <>

    <Form onSubmit={handleSubmit}>

       <div className="TextArea" >
      <TextInput id={'latitude'} labelText = {'Latitude*'} invalid = {lterrstate} invalidText = {errtext} helperText="Add valid co-ordinates." placeholder = {'Latitude'} size = 'lg' value={latitude} onChange={validLatf} />
       </div>

       <div className="TextArea" >
      <TextInput id={'longitude'} labelText = {'Longitude*'} invalid = {lngerrstate} invalidText = {errtext} helperText="Add valid co-ordinates." placeholder = {'Longitude'} size = 'lg' value={longitude} onChange={validLongf} />
      </div>

      <div className="TextArea" >
              <Select labelText="Choose number of days" size = "lg" value={day} onChange={handledaychoice}>
          {dayset.map((item, i) => (
              <SelectItem value={item.id} key={i} text = {item.text} />
                    ))}
      </Select>
      </div>

      <div className="TextArea" >
        <Select labelText="Choose units of measure" size = "lg" value={unit} onChange={handleunitchoice}>
          {unitset.map((item, i) => (
              <SelectItem value={item.id} key={i} text = {item.text} />
                    ))}
       </Select>
      </div>

        <div className="TextArea" >
        <Select labelText="Choose Language" size = "lg" value={lang} onChange={handlelangchoice}>
          {langset.map((item, i) => (
              <SelectItem value={item.id} key={i} text = {item.text} />
                    ))}
          </Select>
        </div>

      
      <div className="CButtonArea" >
        <Button type="submit" disabled = {buttonstate}> Get Intraday Forecast</Button>
      </div>

      </Form>

  {err1status && 
    <ToastNotification
        iconDescription="Close notification"
        subtitle={<span>Latitude, Longitude  values cannot be empty</span>}
        timeout={3000}
        onClose = {err1closef}
        title="Error Notification"
      />
      }
  {err2status && 
    <ToastNotification
        iconDescription="Close notification"
        subtitle={<span>Server cannot be reached</span>}
        timeout={3000}
        onClose = {err2closef}
        title="Error Notification"
      />
      }
  
  {err3status && 
    <ToastNotification
        iconDescription="Close notification"
        subtitle={<span>No data results available</span>}
        timeout={3000}
        onClose = {err3closef}
        title="Error Notification"
      />
      }

      <Loading active = {isLoading} description="Active loading indicator" withOverlay={true}/>


      {/* {JSON.stringify(geocodeobj)} */}

      {geocodeobj.forecasts && 
         <div className = "TableDisplay">
              {geocodeobj.forecasts && 
          
          <DataTable rows={geocodeobj.forecasts} headers={headers}>
              {({ rows, headers, getHeaderProps}) => 
            (
              <TableContainer title="Intraday Forecast Results">
                <Table>
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {geocodeobj.forecasts.map((row, index) => {
                return (
                    
                      <TableRow key={index} >

                          <TableCell>{row.dow}</TableCell>
                          <TableCell>{row.daypart_name}</TableCell>
                          <TableCell>{row.temp}</TableCell>
                          <TableCell>{row.wspd}</TableCell>
                          <TableCell>{row.phrase_32char}</TableCell>
                      
                      </TableRow>
                      

                );
                })}
                  </TableBody>
                </Table>
                </TableContainer>
            )
                }
          </DataTable>}

        </div>}  
        
    </>
  );
};

export default Intradayforecast;