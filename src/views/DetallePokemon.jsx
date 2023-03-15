import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from 'react-bootstrap';

const DetallePokemon = () =>
{
    const [pokemon, setPokemon] = useState({});
    const [cargando, setCargando] = useState(true);

    const { name } = useParams();
 
    const obtenerPokemon = async () =>
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

        const response = await fetch(url);

        const data = await response.json();

        setPokemon(data);
        setCargando(false);
    }

    useEffect(() =>
    {
        obtenerPokemon();
    }, [])

    return (
        !cargando ?
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '2em'
                }}
            >
                <Card>
                    <Card.Header>
                        <img src={pokemon.sprites.other['official-artwork']['front_default']} alt="image" style={{ maxHeight: '15em' }}></img>
                    </Card.Header>
                </Card>
                <div style={{ padding: '2em' }}>
                    <p>
                        <strong>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</strong>
                    </p>
                    <ul>
                        <li>{pokemon.stats[0]['stat']['name']}: <strong>{pokemon.stats[0]['base_stat']}</strong></li>
                        <li>{pokemon.stats[1]['stat']['name']}: <strong>{pokemon.stats[1]['base_stat']}</strong></li>
                        <li>{pokemon.stats[2]['stat']['name']}: <strong>{pokemon.stats[2]['base_stat']}</strong></li>
                        <li>{pokemon.stats[3]['stat']['name']}: <strong>{pokemon.stats[3]['base_stat']}</strong></li>
                        <li>{pokemon.stats[4]['stat']['name']}: <strong>{pokemon.stats[4]['base_stat']}</strong></li>
                        <li>{pokemon.stats[5]['stat']['name']}: <strong>{pokemon.stats[5]['base_stat']}</strong></li>
                    </ul>
                </div>
            </div> : ''
    );
}

export default DetallePokemon;
