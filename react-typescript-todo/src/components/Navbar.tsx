import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styled';

export const Navbar: React.FC = () => (
    <nav>
        <Styled.Navbar className="nav-wrapper teal darken-1">
            <a href="/" className="brand-logo">My TypeScript Todo App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo List</NavLink></li>
                <li><NavLink to="/about">Info</NavLink></li>
            </ul>
        </Styled.Navbar>
    </nav>
)