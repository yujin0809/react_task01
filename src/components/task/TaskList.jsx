import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import './tasklist.scss';

import { MdLibraryMusic } from 'react-icons/md';

const TaskList = ({ data, onDel, onReset, onSel, setCurrent, onAdd }) => {
    const [showInput, setShowInput] = useState(false);
    const isShowInput = () => {
        setShowInput(!showInput);
    };
    return (
        <div className="left">
            <div className="top">
                <p>
                    <i>
                        <MdLibraryMusic style={{ verticalAlign: '-4px', marginRight: 6, fontSize: 22 }} />
                    </i>
                    내 플레이리스트 {data.length}곡
                </p>
            </div>
            <ul className="list">
                {data.map((item) => (
                    <TaskItem key={item.id} item={item} onDel={onDel} onSel={onSel} setCurrent={setCurrent} />
                ))}
            </ul>
            <div className="bot">
                <button onClick={onReset}>원래상태</button>
                {/* on */}
                <button onClick={isShowInput} className={showInput ? `on` : ``}>
                    곡 추가
                </button>
            </div>
            {showInput ? <TaskInput onAdd={onAdd} /> : ''}
        </div>
    );
};

export default TaskList;
