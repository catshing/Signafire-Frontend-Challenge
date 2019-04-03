import React, { Component } from 'react';
import Messages from './Messages';
import Header from './Header';
import Toolbar from './Toolbar';
import messagesData from '../../messages.json';

class MessageApp extends Component {
    state = {
        messages: messagesData.messages,
        showTrashed: false,
        TrashedMessages: [],
        value: '',
        allMess: messagesData.messages
    }

    toggleMessage = (index) => {
        const { messages } = this.state;
        const msg = [...messages];
        msg[index].meta.isStarred = !msg[index].meta.isStarred;
        this.setState({ messages: msg });
    }

    convertDate(date) {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
        const monthString = months[month - 1];
        return `${monthString} ${day}, ${year}`
    }

     trashMessage = MsgToRemove => {
        this.setState(prevState => ({
          messages: prevState.messages.filter(msg => MsgToRemove !== msg),
          TrashedMessages: [...prevState.TrashedMessages, MsgToRemove]
        }));
      }

    onChangeSearch = (e) => {
        this.setState({ value: e.target.value });
    }


    toggleTrashedMessages = () => { 
        this.setState(prevState => ({ 
            showTrashed: !prevState.showTrashed
        }));
    }

    onChangeSubmit = (e) => {
        e.preventDefault();    
        
        const {messages} = this.state;
        let allMess = [...messages];
        console.log(allMess);
        const word = this.state.value;
        const re = new RegExp('(' + word + ')(?![^<>]*<\/)', 'gi')

        this.setState(prevState => {
            const transformed = prevState.messages.map(m => {
                const highlighted = m.content.replace(re, `<strong>${word}</strong>`);
                const render = (<p dangerouslySetInnerHTML={{__html: highlighted}} />);
                if (m.content) {
                    return Object.assign({}, m, { render })
                }
                return m;
            });

            return { messages: transformed, value: ''};
        });
    }

    render() {
        return (
            <div>
                <Header viewer="MESSAGE VIEWER" />
                <div className="root__body-container">
                    <div className="root__body">
                        <Toolbar
                            showTrashed={this.state.showTrashed}
                            allMess={this.state.allMess}
                            messages={this.state.messages}
                            trashedMessages={this.state.TrashedMessages}
                            toggleTrashedMessages={this.toggleTrashedMessages}
                            onChangeSubmit={this.onChangeSubmit}
                            value={this.state.value}
                            onChangeSearch={this.onChangeSearch}
                        />
                        <Messages
                            messages={this.state.showTrashed ?  this.state.TrashedMessages : this.state.messages}
                            convertDate={this.convertDate}
                            trashMessage={this.trashMessage}
                            toggleMessage={this.toggleMessage}
                            showTrashed={this.state.showTrashed}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageApp;