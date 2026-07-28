import { farms } from "./mock";

export const getFarmById = (id: number) =>
    farms.find((item) => item.id === id);

export const getFarmList = () => farms;