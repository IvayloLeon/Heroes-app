import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../Selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {heroes.map(hero => {
                return <HeroeCard
                    key={hero.id}
                    {...hero}
                />
            })}
        </div>
    )
}