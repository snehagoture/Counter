setTimeout(() => {
    document.querySelector("div").innerHTML=10;
    setTimeout(() => {
        document.querySelector("div").innerHTML=9;
        setTimeout(() => {
            document.querySelector("div").innerHTML=8;
            setTimeout(() => {
                document.querySelector("div").innerHTML=7;
                setTimeout(() => {
                    document.querySelector("div").innerHTML=6;
                    setTimeout(() => {
                        document.querySelector("div").innerHTML=5;
                        setTimeout(() => {
                            document.querySelector("div").innerHTML=4;
                            setTimeout(() => {
                                document.querySelector("div").innerHTML=3;
                                setTimeout(() => {
                                    document.querySelector("div").innerHTML=2;
                                    setTimeout(() => {
                                        document.querySelector("div").innerHTML=1;
                                        setTimeout(() => {
                                            document.querySelector("div").innerHTML="HI THERE!";
                                            
                                        }, 1000);
                                    }, );
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000); 
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);