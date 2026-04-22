import React, { useContext, useState } from 'react'
import { useEditor, EditorContent } from "@tiptap/react";
import { AuthContext } from '../components/AuthContext';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from '../components/MenuBar'; // Import from the correct location
import "./Create.css"; // Correct CSS import
import Placeholder from '@tiptap/extension-placeholder';
import axios from 'axios';

export default function Create() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  
  // CORRECTED: Use useEditor hook properly
  const editor = useEditor({
    extensions: [StarterKit,
      Placeholder.configure({
        placeholder: 'Your Post...',
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },
  });

  // Check if editor is ready
  if (!editor) {
    return <div className='editor-loading'>Loading Editor....</div>;
  }

  const handlePublish = async () => {
    if(!title.trim()){
      alert("Title is required");
      return;
    }

    if(!editor || editor.isEmpty){
      alert("Blog content cannot be empty!");
      return;
    }
    
    const postData = {
      title: title.trim(), // Use the actual title from state
      content: editor.getHTML(),
      author: user?.username,
      createdAt: new Date(),
    };
    try{
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/createBlog`, postData, {
        headers: {
          "Content-Type" : "application/json",
        },
      });
      alert("Blog published successfully 🚀");
      setTitle("");
      editor.commands.clearContent();
    }catch(error){
      console.error(error);
      alert(error.response?.data?.error || "Something went wrong");
    }
  }
  return (
  <div className='create'>
    <div className="create-container">
      <h1>Create New Post ✍️</h1>
      <input 
        className='title-input' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder='TITLE...'
      />
      <div className="editor-container">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <button className='publish-btn' onClick={handlePublish}>
        🚀 Publish
      </button>
    </div>
  </div>
  );
}