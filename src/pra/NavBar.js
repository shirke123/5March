import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "" className = "navbar-brand">
                          Home
                        </a>

                        <a href = "" className = "navbar-brand">
                          About
                        </a>

                        <a href = "" className = "navbar-brand">
                          Service
                        </a>
                        <a href = "" className = "navbar-brand">
                          Contact
                        </a>
                    </div>
                    
                </nav>
            </header>
            
          
    </div>
  )
}
