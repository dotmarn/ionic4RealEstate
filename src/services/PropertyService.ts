import { Injectable } from "@angular/core";

import { Agent } from "src/data/Agent";
import { Realtor } from "src/data/Realtor";
import { Property } from "src/data/Property";
import { Randomizer } from "src/data/Helpers/Randomizer";
import { Coordinates } from "src/data/Coordinates";

@Injectable({
  providedIn: "root"
})
export class PropertyService {
  realtors: Realtor[] = [];
  agents: Agent[] = [];
  properties: Property[] = [];

  constructor() {}

  loadProperties() {
    var promises = [this.getRealtors(), this.getAgents(), this.getProperties()];

    Promise.all(promises).then((values: any) => {
      var realtors = <Realtor[]>values[0].realtors;
      var agents = <Agent[]>values[1].agents;
      var properties = <Property[]>values[2].properties;

      console.log(realtors);
      console.log(agents);
      console.log(properties);

      // assign realtors to agents
      agents.forEach(agent => {
        agent.realtor = realtors[Randomizer.random(0, realtors.length - 1)];
      });

      // assign agents to properties
      properties.forEach(property => {
        property.agent = agents[Randomizer.random(0, agents.length - 1)];
      });

      this.realtors = realtors;
      this.agents = agents;
      this.properties = properties;
    });
  }

  getProperties() {
    const promise = new Promise((resolve, reject) => {
      fetch("./assets/json/properties.json")
        .then(
          res => res.json(),
          error => {
            console.error(error);
            reject();
          }
        )
        .then(
          json => {
            var properties = [];

            json.forEach((jsonElement: any) => {
              const property = new Property();

              property.pictureUrls = jsonElement.pictureUrls;
              property.price = jsonElement.price;
              property.unitNo = jsonElement.unitNo;
              property.streetNo = jsonElement.streetNo;
              property.streetName = jsonElement.streetName;
              property.bedroomsCount = jsonElement.bedroomsCount;
              property.bathroomsCount = jsonElement.bathroomsCount;
              property.carSpacesCount = jsonElement.carSpacesCount;
              property.areaSize = jsonElement.areaSize;
              property.coordinates = new Coordinates(
                jsonElement.coordinates.lat,
                jsonElement.coordinates.lng
              );
              property.summaryTitle = jsonElement.summaryTitle;
              property.summary = jsonElement.summary;

              properties.push(property);
            });

            resolve({ properties: properties });
          },
          error => {
            console.error(error);
            reject();
          }
        );
    });

    return promise;
  }

  getRealtors() {
    const promise = new Promise((resolve, reject) => {
      fetch("./assets/json/realtors.json")
        .then(
          res => res.json(),
          error => {
            console.error(error);
            reject();
          }
        )
        .then(
          json => {
            var realtors = [];

            json.forEach((jsonElement: any) => {
              const realtor = new Realtor();

              realtor.name = jsonElement.name;
              realtor.pictureUrl = jsonElement.pictureUrl;
              realtor.streetNo = jsonElement.streetNo;
              realtor.streetName = jsonElement.streetName;

              realtors.push(realtor);
            });

            resolve({ realtors: realtors });
          },
          error => {
            console.error(error);
            reject();
          }
        );
    });

    return promise;
  }

  getAgents() {
    const promise = new Promise((resolve, reject) => {
      fetch("./assets/json/agents.json")
        .then(
          res => res.json(),
          error => {
            console.error(error);
            reject();
          }
        )
        .then(
          json => {
            var agents = [];

            json.forEach((jsonElement: any) => {
              const agent = new Agent();

              agent.name = jsonElement.name;
              agent.pictureUrl = jsonElement.pictureUrl;

              agents.push(agent);
            });

            resolve({ agents: agents });
          },
          error => {
            console.error(error);
            reject();
          }
        );
    });

    return promise;
  }
}
