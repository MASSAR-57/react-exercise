import Header from "./Header";
import Footer from "./Footer";

const Ohwaku = (props) => {
    return (
        <>
            <Header />
              <div className="pt-25 bg-slate-800 min-h-screen">
                {props}
              </div>
            <Footer />
        </>
    );
};

export default Ohwaku;
