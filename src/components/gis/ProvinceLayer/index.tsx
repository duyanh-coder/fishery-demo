import { GeoJSON } from "react-leaflet";

import canTho from "@/mock/geojson/can-tho.json";

const ProvinceLayer=()=>{

return(

<GeoJSON

data={canTho}

style={{

color:"#0f766e",

weight:2,

fillOpacity:.05

}}

/>

)

}

export default ProvinceLayer;