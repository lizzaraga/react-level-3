import { useState } from "react";
import Dialog from "../components/dialog";
import { useDialog } from "../hooks/useDialog";

export function DialogExercise() {
  const [useAsModal, setUseAsModal] = useState(true);
  const { dialogRef, showOverlay, closeDialog, showDialog } = useDialog({
    showOverlay: useAsModal,
  });
  return (
    <>
      <div>
        <br />
        <label htmlFor="useAsModal">
          <input
            name="useAsModal"
            id="useAsModal"
            type="checkbox"
            checked={useAsModal}
            onChange={(e) => setUseAsModal(e.target.checked)}
          />{" "}
          Use Dialog as Modal
        </label>
        <br />
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          <button onClick={showDialog}>Open Modal</button>
          <button onClick={closeDialog}>Close Modal</button>
        </div>
      </div>
      <Dialog
        showOverlay={showOverlay}
        onClose={closeDialog}
        ref={dialogRef}
        header={() => <h2>Welcome User</h2>}
        footer={() => (
          <div>
            <button onClick={closeDialog} style={{ padding: "0.8rem 1.2rem" }}>
              Understood !
            </button>
          </div>
        )}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          incidunt maxime dolores quidem exercitationem rerum.
        </p>
      </Dialog>
    </>
  );
}
