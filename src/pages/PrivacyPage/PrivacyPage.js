import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { conetent } from '../../assets/js/globalStyle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { height, margin, padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    conetent: {
        maxWidth: '750px'
    },

    privacypolicytitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#CCCCCC',
        marginBottom: '25px'
    },
    privacyparagraphsetup: {
        // width: "350px",
        // height: "385px",
        // margin: '0 auto'
    },
    privacyparagraphtitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#ADADAD',
        marginBottom: '10px'
    },
    privacycontent: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#ADADAD',
    },
    privacyparagraphsetuptwo: {
        margin: '20px auto',
        // width:"92%"
    },
    paragraphspace: {
        margin: '30px auto'
    }


}));

function PrivacyPage() {
    const classes = useStyles();

    return (<Container maxWidth="lg" className={` pp-container`}>
        <main>
            <div>
                <Typography variant="h6" align="center" className={classes.privacypolicytitle}>
                    Privacy Policy
                </Typography>
            </div>
            <div>
                <div className={`${classes.privacyparagraphsetup} left-content p-content`} style={{ "marginBottom": "20px" }}>
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        Welcome to <a href='https://www.aspiremarkettrendz.com' target='_blank'>https://www.aspiremarkettrendz.com</a>  (the “Site”).
                    </Typography>

                    <Typography variant="p" className={classes.privacycontent}>
                        We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those users of the Site (“Visitors”) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by <a href='https://www.aspiremarkettrendz.com' target='_blank'>https://www.aspiremarkettrendz.com</a>  (collectively, “Services”) (“Authorized Customers”).
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        Personally Identifiable Information
                    </Typography>

                    <Typography variant="p" className={classes.privacycontent}>
                        Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.                        </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        What Personally Identifiable Information is collected?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase or sell.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        What organizations are collecting the information?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        In addition to our direct collection of information, our third-party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.                        </Typography>
                </div>


                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        How does the Site use Personally Identifiable Information?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        With whom may the information may be shared?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with our affiliated agencies and third-party vendors. We also offer the opportunity to “opt out” of receiving information or being contacted by us or by any agency acting on our behalf.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        How is Personally Identifiable Information stored?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        Personally Identifiable Information collected by <a href='https://www.aspiremarkettrendz.com'>https://www.aspiremarkettrendz.com</a>  is securely stored and is not accessible to third parties or employees of <a href='https://www.aspiremarkettrendz.com'>https://www.aspiremarkettrendz.com</a>  except for use as indicated above.                          </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        What choices are available to Visitors regarding collection, use and distribution of the information?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us at contact@aspiremarkettrendz.com.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        Are Cookies Used on the Site?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused for more than 10 minutes, we will automatically log the Authorized Customer off.
                    </Typography>

                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        How does <a href='https://www.aspiremarkettrendz.com'>https://www.aspiremarkettrendz.com</a>  use login information?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        <a href='https://www.aspiremarkettrendz.com'> https://www.aspiremarkettrendz.com</a> uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user’s movement and use, and gather broad demographic information.                                </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        What partners or service providers have access to Personally Identifiable Information from Visitors and/or Authorized Customers on the Site?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        <a href='https://www.aspiremarkettrendz.com'> https://www.aspiremarkettrendz.com</a> has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know basis for evaluating Authorized Customers for service eligibility. Our privacy policy does not cover their collection or use of this information. Disclosure of Personally Identifiable Information to comply with law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        How does the Site keep Personally Identifiable Information secure?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.
                    </Typography>
                </div>


                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        How can Visitors correct any inaccuracies in Personally Identifiable Information?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us at contact@aspiremarkettrendz.com
                    </Typography>
                </div>


                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site?
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site’s database by contacting contact@aspiremarkettrendz.com. However, because of backups and records of deletions, it may be impossible to delete a Visitor’s entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward.
                    </Typography>
                </div>

                <div className={`${classes.privacyparagraphsetup} left-content p-content`} >
                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        What happens if the Privacy Policy Changes?
                    </Typography>
                    <Typography variant="p" className={`${classes.privacycontent} p-content`}>
                        We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.
                    </Typography>

                    <Typography variant="h6" className={classes.privacyparagraphtitle}>
                        Links:
                    </Typography>
                    <Typography variant="p" className={classes.privacycontent}>
                        This website contains links to other websites. Please note that when you click on one of these links, you are moving to another website. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.
                    </Typography>
                </div>

            </div>
        </main>
    </Container>
    )
}

export default PrivacyPage;