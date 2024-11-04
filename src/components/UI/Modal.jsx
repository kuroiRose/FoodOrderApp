import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, onClose, classes=''}){
    const dialogRef = useRef();

    useEffect(() => {
        const m = dialogRef.current;
        if(open){
            m.showModal();
        }
        return () => {
            m.close()
        }
    }, [open])

    return createPortal(
        <dialog ref={dialogRef} className={`modal ${classes}`} onClose={onClose}>
            {children}
        </dialog>, document.getElementById('modal')
    )
}