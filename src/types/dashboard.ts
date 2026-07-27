export interface DashboardKPI {}
export interface ProductionChartItem {}
export interface AquacultureChartItem {}
export interface GISMarker {
    id: number;
    name: string;
    type: string;
    latitude: number;
    longitude: number;
    status: string;
    value?: number;
    description?: string;
}
export interface IUUAlert {}
export interface RecentActivityItem {}
export interface DashboardMock {}