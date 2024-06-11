import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Header from '../components/Header';
const TextEditor = () => {
    const [value, setValue] = useState("Welcome to Editor 😀");
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ["link", "image", "video"],
            ['clean']
        ]
    }
    return (
     <div>
        <div className=' mx-16'>
        <Header category="App" title="Editor" />

        </div>

           <div className='flex flex-wrap flex-col items-center gap-8'>
            <div className="">
                <div className='editor'>
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={(e) => setValue(e)}
                        className='editor-input'
                        modules={modules}

                    />
                </div>
                <div className='privew mt-20' dangerouslySetInnerHTML={{ __html: value }} />

            </div>

        </div>
     </div>
    )
}
export default TextEditor