const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0) {
        //image
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }
    //if not image, render below
    return (
        <div className="message" style={{float: 'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;