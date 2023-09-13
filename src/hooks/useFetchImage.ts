import { useEffect, useState } from 'react';

const useFetchImage = ({ imgName }: { imgName: string }) => {
    const [img, setImg] = useState<string>();

    const fetchImage = async () => {
        const res = await fetch(`/carrier-logo/${imgName}`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        if (imgName) {
            fetchImage();
        }
    }, []);

    return img;
};

export default useFetchImage;
