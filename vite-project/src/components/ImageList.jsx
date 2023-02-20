import Image from './Image';


const ImageList = ({images}) =>{
    const imageArray = [];
    for(let i = 0; i < images.length; i++){
        imageArray.push(<Image key={i} fileName={images[i].fileName} description={images[i].description} />)
    }
    return(
    <div className="image-list-container">
        {imageArray}
    </div>
    )
};

export default ImageList;