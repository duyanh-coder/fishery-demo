import { hatcheries } from "./mock";

export const getHatcheryList = () => hatcheries;

export const getHatcheryById = (id: number) =>
    hatcheries.find(item => item.id === id);