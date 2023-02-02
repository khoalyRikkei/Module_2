import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    const children = props.children;
    console.log("check chilren", props);
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
