import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter()
    const [text, setText] = useState("");
    const links = {
        "github": "https://www.github.com",
        "vercel": "https://vercel.com/dashboard",
        "portal": "https://app.edumerge.com/",
        "mail": "https://mail.google.com/mail/u/0/#inbox",
        "claude": "https://claude.ai/chats",
        "chatgpt": "https://chat.openai.com/",
        "google drive": "https://drive.google.com/drive/u/0/my-drive",
        "youtube": "https://youtube.com",
        "discord": "https://discord.com/app",
        "nextjs docs": "https://nextjs.org/docs/getting-started/installation",
        "tailwind docs": "https://tailwindcss.com/docs/installation"
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        if (text != "") {
            router.push(checkIfInLinks(text))
        }
    };

    const checkIfInLinks = (check) => {
        const lowercaseInput = check.toLowerCase();
        if (links[lowercaseInput]) {
            return links[lowercaseInput]
        }else{
            return "https://www.bing.com/search?q="+check
        }
    };

    return (
        <div className='mx-auto my-auto w-[80%]'>
            <input onDoubleClick={handleSubmit} tabIndex={"0"} placeholder="Don't break something" value={text} onChange={handleChange} className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:text-black focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  -700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
        </div>
    );
};

export default Search;