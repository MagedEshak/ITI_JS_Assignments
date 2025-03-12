 

let adWindow = null;

        
        document.getElementById("openAd").onclick = function (e) {
            e.preventDefault();
            setTimeout(() => {
                adWindow = window.open("", "_blank", "width=500,height=400");

                if (adWindow) {
                    adWindow.document.write(`
                        <html>
                        <head><title>Special Offer!</title></head>
                        <body>
                            <h2>Amazing Deals Just for You!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at eros id orci commodo suscipit. 
                            Donec in augue id ligula luctus scelerisque. Suspendisse potenti. Sed vitae nunc eu urna tempus sagittis.</p>
                            <p>Aliquam erat volutpat. Curabitur nec elit quis tortor fermentum fermentum. Etiam finibus turpis in sapien malesuada, 
                            nec fermentum turpis commodo. Cras tincidunt lorem non justo facilisis, nec bibendum neque tincidunt.</p>
                            <p>Shop now and get up to 50% OFF! Limited Time Offer!</p>
                        </body>
                        </html>
        `);
                } else {
                    alert("Popup was blocked. Please allow popups for this site.");
                }
            }, 3000);
        };

        document.getElementById("closeAd").onclick = function (e) {
            e.preventDefault();
            if (adWindow && !adWindow.closed) {
                adWindow.close();
            } else {
                alert("No ad window is open.");
            }
        };
