import { StorageListener } from "../components/storage-listener";
import { StorageWriter } from "../components/storage-writer";

export function StorageExercise(){
  return (
    <>
      <StorageWriter  keyProp="username"/>
      <br />
      <StorageListener keyProp="username"/>
    </>
  )
}
