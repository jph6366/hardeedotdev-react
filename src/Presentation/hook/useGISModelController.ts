import { useEffect, useState } from "react";
import { NHCGISRepository } from "../../Domain/Repository/NHCGISRepository"
import { GeoJsonObject } from "geojson";


export function useGISModelController(GISRepository: NHCGISRepository) {
    const [ currentMapData, setCurrentMapData ] = useState<GeoJsonObject>();

    useEffect( () => {
        async function init() {

            setCurrentMapData(await GISRepository.getData());

        }
        init();
    }, []);



    return {
        currentMapData
    }


}