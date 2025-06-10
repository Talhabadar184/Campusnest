// import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import EmojiPicker from "emoji-picker-react";
// import cross from "../assets/Chats/cross.png";
// import gifts from "../assets/Chats/gifts.png";
// import emojis from "../assets/Chats/emojis.png";
// import attachments from "../assets/Chats/attachments.png";

// const Inbox = () => {
//   const location = useLocation();
//   const { role, hostelName, tenantName, ownerName } = location.state || {};

//   const defaultTenantList = [
//     { id: 1, tenantName: "Ali Khan", messages: [] },
//     { id: 2, tenantName: "Sara Ali", messages: [] },
//     { id: 3, tenantName: "Tariq Jamil", messages: [] },
//     { id: 4, tenantName: "Asad Malik", messages: [] },
//     { id: 5, tenantName: "Zainab Fatima", messages: [] },
//   ];

//   const defaultOwnerList = [
//     {
//       id: 1,
//       hostelName: "Ali Town Hostel",
//       ownerName: "Ahmed Raza",
//       messages: [],
//     },
//     {
//       id: 2,
//       hostelName: "Lahore Nest Hostel",
//       ownerName: "Shoaib Noor",
//       messages: [],
//     },
//     {
//       id: 3,
//       hostelName: "Lahore Haven Hostel",
//       ownerName: "Tayyab Ahmed",
//       messages: [],
//     },
//     {
//       id: 4,
//       hostelName: "Skyline Hostel",
//       ownerName: "Muhammad Iqbal",
//       messages: [],
//     },
//     {
//       id: 5,
//       hostelName: "Lahore Backpackers",
//       ownerName: "Zubair Khan",
//       messages: [],
//     },
//   ];

//   const fileInputRef = useRef(null);
//   const [chatList, setChatList] = useState([]);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [showChat, setShowChat] = useState(false);
//   const [showEmojis, setShowEmojis] = useState(false);

//   const storageKey = role === "tenant" ? "chatList_tenant" : "chatList_owner";

//   useEffect(() => {
//     const storedChats = localStorage.getItem(storageKey);
//     const chatData = storedChats
//       ? JSON.parse(storedChats)
//       : role === "tenant"
//       ? defaultTenantList
//       : defaultOwnerList;
  
//     setChatList(chatData);
  
//     // Auto-select chat with the matching ownerName (if passed in)
//     if (role === "tenant" && ownerName) {
//       const ownerChat = chatData.find(chat => chat.ownerName === ownerName);
//       if (ownerChat) {
//         setSelectedChat(ownerChat);
//         setShowChat(true);
//         return;
//       }
//     }
  
//     // Fallback: select first chat
//     if (chatData.length > 0) {
//       setSelectedChat(chatData[0]);
//       setShowChat(true);
//     }
//   }, [role, storageKey, ownerName]);
    

//   const handleChatSelect = (chat) => {
//     setSelectedChat(chat);
//     setShowChat(true);
//   };

//   const sendMessage = () => {
//     if (!selectedChat || newMessage.trim() === "") return;

//     const updatedChats = chatList.map((chat) =>
//       chat.id === selectedChat.id
//         ? {
//             ...chat,
//             messages: [
//               ...chat.messages,
//               {
//                 text: newMessage,
//                 sender: role,
//                 time: new Date().toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 }),
//               },
//             ],
//           }
//         : chat
//     );

//     setChatList(updatedChats);
//     setSelectedChat(updatedChats.find((chat) => chat.id === selectedChat.id));
//     setNewMessage("");
//     localStorage.setItem(storageKey, JSON.stringify(updatedChats));
//   };

//   return (
//     <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100">
//       <div
//         className={`w-full md:w-[40vw] border-r bg-white shadow-lg ${
//           showChat ? "hidden md:block" : "block"
//         }`}
//       >
//         {/* Header    */}
//         <h2 className="p-4 text-lg flex justify-between font-semibold bg-blue-900 text-white">
//           Chats
//           <img src={cross} className="h-6 w-6" alt="" />
//         </h2>

