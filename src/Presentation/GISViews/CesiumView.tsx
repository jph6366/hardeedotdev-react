import { Cartesian3 } from "cesium";
import * as React from "react";
import { Entity, Viewer } from "resium";




export class CesiumView extends React.Component {

    componentDidMount(): void {

    }

    render(): React.ReactNode {
        return <Viewer style={{width: '100vw', height: '200px'}}>
        <Entity
          description="test"
          name="tokyo"
          point={{ pixelSize: 10 }}
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        />
      </Viewer>

    }

}
