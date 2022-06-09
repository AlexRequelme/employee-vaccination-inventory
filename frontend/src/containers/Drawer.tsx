import MuiDrawer from "@mui/material/Drawer";
import { Dispatch, SetStateAction } from "react";

type DrawerProps = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
    children: any;
};

function Drawer({ state, setState, children }: DrawerProps) {
    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setState(open);
        };

    return (
        <MuiDrawer anchor="left" open={state} onClose={toggleDrawer(false)}>
            {children}
        </MuiDrawer>
    );
}

export default Drawer;
