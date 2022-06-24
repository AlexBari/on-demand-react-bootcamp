import React, { useState, useRef, useEffect } from 'react';
import NavMenu from '../../common/navMenu';
import { SidebarBlock, HamburgerSpan, SideBarNavWrapper } from './sidebarNavComponents';
import SearchBar from '../searchBar/searchBar';

const SidebarNav = () => {
  const [isSidebar, initSidebar] = useState(false)
  const node = useRef(null)
  const openSidebar = (isSidebar) => {
    return initSidebar(!isSidebar)
  }

  const trackSidebar = (e) => {
    if ( e.target.id === 'cross'
        || node.current.contains(e.target)) {
      return
    }
    initSidebar(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', trackSidebar)
    return () => {
      document.removeEventListener('mousedown', trackSidebar)
    }
  }, [])

  return (
    <SideBarNavWrapper>
      <header className="header">
        <nav className="navbar">
          <HamburgerSpan
            ref={node}
            onClick={() => {
              openSidebar(isSidebar)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isSidebar ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  id='cross'
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                  id='hamburger'
                />
              )}
            </svg>
          </HamburgerSpan>
        </nav>

        <SidebarBlock
          id='sidebar-block'
          ref={node}
          style={{ left: isSidebar ? '0' : '-260px' }}
        >
          <SearchBar header={'false'} />
          <NavMenu header={'false'} />
        </SidebarBlock>
      </header>
    </SideBarNavWrapper>
  )
}

export default SidebarNav;