const CommonImage = ({src, style, alt}) => {
    return (
        <img className={style} src={src} alt={alt} />
    );
}

export default CommonImage;