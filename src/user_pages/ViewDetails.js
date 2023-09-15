import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { config } from "./../Config";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import Booknow from "../user_components/Booknow";

function ViewDetails() {
  const userContextData = useContext(UserContext);

  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const getMovies = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/viewdetails/${id}`);
      if (movies) {
        setMovieData(movies.data.newmve);
        console.log(movies.data.newmve);

        // toast.success("Success");
      } else {
        // toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieData);
  console.log(movieData.mve_name);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div class="card mb-3 mt-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-3 d-none d-lg-flex ml-5 p-5">
          {movieData.map((movie) => {
            return (
              <div className="col-lg-3">
                <Card
                  style={{ width: "15rem", marginLeft: "10%", marginTop: "2%" }}
                >
                  <Card.Img variant="top" src={movie.mve_poster} />
                  <Card.Body>
                    <Card.Title>{movie.mve_name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">
            <h3 className="text-center">Movie Details</h3>
            <table class="table">
              <thead></thead>
              <tbody>
                {movieData.map((mve) => {
                  console.log(mve);
                  return (
                    <>
                      <tr>
                        <th scope="col">Movie Name </th>
                        <td>{mve.mve_name}</td>
                      </tr>
                      <tr>
                        <th scope="col">Director</th>
                        <td>{mve.director}</td>
                      </tr>
                      <tr>
                        <th scope="col">Actor</th>
                        <td>{mve.actor}</td>
                      </tr>
                      <tr>
                        <th scope="col">Actress</th>
                        <td>{mve.actress}</td>
                      </tr>
                      <tr>
                        <th scope="col">Description</th>
                        <td>{mve.description}</td>
                      </tr>
                      <tr>
                        <th scope="col">Trailer</th>
                        <td>
                          <button
                            type="button"
                            onClick={() =>
                              navigate(`/mainpage/viewtrailer/${mve._id}`)
                            }
                            className="text-danger fw-bold btn btn-link"
                            style={{ fontWeight: "700" }}
                          >
                            Show Trailer
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            {userContextData.isvisible ? (
              <Booknow mve_id={id} />
            ) : (
              <table>
                <tbody>
                  <th
                    scope="col"
                    className=" text-danger"
                    style={{ fontSize: "160%" }}
                  >
                    <i> Please login to book ticket </i>
                  </th>
                  <td>
                    <Link
                      className="btn-danger display-block"
                      to={"/auth/login"}
                      style={{ height: 40, width: 100 }}
                    >
                      Login
                    </Link>
                  </td>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
