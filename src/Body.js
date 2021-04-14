import React, { useState } from "react";
import axios from "axios";
import image1 from "./images/employee.jpg";
import "./Body.css";

function Body() {
  const [input, setInput] = useState("");
  const [doms, setDoms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    try {
      setLoading(true);
      await axios
        .get(`https://subbuster.cyberxplore.com/api/find?domain=${input}`)
        .then((response) => {
          setDoms(response.data.data);
          setLoading(false);
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
        <div className="table-responsive m-0">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Id</th>
                <th scope="col">Updated_On</th>
                <th scope="col">Domain</th>
                <th scope="col">Sub-Domain</th>
                <th scope="col">Status Code</th>
              </tr>
            </thead>
            <tbody>
              {doms.slice(0, 30).map((dom, index) => (
                <tr key={dom._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{dom._id}</td>
                  <td>{dom.updatedon}</td>
                  <td>{dom.domain}</td>
                  <td>
                    <a href={dom.subdomain}>{dom.subdomain}</a>
                  </td>
                  <td>{dom.statuscode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {loading === true ? (
            <div className="d-flex justify-content-center">
              <div className="loader"></div>
              <h2>Loading..</h2>
            </div>
          ) : (
            <div className="d-flex justify-content-center m-0">
              <img className="welcome m-0" src={image1} alt="hi" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Body;
