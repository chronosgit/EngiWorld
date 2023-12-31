import { useState } from "react";

import axios from "axios";

import { Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";

function PostWriter() {
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [text, setText] = useState("");

    const [message, setMessage] = useState({
        text: "",
        isError: false,
    });

    const topicOptions = [
        "Biomedical engineering", 
        "Chemical engineering",
        "Electricity",
        "Environmental Engineering",
        "Software Engineering",
        "Advanced Materials",
        "Agricultural Engineering",
        "Artificial intelligence",
        "Computer architecture",
        "Computer Engineering",
        "Design",
        "Development Of Autonomous Driving Systems",
        "Electromechanical Engineering",
        "Materials Engineering",
        "Sustainable Energy And Machinery",
    ];

    const handleButtonClick = async () => {
        if(title.length === 0 || title.length > 55) {
            handleMessageUpdate("titleError");
            return;
        } else if(topic.length === 0) {
            handleMessageUpdate("topicError");
            return;
        } else if(text.length === 0 || text.length > 1500) {
            handleMessageUpdate("textError");
            return;
        }

        await axios.get("http://localhost:3001/refresh/", 
            {
                withCredentials: true,
                credentials: "include",
            }
        )
        .then(async (response) => {
            localStorage.removeItem("accessToken");
            localStorage.setItem("accessToken", response.data.accessToken);

            await axios.post(
                "http://localhost:3001/post/create/",
                {title: title, topic: topic, text: text},
                {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                }
            )
            .then(response => {
                handleMessageUpdate("creationSuccess");
                setTitle("");
                setTopic("");
                setText("");
            })
            .catch(error => {
                console.log(error);

                if(error.code === 'ERR_BAD_REQUEST') {
                    handleMessageUpdate("axiosError", error.message);
                } else {
                    handleMessageUpdate("axiosError", error.response?.data?.error);
                }
            });
        })
        .catch(error => {
            console.log(error);
            
            if(error.code === 'ERR_BAD_REQUEST') {
                handleMessageUpdate("axiosError", error.message);
            } else {
                handleMessageUpdate("axiosError", error.response?.data?.error);
            }
        });
    };

    const handleMessageUpdate = (status, errorMessage) => {
        let messageText = "";
        let isMessageError = true;

        if(status === "creationSuccess") {
            messageText = "Your post is successfuly created! Feel free to make another!";
            isMessageError = false;
        } else if(status === "titleError") {
            messageText = "Your title must include 1 to 50 characters";
        } else if(status === "topicError") {
            messageText = "You must select a topic";
        } else if(status === "textError") {
            messageText = "Your text must include 1 to 500 characters";
        } else if(status === "axiosError") {
            messageText = errorMessage;
        }

        setMessage({
            text: messageText,
            isError: isMessageError,
        });
    };

    const clearMessage = () => {
        setMessage(message => ({
            text: "",
            isError: false,
        }));
    }

    return (
        <Container maxWidth="md">
            <Typography gutterBottom sx={{ fontSize: "1.2rem", fontWeight: "600" }}>Make your post:</Typography>

            <TextField 
                value={title} 
                label="Title" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                onChange={e => {setTitle(e.target.value); clearMessage()}}
            />

            <Select
                value={topic}
                label="Topic"
                sx={{ width: "100%" }}
                onChange={e => {setTopic(e.target.value); clearMessage()}}
            >
                {
                    topicOptions.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )
                    })
                }
            </Select>

            <TextField
                value={text} 
                label="Text" 
                variant="outlined" 
                multiline 
                fullWidth 
                margin="normal"
                onChange={e => {setText(e.target.value); clearMessage()}}
            />

            {
                message.text.length > 0 &&
                    <Typography sx={{ my: 1, color: message.isError ? "red" : "green" }}>{message.text}</Typography>
            }

            <Button variant="contained" onClick={handleButtonClick}>Create</Button>
        </Container>
    )
}

export default PostWriter;