//         {/* side bar for chatlist of tenent and owner         */}
//         <div className="overflow-y-auto h-[calc(100vh-50px)]">
//           {chatList.map((chat) => (
//             <div
//               key={chat.id}
//               className={`p-4 border-b cursor-pointer hover:bg-gray-200 ${
//                 selectedChat?.id === chat.id ? "bg-gray-300" : ""
//               }`}
//               onClick={() => handleChatSelect(chat)}
//             >
//               <h2 className="text-xl font-bold mb-2">
//                 Chat with {chat.ownerName || chat.tenantName}
//               </h2>
//               <p className="text-gray-500 text-sm truncate">
//                 {chat.messages.length > 0
//                   ? chat.messages.slice(-1)[0].text
//                   : "No messages"}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* selected chat box */}
//       {selectedChat && (
//         <div className="w-full md:w-[60vw] h-[100vh] md:h-auto flex flex-col border bg-white shadow-lg">
//           <div className="bg-blue-900 text-white px-4 py-3 flex justify-between items-center">
//             <button
//               className="md:hidden text-lg"
//               onClick={() => setShowChat(false)}
//             >
//               ← Back
//             </button>
//             <span className="font-semibold">
//               Chatting with: {selectedChat.ownerName || selectedChat.tenantName}
//             </span>
//           </div>
//           <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-150px)] md:max-h-none">
//             {selectedChat.messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col ${
//                   msg.sender === role ? "items-end" : "items-start"
//                 }`}
//               >
//                 <div
//                   className={`px-3 py-2 rounded-lg w-fit max-w-[70%] ${
//                     msg.sender === role
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-black"
//                   }`}
//                 >
//                   <p>{msg.text}</p>
//                 </div>
//                 <span className="text-xs text-gray-500">{msg.time}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-wrap items-center px-3 py-2 border-t relative w-full">
//   <input
//     type="text"
//     placeholder="Ask anything..."
//     className="w-full sm:flex-1 min-w-[200px] px-3 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-lg border border-gray-300 focus:outline-none"
//     value={newMessage}
//     onChange={(e) => setNewMessage(e.target.value)}
//     onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//   />

//   <div className="flex gap-3 items-center flex-wrap">
//     {/* 🎁 Gift Icon */}
//     <img src={gifts} alt="gift" className="w-6 h-6 cursor-pointer" />

//     {/* 😊 Emoji Button */}
//     <img
//       src={emojis}
//       alt="emoji"
//       className="w-6 h-6 cursor-pointer"
//       onClick={() => setShowEmojis(!showEmojis)}
//     />

//     {/* 📎 Attachments */}
//     <img
//       src={attachments}
//       alt="attachment"
//       className="w-6 h-6 cursor-pointer"
//       onClick={() => fileInputRef.current.click()}
//     />
//     <input
//       type="file"
//       ref={fileInputRef}
//       className="hidden"
//       onChange={(e) => handleFileUpload(e.target.files[0])}
//     />
//   </div>

//   {/* 😍 Emoji Picker */}
//   {showEmojis && (
//     <div className="absolute bottom-12 right-3 z-50">
//       <EmojiPicker
//         onEmojiClick={(emojiObject) => {
//           setNewMessage((prev) => prev + emojiObject.emoji);
//           setShowEmojis(false);
//         }}
//       />
//     </div>
//   )}
// </div>


//         </div>
//       )}
//     </div>
//   );
  
// };

// export default Inbox;
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { getMessages, sendMessage } from "../Features/chatSlice";
import cross from "../assets/Chats/cross.png";
import { useNavigate } from "react-router-dom"; // <-- Add this line



import gifts from "../assets/Chats/gifts.png";
import emojis from "../assets/Chats/emojis.png";
import attachments from "../assets/Chats/attachments.png";

const Inbox = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const { accessToken } = useSelector((state) => state.auth);
  const userInfo = useSelector((state) => state.auth.user);
  const ownerId = useSelector((state) => state.hostel);
  console.log(ownerId);

  const { messages } = useSelector((state) => state.chat);

  const [newMessage, setNewMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const roomId = userInfo && ownerId ? `${userInfo._id}_${ownerId}` : "";
  const navigate = useNavigate(); // <-- Add this line

  useEffect(() => {
    if (accessToken && roomId) {
      dispatch(getMessages(roomId));
    }
  }, [accessToken, dispatch, roomId]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !userInfo || !ownerId) return;

    const messagePayload = {
      senderId: userInfo._id,
      receiverId: ownerId,
      message: newMessage.trim(),
    };

    dispatch(sendMessage({ roomId, messageData: messagePayload }));
    setNewMessage("");
  };

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
    // Future: handle file sending
  };
   const handleClose = () => {
    navigate("/Home"); // <-- Navigate back to home page
  };

  if (!userInfo || !ownerId) return <div>Loading chat...</div>;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="bg-blue-900 flex justify-between text-white px-4 py-3">
        <span className="font-semibold">Chat with Owner</span>
        <button onClick={handleClose} className="hover:"><img src={cross} className="h-6 w-6" alt="" /></button>
     
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-150px)]">
        {Array.isArray(messages) && messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.senderId === userInfo._id ? "items-end" : "items-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[70%] w-fit ${
                msg.senderId === userInfo._id ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <p>{msg.message}</p>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center px-3 py-2 border-t relative w-full">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full sm:flex-1 min-w-[200px] px-3 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-lg border border-gray-300 focus:outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />

        <div className="flex gap-3 items-center flex-wrap">
          <img src={gifts} alt="gift" className="w-6 h-6 cursor-pointer" />
          <img
            src={emojis}
            alt="emoji"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowEmojis(!showEmojis)}
          />
          <img
            src={attachments}
            alt="attachment"
            className="w-6 h-6 cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
        </div>

        {showEmojis && (
          <div className="absolute bottom-12 right-3 z-50">
            <EmojiPicker
              onEmojiClick={(emojiObject) => {
                setNewMessage((prev) => prev + emojiObject.emoji);
                setShowEmojis(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;

