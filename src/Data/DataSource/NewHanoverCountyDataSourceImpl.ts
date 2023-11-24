import type { NewHanoverCountyDataSource } from "./NewHanoverCountyDataSource";
import { PageAppItem, SPA, SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { carouselList, pageContentString } from "../../Data/constants";
import { SPACarousel } from "../../Domain/Model/Carousel";
import ky from "ky";

export class NewHanoverCountyDataSourceImpl implements NewHanoverCountyDataSource {

  async getFirestations() {
    const response = ky.get('https://gis.nhcgov.com/server/rest/services/Layers/FireStations/MapServer/0/query?where=&text=&objectIds=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson').json()
    return response;
  }
  
}
