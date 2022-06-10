import PersonIcon from "@mui/icons-material/Person";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type EmployeeCardProps = {
    name: string;
    surname: string;
    isVaccination?: string;
    vaccinationType?: string;
    vaccinationDate?: string;
    handleDelete: any;
    handleEdit: any;
};

function EmployeeCard(props: EmployeeCardProps) {
    return (
        <div className="bg-white p-4 rounded-md border flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center">
            <div className="w-full lg:w-2/5 flex flex-col gap-2">
                <div className="flex items-center gap-2 ">
                    <PersonIcon />
                    <span className="truncate">{`${props.name.split(" ")[0]} ${
                        props.surname.split(" ")[0]
                    }`}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MedicalInformationIcon />
                    <span>{props.isVaccination || "-"}</span>
                </div>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <VaccinesIcon />
                    <span>{props.vaccinationType || "-"}</span>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarMonthIcon />
                    <span>{props.vaccinationDate || "-"}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/5 flex lg:flex-col justify-between gap-2">
                <button
                    type="button"
                    className="flex items-center gap-2 text-blue-600 font-semibold"
                    onClick={props.handleEdit}
                >
                    <EditIcon />
                    Actualizar
                </button>
                <button
                    type="button"
                    className="flex items-center gap-2 text-red-600 font-semibold"
                    onClick={props.handleDelete}
                >
                    <DeleteIcon />
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;
