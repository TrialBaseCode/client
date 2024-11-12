import PropTypes from "prop-types";
// import Nav from "../component/Nav";
import Container from "@mui/material/Container";
function ProtectedRoute({ children }) {
  return (
    <>
      <div className="Layout">
        <div className="layoutContainer">
          <header>header</header>
          <main>
            <div className="navBar">
              <div className="content-container">{children}</div>
            </div>
          </main>
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
