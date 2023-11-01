import { useStorage } from "../hooks/useStorage"
import PropTypes from "prop-types"

StorageListener.propTypes = {
  keyProp: PropTypes.string.isRequired
}
export function StorageListener ({keyProp}){
  const  [value] = useStorage({key: keyProp})
  return (
    <>
      <p style={{borderLeft: "4px solid", padding: '0 0.8rem'}}>
        <b>{keyProp}</b> listener value = <b>{value}</b>
      </p>
    </>
  )
}
