import React from 'react';

const Message = (props) => {
    const btnClass = props.message.meta.isStarred ? 'message__isStarred' : 'message__notStarred';
    const showTrashed = props.showTrashed ? 'message__showTrashed' : 'message__notShow';

    return (
        <div className="message">
            <div className="message__profile">
                <img src={props.message.avatar} id="avatar" />
                <p id="message__handle">{props.message.handle}</p>
            </div>
            <div className="message__content">
                <div id="message__source">
                    <span>{props.message.source}</span> |  {props.convertDate(props.message.timestamp)}
                </div>
                <p id="message__content">
                {
                     props.message.render ||  props.message.content
                }
                </p>
            </div>
            <div className="message__buttons-container">
                <div className="message__buttons">
                    <button
                        type="button"
                        className={btnClass}
                        onClick={() => props.toggleMessage(props.index)}>
                            {props.message.meta.isStarred ? 'Starred!' : 'Star Message!'}
                    </button>
                    <div>
                        <img className={showTrashed}
                            src={require('../../assets/trash.png')} onClick={() => {
                                props.trashMessage(props.message)
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;