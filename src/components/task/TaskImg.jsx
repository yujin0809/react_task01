import { useState } from 'react';
import './taskimg.scss';
import { useEffect } from 'react';

const TaskImg = ({ current }) => {
    const [music, setMusic] = useState(current);
    const { id, title, singer, imgUrl, color } = music;

    useEffect(() => {
        setMusic(current);
    }, [current]);

    return (
        <div className="right" style={{ background: `linear-gradient(${color} 20% ,#fff )` }}>
            <div className="pic">
                <img src={imgUrl} alt="" />
            </div>
            <p className="name">{title}</p>
            <p className="age">{singer}</p>
            <p className="desc">가사(후추)</p>
        </div>
    );
};

export default TaskImg;
