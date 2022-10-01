
import './App.css';
import {Collapse, Typography} from "antd"

function App() {
  return (
    <div className="App">
     
     
      <Collapse accordion={true}>
        
        
        <Collapse.Panel header="This is a panel 1">
          <Typography.Text>This is a content of panel 1</Typography.Text>
        </Collapse.Panel>

         <Collapse.Panel header="This is a panel 1">
          <Typography.Text>This is a content of panel 1</Typography.Text>
        </Collapse.Panel>

         <Collapse.Panel header="This is a panel 1">
          <Typography.Text>This is a content of panel 1</Typography.Text>
        </Collapse.Panel>


      </Collapse>
     
    </div>
  );
}

export default App;








