import * as React from "react";
import { World, OrbitCamera, Cube } from "lingo3d-react";

export default class Config extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <World>
        <Cube animation={{ rotationY: [0, 180, 360] }} />
        <OrbitCamera active z={500} />
      </World>
    );
  }
}
