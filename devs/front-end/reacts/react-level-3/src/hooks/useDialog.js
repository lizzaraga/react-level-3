import { useRef, useCallback, } from "react"

export const useDialog = ({showOverlay}) => {
  const dialogRef = useRef() 

  const showDialog = useCallback(() => {
    if(dialogRef.current && (typeof dialogRef.current.showModal === 'function')){
      if(showOverlay) dialogRef.current.showModal()
      else dialogRef.current.setAttribute('open', true)
    }
    else throw new Error('dialogRef.current must be a dialog')
  }, [dialogRef, showOverlay])

  const closeDialog = useCallback((returnValue) => {
    if(dialogRef.current && (typeof dialogRef.current.close === 'function')){
      dialogRef.current.close(returnValue)
    }
    else throw new Error('dialogRef.current must be a dialog')
  }, [dialogRef])

  return {dialogRef, showOverlay, showDialog, closeDialog }
}
