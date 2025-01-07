import React from "react";

export function useEscapeKey(functionToRun) {

    React.useEffect(() => {
        function handleKeyDown(event) {
          if(event.code === 'Escape') {
            functionToRun();
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [functionToRun])

}