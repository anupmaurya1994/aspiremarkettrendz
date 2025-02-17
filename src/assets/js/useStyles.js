import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    conetent: {
        position: "inherit",
        width: "95%",
        margin: "0 auto"
    },
    advertisment: {
        height: "95px",
        background: "rgba(156, 156, 156, 0.08)",
        backdropFilter: "blur(40px)",
        borderRadius: "5px",
        marginBottom: "19px"
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
    },
    heading: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "30px",
        lineHeight: "36px",
        color: "#C1C1C1",
        margin: "0",
        marginTop: "10px"
    },
    cardComponent: {
        background: "rgba(53, 53, 53, 0.08)",
        border: "1px solid #514F4F",
        backdropFilter: "blur(10px)",
        width: "100%",
        minHeight: "525px"
    },
    socialButton: {
        textTransform: 'capitalize',
        width: "122px",
        height: "38px",
        background: "rgba(156, 156, 156, 0.08)",
        backdropFilter: "blur(10px)",
        borderRadius: "5px",
        margin: "10px",
        marginLeft: "0px"
    },
    socialRootButtons: {
        marginTop: "15px",
        marginBottom: "15px",
        display: "flex",
        height: "40px",
        width: "400px",
        justifyContent: "space-between",
        color: "#fff"
    },
    LatestArticles: {
        fontWeight: "800",
        fontSize: "24px",
        lineHeight: "29px",
        color: "#E7E7DC",
        marginTop: "30px",
        marginBottom: "10px"
    },
    cardPostDeliverd: {
        width: "100%",
        paddingBottom: "10px",
        background: "rgba(47, 47, 47, 0.08)",
        boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.56)",
        backdropFilter: "blur(10px)",
        borderRadius: "5px",
        marginTop: "5px"
    },
    inputEmail: {
        background: "rgba(156, 156, 156, 0.08)",
        border: "1px solid #505050",
        borderRadius: "5px",
        width: "60%",
        margin: "0 auto",
        height: "42px",
        marginTop: "20px",
        color: "#fff",
        display: "block",
        paddingLeft: "10px"
    },
    subscribeButton: {
        width: "64%",
        background: "#2A76E9 !important",
        borderRadius: "5px",
        margin: "0 auto",
        marginTop: "20px",
        display: "block",
        color: "#fff",
        textAlign: "center",
        height: "50px",
        lineHeight: "2.7"
    },
    cardPostFooter: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "11px",
        lineHeight: "13px",
        color: "#C1C1C1",
        textAlign: "center",
        width: "100%",
        paddingTop: "28px",
        margin: "0 auto",
        marginLeft: '8px',
        width: '94%',
        textAlign: 'justify'
    },
    freeBook: {
        width: "100%",
        marginTop: "25px"
    },
    advertismentText: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "15px",
        lineHeight: "18px",
        color: "#C1C1C1",
        position: "absolute",
        right: "12px",
        bottom: "8px",
        textTransform: "capitalize"
    },
    hrstyle: {
        width: "90%",
        marginLeft: "0"
    },
    imagewdth: {
        minWidth: "218px"
    }
}));
export default useStyles