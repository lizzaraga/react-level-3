import "./App.css";

import { DialogExercise } from "./exercises/dialog-exercise";
import { DropdownListExercise } from "./exercises/dropdown-list-exercise";
import { StorageExercise } from "./exercises/storage-exercise";


function App() {
  
  return (
    <>
      <main id="exercises">
        <section id="exercise-1">
          <h3>EXERCISE #1 - Create a generic localStorage handler usable by React function component</h3>
          <StorageExercise/>
        </section>
        <br />
        <hr />
        <br />
        <section id="exercise-2">
          <h3>EXERCISE #2 - Create a generic dialog component that can be customized with any content</h3>
          <DialogExercise/>
        </section>
        <br />
        <hr />
        <br />
        <section id="exercise-3">
          <h3>EXERCISE #3 - Create a generic auto-filter dropdown component to filter any kind of data</h3>
          <DropdownListExercise/>
        </section>
        
      </main>
      
    </>
  );
}

export default App;
