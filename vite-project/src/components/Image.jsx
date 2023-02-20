
const Image = ({key, fileName, description}) => (
    <div className="image-container">
    <img src={fileName} alt={description} />
    </div>
);

export default Image;
