import { useEffect, useState } from "react"
import { DesktopHeader } from "./DesktopHeader/DesktopHeader"
import { MobilleHeader } from "./MobilleHeader/MobilleHeader"

function Header() {
    const [ viewPort, setViewPort ] = useState(window.innerWidth)

    useEffect(() => {
     function handleResize() {
      setViewPort(window.innerWidth)
     }
     window.addEventListener('resize', handleResize);
    }, [])

    return (
      <>
       { viewPort > 1000 ? <DesktopHeader /> : <MobilleHeader/>}
      </>
    )
}

export { Header }