import { useState } from 'react';
import './taskinput.scss';

const TaskInput = ({ onAdd }) => {
    const [music, setMusic] = useState({
        title: '',
        singer: '',
        imgUrl: '',
        color: '',
    });
    const { title, singer, imgUrl, color } = music;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setMusic({
            ...music,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !singer.trim()) return;

        onAdd(music);
        setMusic({
            title: '',
            singer: '',
            imgUrl: '',
            color: '',
        });
    };

    return (
        <form className="add" onSubmit={onSubmit}>
            <div>
                <label htmlFor="">곡 제목</label>
                <input type="text" name="title" id="" value={title} onChange={changeInput} />
            </div>
            <div>
                <label htmlFor="">가수</label>
                <input type="text" name="singer" id="" value={singer} onChange={changeInput} />
            </div>
            <div>
                <label htmlFor="">이미지</label>
                <input type="text" name="imgUrl" id="" value={imgUrl} onChange={changeInput} />
            </div>
            <div>
                <label htmlFor="">색상</label>
                <input type="text" name="color" id="" value={color} onChange={changeInput} />
            </div>
            <button type="submit">추가</button>
        </form>
    );
};

export default TaskInput;
