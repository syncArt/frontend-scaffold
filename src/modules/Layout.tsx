import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <main className="flex w-full justify-center">
            <div className="align-center mt-3 flex w-full max-w-[1200px] flex-col justify-center">
                <Outlet/>
            </div>
        </main>
    );
};
