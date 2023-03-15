import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

const Pokemon = () =>
{
    const [pokemon, setPokemon] = useState('');
    const [lista, setLista] = useState([]);

    const navigate = useNavigate();

    const obtenerPokemon = async () =>
    {
        const url = 'https://pokeapi.co/api/v2/pokemon';

        const response = await fetch(url);

        const data = await response.json();

        let select = [];

        data.results.map((pokemon) =>
        {
            select.push(
            {
                name: pokemon.name
            });
        });

        setLista(select);
    }

    useEffect(() =>
    {
        obtenerPokemon();
    }, []);

    const verDetalle = () =>
    {
        navigate(`/pokemon/${pokemon}`);
    }

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{ margin: '0.5em' }}>Selecciona un Pokémon</h1>
            <Form.Select onChange={(e) => setPokemon(e.target.value)} style={{ width: '15%' }} defaultValue>
                <option value="">Pokémon</option>
                {
                    lista.map((pokemon) =>
                        <option
                            key={pokemon.name}
                            value={pokemon.name}
                        >
                            {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}
                        </option>)
                }
            </Form.Select>
            <Button variant="dark" onClick={() => verDetalle()} style={{ margin: '1em' }}>Ver Detalle</Button>
        </div>
    );
}

export default Pokemon;
