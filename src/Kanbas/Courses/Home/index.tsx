import ModuleList from "../Modules/List";
function Home() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-8">
        <h2>Home</h2>
            <ModuleList />
          </div>

          <div className="col-4">
          <div>
            <h2>Status</h2>
            <button className="btn btn-light">Unpublish</button>
            <button className="btn btn-success">Publish</button>
            <br />
            <button className="btn btn-light">Import Existing Content</button>
            <br />
            <button className="btn btn-light">Import From Commons</button>
            <br />
            <button className="btn btn-light">Choose Home Page</button>
            <br />
            <button className="btn btn-light">View Course Stream</button>
            <br />
            <button className="btn btn-light">New Announcement</button>
            <br />
            <button className="btn btn-light">New Analytics</button>
            <br />
            <button className="btn btn-light">View Course Notifications</button>
            <br />
          </div>
        </div>
        </div>
      </div>
    );
  }
  export default Home;

