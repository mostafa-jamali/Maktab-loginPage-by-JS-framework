
document.getElementById("root").append(

    FueJS.createElement("div",
        {style:{
            // backgroundColor: "gray",
        },
        className: "left-side"
        },
        [
            FueJS.createElement("div",
                {style:{
                    // backgroundColor: "gray",
                    // width: "600px",
                },
                className: "logo-text"
                },
                [
                    FueJS.createElement("img",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "logo-img",
                        src: "./Assets/PNG/Logo.png",
                        alt: "code",
                        },
                    ),
                    FueJS.createElement("p",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: ""
                        }, "Multi Anti-Virus & Cybersecurity"
                    ),
                ]
            ),
            FueJS.createElement("div",
                {style:{
                //  backgroundColor: "blue",
                },
                className: "razar"
                },
                [
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "ringbase ring1"
                        },
                    ),
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "ringbase ring2"
                        },
                    ),
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "ringbase ring3"
                        },
                    ),
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "ringbase ring4"
                        },
                    ),
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "ringbase ring5"
                        },
                    ),
                    FueJS.createElement("div",
                        {style:{
                            // backgroundColor: "gray",
                        },
                        className: "pointer"
                        },
                        FueJS.createElement("div",
                            {style:{
                                // backgroundColor: "gray",
                            }
                            },
                        ),
                    ),
                ]
            ),
        ]
    ), 

    FueJS.createElement("div",
        {style:{
            // backgroundColor: "gray",
        },
        className: "right-side"
        },
        [
            FueJS.createElement("div", 
                {style:{
                    // backgroundColor: "red",
                },
                className: "top-voroud",
                },
                FueJS.createElement("a",
                    {style:{
                        // backgroundColor: "blue",
                    },
                    id: "size",
                    href: "#"
                    },
                    "ورود")
            ),
            FueJS.createElement("div", 
                {style:{
                    // backgroundColor: "green",
                },
                className: "login-text",
                },
                [
                    FueJS.createElement("p",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "font-size1"
                        },
                        "ورود به حساب کاربری"),

                    FueJS.createElement("p",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "font-size2"
                        },
                        "جهت ورود به برنامه نام کاربری و رمز عبور خود را وارد نمایید"),

                    FueJS.createElement("div",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "user-pas1"
                        },
                        [
                            FueJS.createElement("input",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "username",
                                type: "text",
                                placeholder: "mehran.assari@yahoo.com"
                                },
                            ),
                            FueJS.createElement("i",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "fas fa-user icon1",
                                },
                            ),
                        ]
                    ),
                    FueJS.createElement("div",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "user-pas2"
                        },
                        [
                            FueJS.createElement("input",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "password",
                                type: "text",
                                placeholder: "رمز عبور"
                                },
                            ),
                            FueJS.createElement("i",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "fas fa-lock icon2",
                                },
                            ),
                        ]
                    ),
                    FueJS.createElement("div",
                        {style:{
                        //  backgroundColor: "blue",
                        },
                        className: "security-code"
                        },
                        [
                            FueJS.createElement("div",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "left"
                                },
                                [
                                    FueJS.createElement("i",
                                        {style:{
                                        //  backgroundColor: "blue",
                                        },
                                        className: "fal fa-refresh fa-xs"
                                        },
                                        
                                    FueJS.createElement("img",
                                        {style:{
                                        //  backgroundColor: "blue",
                                        },
                                        className: "code-img",
                                        src: "./Assets/code.JPG",
                                        alt: "code",
                                        },
                                    ),
                                    ),
                                ]
                            ),
                            FueJS.createElement("div",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "right"
                                },
                                [
                                    FueJS.createElement("input",
                                        {style:{
                                        //  backgroundColor: "yellow",
                                        },
                                        className: "sec-code",
                                        type: "text",
                                        placeholder: "کد امنیتی"
                                        },
                                    ),
                                        
                                    FueJS.createElement("i",
                                        {style:{
                                        //  backgroundColor: "blue",
                                        },
                                        className: "fas fa-bars icon",
                                        },
                                    ),
                                ]
                            ),
                        ]
                    ),
                    FueJS.createElement("button",
                        {style:{
                        //  backgroundColor: "yellow",
                        },
                        className: "login",
                        type: "button",
                        placeholder: "ورود"
                        },
                         "ورود"),
                    
                    FueJS.createElement("label",
                        {style:{
                        //  backgroundColor: "yellow",
                        },
                        className: "checkbox",
                        },
                        [
                            FueJS.createElement("input",
                                {style:{
                                //  backgroundColor: "yellow",
                                },
                                className: "checkbox",
                                type: "checkbox",
                                checked: ""
                                },
                            ),
                                
                            FueJS.createElement("span",
                                {style:{
                                //  backgroundColor: "blue",
                                },
                                className: "checkmark",
                                },"مرا بخاطر بسپار"
                            ),
                        ]
                    ),
                ]),
        ]),
)