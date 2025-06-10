import { computed, Injectable, Signal } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { convertPlanetResponse, Planet, PlanetDto } from "../models/planet.model";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly planetUrl = "https://swapi.info/api/planets";

    private planetsResource = httpResource<PlanetDto[]>(() => this.planetUrl);

    planets: Signal<Planet[]> = computed(() => {
      const value = this.planetsResource.value();
      return value ? convertPlanetResponse(value) : [];
    });
}