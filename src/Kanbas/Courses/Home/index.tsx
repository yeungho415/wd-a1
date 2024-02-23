import ModuleList from "../Modules/List";
function Home() {
    return (
      <div>
        <h2>Home</h2>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ flexGrow: 1 }}>
            <ModuleList />
          </div>
        </div>
      </div>
    );
  }
  export default Home;

