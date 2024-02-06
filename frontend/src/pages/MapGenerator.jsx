import React from 'react';

const MapGenerator = (props) => {

    return (
        <> 
            <div className='container pt-5 fc-gray800'>     
                <h3 className='text-center'>Hextile Map Generator</h3> 
                <b>The map is completly created by code only</b>
                <p>
                    This 
                    <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href="https://github.com/Roqum/Precedural_HextileMap_Generator/blob/master/Assets/Scripts/Map/Hexagon.cs"> Hexagon Class </a> 
                    is drawing vertices and faces, combining them into a single hex-tile mesh. The size of a single tile can be configured. I can even be made hollow so that the mesh shows a hexagon border.
                </p>
                <p>
                    The 
                    <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href="https://github.com/Roqum/Precedural_HextileMap_Generator/blob/master/Assets/Scripts/Map/GridGenerator.cs"> map generator class </a>
                    is drawing a grid and uses the Hexagon "draw" function to draw a hex-tile for each cell of the grid. It is positioning the hex-tile accordingly so that a complete map of hex-tiles is created.
                    Two "Perlin Noise" functions are used to randomly assign a land type and the corresponding  material to each of these cells. One assigns the basic terrain type and the other is used to randomly place
                    multiple groups of forest tiles onto the dry land.
                </p>
                <p>
                    The result is a configurable procedural generated hex-tile map which can be seen in this video:
                </p>
                <video autoPlay className='w-100' muted='true' loop>
                    <source src="https://david-burgstaller.com/api/video/MapGeneratorSize.mp4" type="video/mp4" />
                </video>
                <p>
                    As you can see, a basic "W,A,S,D" movement is added, so the map can be explored.
                </p>
                <p>
                    The scale of the perlin noise can also be adjusted to variate the generated landscape as shown in this video: 
                </p>
                <video autoPlay className='w-100' muted='true' loop>
                    <source src="https://david-burgstaller.com/api/video/MagGeneratorScale.mp4" type="video/mp4" />
                </video>
                <p>
                    Last but not least, a simple UI allows us to build two different kinds of buildings. These buildings automatically snap to the grid and adjust their position:
                </p>
                <video autoPlay className='w-100' muted='true' loop>
                    <source src="https://david-burgstaller.com/api/video/MapGeneratorBuilding.mp4" type="video/mp4" />
                </video>
            </div> 
        </>
    );
}

export default MapGenerator;