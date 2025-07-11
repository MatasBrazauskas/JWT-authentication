import React, { useRef } from 'react';  

function SendEmailsPage(){

    const subject = useRef<HTMLInputElement | null>(null);
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' ref={subject}/>
                <input type='text' ref={text}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SendEmailsPage;
