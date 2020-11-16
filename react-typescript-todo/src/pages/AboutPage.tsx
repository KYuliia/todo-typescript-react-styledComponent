import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Styled from './styled'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Info Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
                vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
                voluptatum.
            </p>
            <Styled.Button>
                <div onClick={() => history.push('/')}>
                    Back
                </div>
            </Styled.Button>
        </>
    )
}