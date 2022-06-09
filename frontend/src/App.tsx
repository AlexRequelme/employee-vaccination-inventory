import React from "react";
import { resolveValue, Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Alert from "./components/Alert";
import PrivateRoute from "./containers/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import AuthLayout from "./routes/AuthLayout";
import HomeLayout from "./routes/HomeLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Rubik",
            textTransform: "none",
            fontSize: 16,
        },
    },
});

function App() {
    const { user } = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route
                    path="home/*"
                    element={
                        <PrivateRoute isAuthenticated={Boolean(user)}>
                            <HomeLayout />
                        </PrivateRoute>
                    }
                />
                <Route path="/*" element={<AuthLayout />} />
            </Routes>
            <Toaster
                toastOptions={{
                    position: "top-right",
                }}
            >
                {(t) => (
                    <Alert
                        message={resolveValue(t.message, t)}
                        isVisible={t.visible}
                        type={t.type}
                    />
                )}
            </Toaster>
        </ThemeProvider>
    );
}

export default App;
