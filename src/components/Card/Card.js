import React, {useState} from "react";
import {MoreHorizontal, Clock, CheckSquare, ArrowLeft, ArrowRight} from 'react-feather';
import './Card.css';
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal &&  (
                <CardInfo card={props.card}
                          updateCard={props.updateCard}
                          boardId={props.boardId}
                          onClose={() => setShowModal(false)} />)}

        <div
             className="card"
             draggable
             onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
             onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
             onClick={() => setShowModal(true)}
        >
            {/*{showModal && <CardInfo onClose={() => setShowModal(false)}/>}*/}

            <div className="card_top">
                <div className="card_top_labels">
                    {props.card?.labels?.map((item, index) => (
                            <Chip key={index} text={item.text} color={item.color} />
                        ))}

                </div>
     {/*delete             */}
                <div className="card_top_more" onClick={() =>
                    setShowDropdown(true)}>
                    <MoreHorizontal onClick={() => props.removeCard(props.card?.id, props.boardId)} />
                    {/*{showDropdown && (*/}
                    {/*    <Dropdown*/}
                    {/*        onclose={() => setShowDropdown(false)}>*/}
                    {/*        <div className="card_dropdown">*/}
                    {/*            <p onClick={() => props.removeCard(props.card?.id, props.boardId)}*/}
                    {/*            > Delete Card </p>*/}
                    {/*        </div>*/}
                    {/*    </Dropdown>*/}
                    {/*)}*/}
                </div>
     {/*delete             */}

            </div>
            <div className="card_title">{props.card?.title}</div>

            <div className="card_arrow">
                <ArrowLeft/>
                <ArrowRight style={{marginLeft:'200px'}}/>
            </div>

{/*            function findParentWithClass(el, className) {*/}
{/*            while (el && !el.classList.contains(className)) {*/}
{/*            el = el.parentElement;*/}
{/*        }*/}
{/*            return el;*/}
{/*        };*/}

{/*            this.buttonright.addEventListener('click',() => swapClick(this.buttonright, 1) );*/}
{/*            this.buttonleft.addEventListener('click', () => swapClick(this.buttonleft, -1) );*/}

{/*            function swapClick(btn, dir) {*/}

{/*                let item = findParentWithClass(btn, "card");*/}
{/*                let sct1 = findParentWithClass(item, "todoList");*/}
{/*                let sct2 = dir > 0 ? sct1.nextElementSibling : sct1.previousElementSibling;*/}
{/*                if (!sct2) return;*/}

{/*                let dest = sct2.querySelector('.div');*/}
{/*                dest.insertBefore(item, dest.children[0]);*/}
{/*            }*/}

            <div className="card_footer">
                {props.card?.date && (
                        <p>
                            <Clock />
                            {props.card?.date}
                        </p>
                    )}
                {props.card?.tasks?.length > 0 && (
                    <p>
                        <CheckSquare />
                        {props.card?.tasks?.filter((item) => item.completed).
                            length} / {props.card?.tasks?.length}
                    </p>


                )}
            </div>
        </div>
        </>
    );
}

export default Card;