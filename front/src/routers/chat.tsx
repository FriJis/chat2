import React from 'react'
import '../assets/scss/scoped-styles/chat.scss'
export default function Index() {
    return (
        <div className="chat">
            <div className="messages">
                <div className="message">
                    <div className="block">saodfiubysd sdofisuy sdofiuyhs osidufyb</div>
                </div>
                <div className="message reverse">
                    <div className="block">saodfiubysd sdofisuy sdofiuyhs osidufyb saodfiubysd sdofisuy sdofiuyhs osidufyb saodfiubysd sdofisuy sdofiuyhs osidufyb saodfiubysd sdofisuy sdofiuyhs osidufyb saodfiubysd sdofisuy sdofiuyhs osidufyb</div>
                </div>
            </div>
            <div className="typing--text"></div>
        </div>
    )
}