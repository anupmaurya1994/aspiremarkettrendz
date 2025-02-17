import React, { useState, useEffect } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AddCircle } from "@material-ui/icons";
import { connect } from "react-redux";
import AddNewsForm from "../AddNewsPage";
import { GetAllManualNews } from "../../actions/news";

const AdminPanel = (props) => {
    const [newsData, setNewsData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0); // Total news records
    const [page, setPage] = useState(0); // Current page (zero-based index)
    const [rowsPerPage, setRowsPerPage] = useState(7); // Number of rows per page

    useEffect(() => {
        loadNews(page + 1, rowsPerPage); // Initial API call
    }, []);

    useEffect(() => {
        if (props.manualNewsLists.length !== 0) {
            setIsLoading(false);
        }
    }, [props.manualNewsLists]);



    const loadNews = async (page, limit) => {
        setIsLoading(true);
        const response = await props.GetAllManualNews({ limit, page });

        if (response && response.data) {
            setTotalRecords(response.total_records);

            // 🔥 Fix: Ensure unique `id` for DataGrid
            const formattedData = response.data.map((item) => ({
                ...item,
                id: item._id, // MUI DataGrid requires a unique `id`
            }));

            setNewsData(formattedData);
        }
        setIsLoading(false);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
        loadNews(newPage + 1, rowsPerPage); // Load new page data
    };

    const handlePageSizeChange = (newPageSize) => {
        setRowsPerPage(newPageSize);
        setPage(0); // Reset to first page
        loadNews(1, newPageSize); // Reload with new page size
    };

    const columns = [
        { field: "id", headerName: "#", width: 100 },
        { field: "title", headerName: "Title", flex: 2 },
        { field: "groupType", headerName: "Group Type", flex: 1 },
        { field: "type", headerName: "Type", flex: 1 },
    ];

    return (
        <Box sx={{ p: 3 }}>

            <Box sx={{ justifyContent: 'space-between', display: "flex" }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#D4A017" }}>
                    NEWS LIST
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddCircle />}
                    onClick={() => setOpenDialog(true)}
                    sx={{ mb: 2, backgroundColor: "#D4A017", color: "#fff", "&:hover": { backgroundColor: "#C19A1B" } }}
                >
                    Add News
                </Button>
            </Box>

            <Box sx={{ height: 450, width: "100%", backgroundColor: "#fff", borderRadius: 2, boxShadow: 3 }}>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <DataGrid
                        rows={newsData}
                        columns={columns}
                        pageSize={rowsPerPage}
                        rowCount={totalRecords}
                        pagination
                        paginationMode="server"
                        onPageChange={(params) => handlePageChange(params.page)}
                        onPageSizeChange={(params) => handlePageSizeChange(params.pageSize)}
                        rowsPerPageOptions={[5, 7, 10]}
                    />
                )}
            </Box>

            {/* Add News Modal */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="lg" fullWidth>
                <DialogTitle>Add News</DialogTitle>
                <DialogContent>
                    <AddNewsForm setOpenDialog={setOpenDialog} loadNews={loadNews} page={page} rowsPerPage={rowsPerPage} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="error">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

const mapStateToProps = ({ reducer }) => ({
    manualNewsLists: reducer.manualNewsLists,
    themeMode: reducer.themeMode,
});

const mapDispatchToProps = (dispatch) => ({
    GetAllManualNews: (data) => dispatch(GetAllManualNews(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
