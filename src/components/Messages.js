import React from 'react';
import Message from './Message';

const messages = (props) => (
    <div className="message-list__root">
        {
            props.messages.map((msg, index) => {
                return  (
                    <Message
                        key={msg.id}
                        index={index}
                        message={msg}
                        convertDate={props.convertDate}
                        trashMessage={props.trashMessage}
                        toggleMessage={props.toggleMessage}
                        showTrashed={props.showTrashed}
                    />
                )
            })
        }
    </div>
);

export default messages;