import React from 'react';
import {SegmentList} from "./features/segments/SegmentList";
import {AddSegmentForm} from "./features/segments/AddSegmentForm";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <React.Fragment>
        <AddSegmentForm />
        <SegmentList />
      </React.Fragment>
    </div>
  );
}

export default App;
