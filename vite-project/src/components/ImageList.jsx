import Image from './Image';


const ImageList = ({images}) =>{
    <div className="image-list-container">
        {images.map((image, i) => {
            return ( <Image key={i} 
                fileName={image.fileName}
                description={image.description} />
            );
        })}
    </div>

};

export default ImageList;