import './taskitem.scss';

import { FaPlay } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TaskItem = ({ item, onDel, onSel }) => {
    const { id, title, singer, imgUrl, isSel } = item;

    return (
        // on
        <li className={isSel ? 'item on' : 'item'}>
            <div className="item-l">
                <div className="pic">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="profile">
                    <p>{title}</p>
                    <p>{singer}</p>
                </div>
            </div>
            <div className="item-r">
                <button className="sel" onClick={() => onSel(item)}>
                    <i>
                        <FaPlay style={{ fontSize: 16 }} />
                    </i>
                </button>
                <button className="del" onClick={() => onDel(id)}>
                    <i>
                        <MdDelete style={{ fontSize: 21 }} />
                    </i>
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
