const CommonImage = ({ src, style, alt, fallback }) => {

    return (
        <img
            className={style}
            src={src}
            onError={fallback}
            alt={alt}
        />
    );
}

export default CommonImage;