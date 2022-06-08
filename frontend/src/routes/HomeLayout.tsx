import { Navigate, Route, Routes } from "react-router-dom";

function HomeLayout() {
    return (
        <div className="w-full h-full bg-gray-100 flex">
            <Routes>
                <Route index element={<Navigate to="project" />} />
            </Routes>
        </div>
    );
}

export default HomeLayout;
