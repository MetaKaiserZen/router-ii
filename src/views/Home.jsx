const Home = () =>
{
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{ margin: '0.5em' }}>Bienvenido Maestro Pokémon</h1>
            <img src="/pokeball.png" alt="pokeball"></img>
        </div>
    );
}

export default Home;
