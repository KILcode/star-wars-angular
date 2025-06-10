export interface PlanetDto {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Planet {
    name: string;
    population: string;
}

export function convertPlanet(response: PlanetDto): Planet {
    return {
        name: response.name,
        population: response.population
    }
}

export function convertPlanetResponse(response: PlanetDto[]): Planet[] { 
    return response.map((planet: PlanetDto) => convertPlanet(planet));
} 