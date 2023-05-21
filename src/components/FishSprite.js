const FishSprite = ({containerHeight, containerWidth, positionX, positionY}) => {
    
    const orangePix = <div className="pixel duck-orange-pixel"></div>
    const blackPix = <div className="pixel black-pixel"></div>
    const whitePix = <div className="pixel white-pixel"></div>
    const transparentPix = <div className="pixel"></div>

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
            <div>
                    {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                    {blackPix}{blackPix}{blackPix}
                    {transparentPix}{transparentPix}{transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}
                    {blackPix}
                    {orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}
                    {blackPix}
                    {whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}
                    {blackPix}
                    {transparentPix}
            </div>
            <div>
                    {transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}
            </div>
            <div>
                    {transparentPix}
                    {blackPix}
                    {whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}{whitePix}
                    {blackPix}
                    {transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}{orangePix}{orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}{transparentPix}
                    {blackPix}
                    {whitePix}{whitePix}{whitePix}
                    {blackPix}
                    {transparentPix}{transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}{transparentPix}
                    {blackPix}
                    {orangePix}{orangePix}{orangePix}{orangePix}
                    {blackPix}
                    {transparentPix}{transparentPix}
            </div>
            <div>
                    {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                    {blackPix}{blackPix}{blackPix}{blackPix}
                    {transparentPix}{transparentPix}{transparentPix}{transparentPix}
            </div>
        </div> 
    );
}
 
export default FishSprite;