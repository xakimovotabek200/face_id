import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navbar/Navbar";

const AppLayout = ({ children }) => {
    return (
        <div className="bg-gray-50 container mx-auto">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
};

export default AppLayout;
