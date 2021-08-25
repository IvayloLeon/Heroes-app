import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../Data/heroes'
import { useForm } from '../../Hooks/useForm';
import { HeroeCard } from '../Heroes/HeroeCard';
import { getHeroesByName } from '../../Selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const {search:location} = useLocation();    
    const { q = '' } = queryString.parse(location);

    const initialState = {
        searchText: q
    }

    const [{searchText:inputValue}, handleInputChange] = useForm(initialState)

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault(); 
        history.push(`?q=${inputValue}`); 
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder='Find your hero'
                            className='form-control'    
                            name='searchText'
                            value={inputValue}
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    {(q === '') && <div className='alert alert-info'>
                        Search a hero   
                    </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}