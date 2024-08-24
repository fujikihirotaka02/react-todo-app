export const ColorfulMessage = (props) => {
    const {color, children} = props;
    console.log(props)
    const contentStyleA = {
        color,
        fontSize: "18px",
    };
    return <p style={contentStyleA}>{children}</p>;
};
