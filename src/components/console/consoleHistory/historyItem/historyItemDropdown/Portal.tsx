import {useEffect} from 'react';
import {createPortal} from 'react-dom';

export type PortalProps<T> = {
    children: T;
    querySelector: string;
}

export const Portal = (props: PortalProps<any>) => {
  const {children, querySelector} = props;

  const mount = document.querySelector(querySelector);
  const el = document.createElement('div');

  useEffect(() => {
      if(mount) {
          mount.appendChild(el);
      }
    return () => {
          if(mount){
              mount.removeChild(el);
          }
        return;
    };
  }, [el, mount]);

  return createPortal(children, el);
};