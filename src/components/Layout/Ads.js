import React, { useState } from "react";

let isLoad = 0;
const AdsComponent = () => {
    const page = window.location.pathname.replaceAll("/", "")
    useState(() => {
        const installGoogleAds = () => {

            if (document.getElementById(`io_165143fd6da7c5${page}`).className == "") {
                document.getElementById(`io_165143fd6da7c5${page}`).className = page
                //Ads 1
                var jsEditor = "var iO = [\"io_165143fd6da7c5" + page + "\",\"60:0:1492\",\"300\",\"250\"];"
                var script = document.createElement('script');
                document.getElementsByTagName('HEAD')[0].appendChild(script);
                script.type = 'text/javascript';
                script.appendChild(document.createTextNode(jsEditor));


                var ioAds = window.document.createElement('script');
                ioAds.src = '//ioadserve.com/siteAds.js';
                ioAds.type = 'text/javascript';
                document.getElementsByTagName('HEAD')[0].appendChild(ioAds);
            }

            setTimeout(() => {
                if (document.getElementById(`io_165143fcac3a71${page}`).className == "") {
                    document.getElementById(`io_165143fcac3a71${page}`).className = page
                    var jsEditor2 = "var iO = [\"io_165143fcac3a71" + page + "\",\"60:0:1491\",\"970\",\"90\"];"
                    var script2 = document.createElement('script');
                    document.getElementsByTagName('HEAD')[0].appendChild(script2);
                    script2.type = 'text/javascript';
                    script2.appendChild(document.createTextNode(jsEditor2));

                    var ioAds2 = window.document.createElement('script');
                    ioAds2.src = '//ioadserve.com/siteAds.js';
                    ioAds2.type = 'text/javascript';
                    document.getElementsByTagName('HEAD')[0].appendChild(ioAds2);
                }
            }, 3000)


        };

        setTimeout(() => {
            installGoogleAds();
        }, 1000)

    }, []);

    return (
        <div className='ads' style={{ "marginTop": "34px" }}>
            {/* <div id={`io_165143fd6da7c5${page}`}></div> */}
        </div>
    );
}
export default AdsComponent