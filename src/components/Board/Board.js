import React, {useState} from "react";
import './Board.css';
import {MoreHorizontal, Trash2} from 'react-feather';
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

// function Board(props) {
//     const [showDropdown, setShowDropdown] = useState(false);
//
//
//     return (
//         <div className="board">
//             <div className="board_top">
//                 <p className="board_top_title">{props.board?.title}
//                     <span>{`${props.board?.cards?.length}`}</span>
//                 </p>
//                 {/*КНОПКА УДАЛЕНИЯ КОЛОНКИ НАЧАЛО*/}
//
//                 <div className="board_top_more" onClick={() =>
//                     setShowDropdown(true)}>
//                     <MoreHorizontal />
//                     {showDropdown && (
//                             <Dropdown
//                                 onclose={() => setShowDropdown(false)}>
//                                 <div className="board_dropdown">
//                                     <p onClick={() => props.removeBoard(props.board?.id)}>Delete Board</p>
//                                 </div>
//                             </Dropdown>
//                         )
//                     }
//                 </div>
//
//                 {/*КНОПКА УДАЛЕНИЯ КОЛОНКИ ОКОНЧАНИЕ*/}
//
//             </div>
//             <div className="board_cards custom-scroll">
//                 {
//                     props.board?.cards?.map((item) => (
//                         <Card
//                             key={item.id}
//                             card={item}
//                             removeCard={props.removeCard}
//                             boardId={props.board?.id}
//                             handleDragEnd={props.handleDragEnd}
//                             handleDragEnter={props.handleDragEnter}
//                         />
//                     ))
//                 }
//                 {/*<Card />*/}
//                 {/*<Card />*/}
//                 <Editable
//                 displayClass="boards_cards_add"
//                 text="Add card"
//                 placeholder="Enter Card Title"
//                 onSubmit={(value) => props.addCard(value, props.board?.id)}
//                 />
//             </div>
//         </div>
//     )
// }
// export default Board;


function Board(props) {
    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">{props.board?.title}
                    <span>{`${props.board?.cards?.length}`}</span>
                </p>
                {/*КНОПКА УДАЛЕНИЯ КОЛОНКИ НАЧАЛО*/}

                <div className="board_top_more" onClick={() =>
                    setShowDropdown(true)}>
                    <Trash2 onClick={() => props.removeBoard(props.board?.id)} />

                </div>

                {/*КНОПКА УДАЛЕНИЯ КОЛОНКИ ОКОНЧАНИЕ*/}

            </div>
            <div className="board_cards custom-scroll">
                {
                    props.board?.cards?.map((item) => (
                        <Card
                            key={item.id}
                            card={item}
                            removeCard={props.removeCard}
                            boardId={props.board?.id}
                            handleDragEnd={props.handleDragEnd}
                            handleDragEnter={props.handleDragEnter}
                            updateCard={props.updateCard}
                        />
                    ))
                }
                {/*<Card />*/}
                {/*<Card />*/}
                <Editable
                displayClass="boards_cards_add"
                text="Add card"
                placeholder="Enter Card Title"
                onSubmit={(value) => props.addCard(value, props.board?.id)}
                />
            </div>
        </div>
    )
}
export default Board;