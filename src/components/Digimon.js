import React, { useEffect, useState } from 'react';
import { GetDigimon } from '../helpers/GetDigimon';
import { Loading } from './Loading';

export const Digimon = () => {

    const [digimons, setDigimons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)  // Después de 2 segundos se cancelara el componente Loading y mostrará el contenido correspondiente.
        }, 2000);
    }, [])

    return (
        <div className='text-center'>
            <hr />
            
            { loading && <Loading setLoading={setLoading}/> }  

            <GetDigimon setDigimons={setDigimons} />
            <div className='card-grid'>
                {digimons.map(digimon => {
                    return (
                        <div key={digimon.name} className='card'>
                            <p className='card-text'>{digimon.name}</p>
                            <img src={digimon.img} alt={digimon.name} ></img>
                            <p className='card-text'>{digimon.level}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
