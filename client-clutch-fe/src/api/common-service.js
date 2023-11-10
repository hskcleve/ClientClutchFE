const getSecurityAnalysis = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    text: text,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch("https://client-clutch.vercel.app/api/security", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //console.log(result);
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};

const getSentimentAnalysis = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    text: text,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch("https://client-clutch.vercel.app/api/sentiment", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //console.log(result);
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};

const getFraudAnalysis = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    text: text,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch("https://client-clutch.vercel.app/api/fraud", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //console.log(result);
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};

const getComplianceConfidentialityAnalysis = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    text: text,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(
    "https://client-clutch.vercel.app/api/compliconfid",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      //console.log(result);
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};

const getReply = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    message: text,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(
    "https://client-clutch.vercel.app/api/generate_reply",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      //console.log(result);
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};

export {
  getSecurityAnalysis,
  getSentimentAnalysis,
  getFraudAnalysis,
  getComplianceConfidentialityAnalysis,
  getReply,
};
