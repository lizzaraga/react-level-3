import PropTypes from 'prop-types'
import { useStorage } from '../hooks/useStorage'

StorageWriter.propTypes = {
  keyProp: PropTypes.string.isRequired
}
export function StorageWriter({keyProp}){
  const [value, setValue] = useStorage({key: keyProp})

  return (
    <>
    <p>Update the value which have this key : <b>{keyProp}</b></p>
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
    </>
  )
}
