import React from 'react';
import { HeroList } from '../Heroes/HeroList'

export const DcScreen = ({publisher}) => {

    return (
        <div>
            <h1>DcScreen</h1>
            <hr />

            <HeroList publisher='DC Comics' />

        </div>
    )
}
