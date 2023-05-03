export const NextArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#434242", display: "flex", justifyContent: "center", height: "5%", padding: "2.2% 2% 2% 2%", alignItems: "center", paddingBottom: "-3px", borderRadius: "50%", marginTop: "-30px", marginRight: "-1%" }}
                onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (rest) => {
    return (
        <>
            <div
                className={rest.className}
                style={{ ...rest.style, backgroundColor: "#434242", display: "flex", justifyContent: "center", height: "5%", padding: "2.2% 2% 2% 2%", alignItems: "center", paddingBottom: "-3px", borderRadius: "50%", marginTop: "-30px", marginLeft: "-1%" }}
                onClick={rest.onClick}
            />
        </>
    );
};

export const NArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#434242", display: "flex", justifyContent: "center", height: "5%", padding: "2.2% 2% 2% 2%", alignItems: "center", paddingBottom: "-3px", borderRadius: "50%", marginRight: "-1%" }}
                onClick={props.onClick}
            />
        </>
    );
};

export const PArrow = (rest) => {
    return (
        <>
            <div
                className={rest.className}
                style={{ ...rest.style, backgroundColor: "#434242", display: "flex", justifyContent: "center", height: "5%", padding: "2.2% 2% 2% 2%", alignItems: "center", paddingBottom: "-4px", borderRadius: "50%", marginLeft: "-1%" }}
                onClick={rest.onClick}
            />
        </>
    );
};

export const settings = {
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    infinity: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};