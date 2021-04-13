import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

function Body() {
  const [input, setInput] = useState("");
  const [doms, setDoms] = useState([]);

  useEffect(() => {
    axios
      .get("https://subbuster.cyberxplore.com/api/find?domain=lpu.in")
      .then((response) => {
        setDoms(response.data.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);

  const fetchdata = async () => {
    try {
      await axios
        .get(`https://subbuster.cyberxplore.com/api/find?domain=${input}`)
        .then((response) => {
          setDoms(response.data.data);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Server Problem");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    fetchdata();
  };
  return (
    <div className="jumbotron p-0 m-0 bg-white">
      <form
        className="d-flex justify-content-center mt-4 mb-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search domain eg- google.com"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
        />
        <button className="btn btn-primary butt" type="submit">
          Search
        </button>
      </form>
      {doms.length !== 0 ? (
        <div className="container-fit description-box">
          {doms.slice(0, 30).map((dom, index) => (
            <div key={index} className="d-flex flex-column box">
              <p className="repo_no">
                RESULT <span className="no">{index + 1}</span>
              </p>
              <div className="box2">
                <p>User Id : {dom._id}</p>
                <p>Updated-On : {dom.updatedon}</p>
                <p>Domain : {dom.domain}</p>

                <p>
                  Sub-Domain :
                  <a href={dom.subdomain} className="url">
                    {dom.subdomain}
                  </a>
                </p>
                <p>Status-Code : {dom.statuscode}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center">
            <div className="loader"></div>
          </div>
          <div className="d-flex justify-content-center">
            <h2>Loading Please Wait....</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
