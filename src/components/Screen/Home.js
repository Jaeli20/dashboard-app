import React from "react";
import Nav from "../Navigation/Nav";
import NewProjectsTable from "../Particles/NewProjectsTable";
function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid  ">
        <div className="row g-3 my-2 ">
          <h1 className="text-center fs-1 text-white">
            Informe global de proyectos
          </h1>

          <div className="col-md-3 p-1 mx-auto">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3> <p className="fs-5">Abiertos</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1 mx-auto">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2450</h3>
                <p className="fs-5">Completados</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-1 mx-auto">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2250</h3> <p className="fs-5">Cerrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-start fs-1 text-white p-3">Nuevos proyectos</h1>
          </div>
        </div>
        <NewProjectsTable />
      </div>
    </div>
  );
}
export default Home;
