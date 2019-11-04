import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      <center>
        <br></br>
        <h6>Search Results</h6>
      </center>
      {results.map(result => (
        <div
          className="card"
          style={{
            width: "20%",
            margin: "15px 2.5%",
            float: "left",
            height: "225px",
            backgroundColor: "#7e57c2",
            color: "white"
          }}
        >
          <p
            className="card-text"
            style={{ textAlign: "center", margin: "10px", fontSize: "12px" }}
          >
            {result.value === null ? "Value unknown" : "$" + result.value}
          </p>
          <div
            className="card-body"
            style={{ overflow: "scroll", backgroundColor: "white" }}
          >
            <h6 className="card-title" style={{ color: "black" }}>
              <b>Question:</b> {result.question}
            </h6>
            <p className="card-subtitle mb-2 text-muted">
              <b>Answer:</b> {result.answer}
            </p>
          </div>
          <p
            className="card-text"
            style={{ textAlign: "center", margin: "10px", fontSize: "12px" }}
          >
            {new Date(result.airdate).toDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Results;
