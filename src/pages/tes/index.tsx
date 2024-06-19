import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducer"; // Adjust import path and type as needed
import { fetchDataRequest } from "../../redux/action/user"; // Adjust import path as needed

interface Props {
  data: any;
  fetchDataRequest: () => void;
}

const MyComponent: React.FC<Props> = ({ data, fetchDataRequest }) => {
  useEffect(() => {
    fetchDataRequest();
    console.log(data)
  }, []);

  return (
    <div className="app-container">
      <h1>Redux Saga App</h1>
      <div className="data-container">
        {data.pending ? (
          <div className="loading">
            {data.error ? `Error: ${data.error}` : "Loading data..."}
          </div>
        ) : (
          <div className="data">{JSON.stringify(data.data)}</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  data: state.user,
});

const mapDispatchToProps = {
  fetchDataRequest, // Map action creator to props
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
