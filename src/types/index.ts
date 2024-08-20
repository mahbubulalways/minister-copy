// ! AC ________
export interface ACTechnicalSpecifications {
  model: string;
  type: string;
  tonnage: string;
  function: string;
  btu_hr: string;
  voltage: string;
  ratedInputPowerW: string;
  ratedCurrentA: string;
  coolingCapacityW: string;
  eer_cop: string;
  airFlowM3h: string;
  compressorType: string;
  refrigerantType: string;
  refrigerantAmountKg: string;
  operatingRange: string;
  maximumPipeLength: string;
  roomSize: string;
  iFeelTechnology: string;
  antiBacterialAirFilter: string;
  allCopperTube: string;
  compressorGuaranty: string;
  __v: string;
  _id: string;
}

export interface ACOperations {
  smartMode: string;
  turboCoolingMode: string;
  ecoMode: string;
  sleepMode: string;
  clockTimerMode: string;
  dimmerMode: string;
  quietMode: string;
  fanMode: string;
  dryMode: string;
  coolMode: string;
  autoRestart: string;
  temperatureUnitChange: string;
  fullCopperTube: string;
  __v: string;
  _id: string;
}

// ! Refrigerator_

export interface TRefrigerator {
  freezerCapacity: string;
  refrigeratorCapacity: string;
  coolingType: string;
  doorQuantity: string;
  freezerType: string;
  doorLock: string;
  refrigerant: string;
  refrigerantCharge: string;
  blowingAgentOfPUFoam: string;
  innerLiner: string;
  doorPlate: string;
  sidePanel: string;
  backPanel: string;
  power: string;
  compressorVoltageRange: string;
  ratedVoltage: string;
  ratedCurrent: string;
  ratedFrequency: string;
  builtInStabilizer: string;
  dimensions: string;
  grossCapacity: string;
  CFT: string;
  netWeight: string;
  __v: string;
  _id: string;
}

//!  filtering search params types of tv

export type TSearchParams = {
  searchParams: {
    size?: string;
    price?: string;
    sort: string;
  };
};

//! fetch (get) data query
export type TQuery = {
  size?: string;
  priceRange?: string;
};

// product type
export type TProduct = {
  _id: string;
  name: string;
  image: string;
  images: string[];
  price: string;
  offerPrice: string | number;
  mainCategory: string;
  subCategory: string;
  productType: string;
  sale: boolean;
  isDeleted: boolean;
};

// washing machine type

export interface TWashingMachineSpecification {
  color: string;
  capacity: string;
  netDimension: string;
  netWeight: string;
  grossWeight: string;
  washPower: string;
  spinSpeed: string;
  waterLevel: string;
  innerTub: string;
  controlType: string;
  waterInlets: string;
  display: string;
  delayStartH: string;
  childLock: "Yes" | "No";
  washProgram: string[];
  cabinet: string;
  doorCover: string;
  diyProgram: "Yes" | "No";
  memoryBackup: "Yes" | "No";
  warranty: string;
  _id: string;
  __v: string;
}

//
//! oven specifications
//
export interface TOvenSpecifications {
  powerConsumption: string;
  output: string;
  operationFrequency: string;
  timer: string;
  microwavePowerLevels: number;
  turntableGlassTray: string;
  defrostSetting: string; // Default to an empty string if not provided
  housingAndCavity: string;
  handle: string;
  cookingEndSignal: "yes" | "no";
  outsideDimensions: string;
  ovenCavityDimensions: string;
  ovenCapacity: string;
  cookingUniformity: string;
  netWeight: string;
  _id: string;
  __v: string;
}

// user type
export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
};

// login
export type ILogin = {
  email: string;
  password: string;
};

// add to cart

export interface ICartProduct {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ICart {
  email: string;
  cart: ICartProduct[];
}
