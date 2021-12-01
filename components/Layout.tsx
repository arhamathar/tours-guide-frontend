import React from 'react'
import Navbar from 'components/Navbar'

interface IProps {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout
