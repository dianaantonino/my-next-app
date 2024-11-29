"use client";
import { useEffect, useState } from "react";

export default function CardList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
        const data = await response.json();

        const detailedPokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemonList(detailedPokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="Loading"
          style={{ width: "100px", height: "100px", animation: "spin 2s linear infinite" }}
        />
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    }}>
      {pokemonList.map((pokemon, index) => (
        
        <div key={index} role="card" style={{
          width: "250px",
          border: "2px solid #ffcc00",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "#fff",
        }}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{
            margin: "10px 0",
            textTransform: "capitalize",
          }}>
            {pokemon.name}
          </h3>
          <p>
            Base Experience: {pokemon.base_experience}
          </p>
          <div role="type">
            Type: {pokemon.types?.map((type) => type.type.name).join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
}
