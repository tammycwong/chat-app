import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    // console.log(props)
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat]
    //find current chat: 
    //if chat exists, then find chats and then the active chat 
    console.log(chat, userName, messages);

    const renderMessages = () => {
        //renderMessages is another component
        const keys = Object.keys(messages);
        // console.log(keys)
        //keys are ids of specific messages

        return keys.map((key, index) => {
            const message = messages[key];
            //dynamically takes message with specific key
            const lastMessageKey = index === 0 ? null : keys[index-1];
            //if there are messages, find the last one 
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div >
                    <div className="read-receipts" style = {{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...';
    //if no chat, render loading
    //but we know there will always be one

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                   
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )

}

export default ChatFeed;