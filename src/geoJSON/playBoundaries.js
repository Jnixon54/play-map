import eagleFordGeoJSON from './ShalePlay_EagleFord_Boundary_EIA_Aug2015_v2.json'
import aboYesoGeoJSON from './ShalePlay_AboYeso_Boundary_EIA_Aug2015_v2.json';
import bakkenGeoJSON from './ShalePlay_Bakken_Boundary_EIA_Aug2015_v2.json';
import boneSpringGeoJSON from './ShalePlay_BoneSpring_Boundary_EIA_Aug2015_v2.json';
import delawareGeoJSON from './ShalePlay_Delaware_Boundary_EIA_Aug2015_v2.json';
import glorietaYesoGeoJSON from './ShalePlay_GlorietaYeso_Boundary_EIA_Aug2015_v2.json';
import marcellusGeoJSON from './ShalePlay_Marcellus_Boundary_EIA_Aug2015_v2.json';
import niobraraGeoJSON from './ShalePlay_Niobrara_Boundary_EIA_Aug2015_v2.json';
import spraberryGeoJSON from './ShalePlay_Spraberry_Boundary_EIA_Aug2015_v2.json';
import threeForksGeoJSON from './ShalePlay_ThreeForks_Boundary_EIA_Aug2015_v2.json';
import uticaGeoJSON from './ShalePlay_Utica_Boundary_EIA_May2016.json';

import eagleFordISO from './Isopachs/geojson/ShalePlay_EagleFord_Isopach_EIA_Aug2015.json';
import bakkenISO from './Isopachs/geojson/ShalePlay_Bakken_Isopach_EIA_08Jan2015.json';
import marcellusISO from './Isopachs/geojson/ShalePlay_Marcellus_Isopach_EIA_08Jan2015.json';
import niobraraISO from './Isopachs/geojson/ShalePlay_Niobrara_Isopach_EIA_08Jan2015.json';
import pointPleasantISO from './Isopachs/geojson/ShalePlay_PointPleasant_Isopach_EIA_May2016.json';
import uticaISO from './Isopachs/geojson/ShalePlay_Utica_Isopach_EIA_May2016.json';

export const plays = [
  {
    name: 'EagleFord',
    JSON: eagleFordGeoJSON,
    color: 'brown',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Abo Yeso',
    JSON: aboYesoGeoJSON,
    color: 'cyan'
  },
  {
    name: 'Delaware',
    JSON: delawareGeoJSON,
    color: 'darkred'
  },
  {
    name: 'BoneSpring',
    JSON: boneSpringGeoJSON,
    color: 'darkblue'
  },
  {
    name: 'Glorieta',
    JSON: glorietaYesoGeoJSON,
    color: 'hsl(120, 100%, 25%)'
  },
  {
    name: 'Marcellus',
    JSON: marcellusGeoJSON,
    color: 'purple'
  },
  {
    name: 'Niobrara',
    JSON: niobraraGeoJSON,
    color: 'red'
  },
  {
    name: 'Spraberry',
    JSON: spraberryGeoJSON,
    color: 'orange'
  },
  {
    name: 'Three Forks',
    JSON: threeForksGeoJSON,
    color: 'teal'
  },
  {
    name: 'Utica',
    JSON: uticaGeoJSON,
    color: 'grey'
  },{ 
    name: 'Bakken',
    JSON: bakkenGeoJSON,
    color: 'blue'
  }
]

export const isopach = [
  {
    name: 'Eagle Ford Isopach',
    JSON: eagleFordISO,
    color: 'black'
  },
  {
    name: 'Bakken Isopach',
    JSON: bakkenISO,
    color: 'black'
  },
  // {
  //   name: 'Marcellus Isopach',
  //   JSON: marcellusISO,
  //   color: 'black'
  // },
  {
    name: 'Niobrara Isopach',
    JSON: niobraraISO,
    color: 'black'
  },
  {
    name: 'Point Pleasant Isopach',
    JSON: pointPleasantISO,
    color: 'black'
  }
  // {
  //   name: 'Utica Isopach',
  //   JSON: uticaISO,
  //   color: 'black'
  // }
]