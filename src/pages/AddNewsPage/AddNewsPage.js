import React, { useState } from "react";
import { connect } from "react-redux";

import {
    TextField,
    Button,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Card,
    CardContent,
    Box,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from "@mui/material";
import { AddCircle, RemoveCircle, CheckCircle, ErrorOutline } from "@material-ui/icons";
import { AddNewsManual } from "../../actions/news";

const groupTypeOptions = [
    { label: "Stock News", value: "stock_news", type: "stocknews" },
    { label: "Investing News", value: "investing_news", type: "kiplinger" },
    { label: "Top News", value: "top_news", type: "yahoo" },
    { label: "Main Article News", value: "main_article_news", type: "marketwatch" },
    { label: "Latest News", value: "latest_news", type: "marketwatch" }
];

const AddNewsForm = (props, { setOpenDialog, loadNews, page, rowsPerPage }) => {
    const [newsData, setNewsData] = useState({
        title: "",
        contents: [""],
        image: "",
        link: "",
        type: "marketwatch",
        groupType: "latest_news",
        list_contents: [""],
        is_deleted: false
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogType, setDialogType] = useState("success");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewsData({ ...newsData, [name]: value });
    };

    const handleGroupTypeChange = (e) => {
        const selectedGroup = groupTypeOptions.find(item => item.value === e.target.value);
        setNewsData({ ...newsData, groupType: selectedGroup.value, type: selectedGroup.type });
    };

    const handleArrayChange = (index, value, key) => {
        const updatedArray = [...newsData[key]];
        updatedArray[index] = value;
        setNewsData({ ...newsData, [key]: updatedArray });
    };

    const addArrayItem = (key) => {
        setNewsData({ ...newsData, [key]: [...newsData[key], ""] });
    };

    const removeArrayItem = (index, key) => {
        const updatedArray = [...newsData[key]];
        updatedArray.splice(index, 1);
        setNewsData({ ...newsData, [key]: updatedArray });
    };

    const generateUUID = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uuid = generateUUID(newsData.title);
        const dataToSubmit = { ...newsData, uuid };

        try {
            const data = await props.AddNewsManual(dataToSubmit);
            if (data.status) {
                setDialogMessage("News added successfully!");
                setDialogType("success");
            }
            // await axios.post("http://localhost:5000/api/add-news", dataToSubmit);
        } catch (error) {
            console.error("Error adding news:", error);
            setDialogMessage("Failed to add news. Please try again.");
            setDialogType("error");
        }
        setDialogOpen(true);
    };

    const FormReset = () => {
        setNewsData({
            title: "",
            contents: [""],
            image: "",
            link: "",
            type: "marketwatch",
            groupType: "latest_news",
            list_contents: [""],
            is_deleted: false
        });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, p: 3 }}>
            <Card sx={{ maxWidth: 900, width: "100%", boxShadow: 3, borderRadius: 3 }}>
                <Box sx={{ background: "linear-gradient(45deg, #1E3C72, #2A5298)", p: 2, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
                        Add News
                    </Typography>
                </Box>

                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Title"
                            name="title"
                            value={newsData.title}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />

                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
                            Contents
                        </Typography>
                        {newsData.contents.map((content, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <TextField
                                    value={content}
                                    onChange={(e) => handleArrayChange(index, e.target.value, "contents")}
                                    fullWidth
                                    multiline
                                />
                                <IconButton onClick={() => removeArrayItem(index, "contents")} color="error">
                                    <RemoveCircle />
                                </IconButton>
                            </Box>
                        ))}
                        <Button onClick={() => addArrayItem("contents")} sx={{ mt: 1 }} variant="outlined" startIcon={<AddCircle />}>
                            Add Content
                        </Button>

                        <TextField
                            label="Image URL"
                            name="image"
                            value={newsData.image}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Link"
                            name="link"
                            value={newsData.link}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />

                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
                            List Contents
                        </Typography>
                        {newsData.list_contents.map((listContent, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <TextField
                                    value={listContent}
                                    onChange={(e) => handleArrayChange(index, e.target.value, "list_contents")}
                                    fullWidth
                                    multiline
                                />
                                <IconButton onClick={() => removeArrayItem(index, "list_contents")} color="error">
                                    <RemoveCircle />
                                </IconButton>
                            </Box>
                        ))}
                        <Button onClick={() => addArrayItem("list_contents")} sx={{ mt: 1 }} variant="outlined" startIcon={<AddCircle />}>
                            Add List Content
                        </Button>

                        <FormControl fullWidth margin="normal" sx={{ minWidth: 200 }}>
                            <InputLabel style={{ backgroundColor: 'white' }} id="group-type-label">Group Type</InputLabel>
                            <Select
                                labelId="group-type-label"
                                name="groupType"
                                value={newsData.groupType}
                                onChange={handleGroupTypeChange}
                                displayEmpty
                            >
                                {groupTypeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <TextField
                            label="Type"
                            name="type"
                            value={newsData.type}
                            fullWidth
                            margin="normal"
                            InputProps={{ readOnly: true }}
                        />

                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: "#2A5298" }}>
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* Success/Error Dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {dialogType === "success" ? <CheckCircle color="success" /> : <ErrorOutline color="error" />}
                    {dialogType === "success" ? "Success" : "Error"}
                </DialogTitle>
                <DialogContent>{dialogMessage}</DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setDialogOpen(false);
                        FormReset();
                        if (setOpenDialog && dialogType == "success") setOpenDialog(false);
                        if (loadNews && dialogType == "success") loadNews(page + 1, rowsPerPage);
                    }}
                        color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewsManual: (data) => dispatch(AddNewsManual(data))
    };
}

const mapStateToProps = ({ reducer }) => {
    return {
        addNewsList: reducer.addNewsList,
        themeMode: reducer.themeMode
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);
