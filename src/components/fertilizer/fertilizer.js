import PreHeader from "../preheader/preheader";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import React, { useState } from "react";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");
 function onSearchSubmit(term) {
    setLoad(true);
    console.log("Clicked");
    let url = "http://127.0.0.1:5000/fertilizer-predict";
    let body = JSON.stringify({
      "soil-type": soilType,
      "crop-type": cropType,
      "moisture": parseFloat (moisture),
      "nitrogen": parseFloat (nitrogen),
      "phosphorous": parseFloat (phosphorus),
      "pottasium": parseFloat (potassium),
      "city": city,
    });
    console.log("body", body);
    try{
       fetch(url, {
        // mode: "no-cors",
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
        body: body

      }).then(response => response.json())
        .then(data => {
          let main_data = data["data"];
          setPrediction(main_data['prediction']);
          setInformation(main_data['info']['info']);
          setApplication(main_data['info']['application']["1"]+ " " + main_data['info']['application']["2"]);
          setSpecification(main_data['info']['specifications']);
          console.log('res',data); // gives SyntaxError: Unexpected end of input
        }).catch((error) => {
          console.log(error)
        });
    }catch (e) {
      console.log(e)
    }

   setLoad(false);



  }

  return(
    <>
      <PreHeader />
      <Header />
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">Predict the Fertilizer for your crop<br /></p>

            <input onChange={(e)=> setSoilType(e.target.value)} className="w-3/5 my-2 " type="text" placeholder="Enter soil type" />
            <input onChange={(e)=> setCropType(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter crop type" />
            <input onChange={(e)=> setMoisture(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter moisture value" />
            <input onChange={(e)=> setNitrogen(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter nitrogen value" />
            <input onChange={(e)=> setPhosphorus(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter phosphorous value" />
            <input onChange={(e)=> setPotassium(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter potassium value" />
            <input onChange={(e)=> setCity(e.target.value)} className="w-3/5 my-2" type="text" placeholder="Enter city" />

            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button onClick={
               () =>  onSearchSubmit("aaa")
                } type="button"
                        className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get
                  Fertilizer Recommendation
                </button>
              </div>
            </div>

          </div>


        </div>
        <div>
          {load ? <div className="grid place-items-center my-14  ">loading </div> : <div></div>}
          {prediction !== '' ? <div className="grid place-items-center my-14 text-center ">
          <p className="font-bold my-3">Fertilizer Predicted: </p>{prediction}
            <p className="font-bold my-3">Information</p>{information}
            <p className="font-bold my-3">Application</p>{application}
            <p className="font-bold my-3">Specification</p>{specification}
          </div> : <div></div>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fertilizer;