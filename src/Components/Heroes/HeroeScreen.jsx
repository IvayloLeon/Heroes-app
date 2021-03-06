import React, {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import { getHeroeById } from '../../Selectors/getHeroById';

export const HeroeScreen = ({history}) => {
    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId])
    // const hero = getHeroeById(heroeId);

    if(!hero){
        return <Redirect to="/" />
    }

    const {
        superhero, 
        publisher, 
        alter_ego, 
        first_appearance, 
        characters
    } = hero

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack();
        }
    }

    return (
        <div className='row mt-5 animate__animated animate__fadeIn'>
            <div className="col-4">
                <img 
                    src={require(`../../assets/heroes/${heroeId}.jpg`).default} 
                    className='img-thumbnail'
                    alt={superhero} />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'><b>Alter ego:</b> {alter_ego}</li>
                    <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
                    <li className='list-group-item'><b>First appearance:</b> {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className='btn btn-outline-info'
                    onClick={handleReturn}     
                >
                    Go back
                </button>


            </div>
        </div>
    )
}