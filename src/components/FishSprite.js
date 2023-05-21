const FishSprite = ({containerHeight, containerWidth, positionX, positionY, fishImage}) => {
    
    const orangePix = <div className="pixel duck-orange-pixel"></div>
    const blackPix = <div className="pixel black-pixel"></div>
    const whitePix = <div className="pixel white-pixel"></div>
    const transparentPix = <div className="pixel"></div>

    const lineOne = <div>
                        {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                        {blackPix}{blackPix}{blackPix}
                        {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                    </div>

    const lineTwo = <div>
                        {transparentPix}{transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}{transparentPix}
                    </div>

    const lineThree = <div>
                        {transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}
                        {blackPix}
                        {orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}
                    </div>

    const lineFour = <div>
                        {transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}
                    </div>

    const lineFive = <div>
                        {transparentPix}
                        {blackPix}
                        {whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}
                        {blackPix}
                        {transparentPix}
                    </div>
    const lineSix = <div>
                        {transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}
                    </div>

    const lineSeven = <div>
                        {transparentPix}
                        {blackPix}
                        {whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}
                        {blackPix}
                        {transparentPix}
                    </div>
                    
    const lineEight = <div>
                        {transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}
                    </div>

    const lineNine = <div>
                        {transparentPix}{transparentPix}{transparentPix}
                        {blackPix}
                        {whitePix}{whitePix}{whitePix}
                        {blackPix}
                        {transparentPix}{transparentPix}{transparentPix}
                    </div>

    const lineTen = <div>
                        {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}{transparentPix}
                    </div>

    const lineEleven = <div>
                        {transparentPix}{transparentPix}{transparentPix}
                        {blackPix}
                        {orangePix}{orangePix}{orangePix}{orangePix}
                        {blackPix}
                        {transparentPix}{transparentPix}
                    </div>

    const lineTwelve = <div>
                        {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                        {blackPix}{blackPix}{blackPix}{blackPix}
                        {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                    </div>

    return ( 
        <div 
        className='sprite' 
        style={{
            height: "55px", 
            width: "60px", 
            display: "flex", 
            // alignItems: "center", 
            // justifyContent: "center", 
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}>
            {/* {lineOne}{lineTwo}{lineThree}{lineFour}{lineFive}{lineSix}
            {lineSeven}{lineEight}{lineNine}{lineTen}{lineEleven}{lineTwelve} */}
            {fishImage == "heading left" ? <>{lineOne}{lineTwo}{lineThree}{lineFour}{lineFive}{lineSix}{lineSeven}{lineEight}{lineNine}{lineTen}{lineEleven}{lineTwelve}</> : <>{lineTwelve}{lineEleven}{lineTen}{lineNine}{lineEight}{lineSeven}{lineSix}{lineFive}{lineFour}{lineThree}{lineTwo}{lineOne}</>}
        </div> 
    );
}
 
export default FishSprite;