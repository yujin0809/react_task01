import { useState } from 'react';
import { useRef } from 'react';
import TaskImg from './TaskImg';
import TaskList from './TaskList';
import './task.scss';

const dataList = [
    { id: 1, title: '달', singer: '109', imgUrl: 'images/music01.jpg', isSel: true, color: '#7DA6B840' },
    { id: 2, title: 'Obsessed', singer: 'Ayumu Imazu', imgUrl: 'images/music02.jpg', isSel: false, color: '#DE999B40' },
    { id: 3, title: 'STRINGS (feat. JVKE & Bazzi)', singer: 'MAX', imgUrl: 'images/music03.jpg', isSel: false, color: '#CCBCC740' },
    { id: 4, title: 'yours', singer: '데이먼스 이어(Damons year)', imgUrl: 'images/music04.jpg', isSel: false, color: '#DED8C860' },
    { id: 5, title: 'ㄴㄴ (feat. Halsoon)', singer: '현서 (HYUN SEO)', imgUrl: 'images/music05.jpg', isSel: false, color: '#77845930' },
];

const Task = () => {
    const [data, setData] = useState(dataList);
    const [current, setCurrent] = useState(data[0]);
    const no = useRef(data.length + 1);

    // 추가
    const onAdd = (music) => {
        const { title, singer, imgUrl, color } = music;
        setData([...data, { id: no.current++, title, singer, imgUrl, color }]);
    };

    // 삭제
    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    // 표시
    const onSel = (i) => {
        setCurrent(i);
        setData(data.map((item) => (item.id === i.id ? { ...item, isSel: true } : { ...item, isSel: false })));
    };

    // 원상태
    const onReset = () => {
        setData(dataList);
    };

    return (
        <div className="wrap">
            <TaskList data={data} onDel={onDel} onReset={onReset} onSel={onSel} setCurrent={setCurrent} onAdd={onAdd} />
            <TaskImg current={current} />
        </div>
    );
};

export default Task;
