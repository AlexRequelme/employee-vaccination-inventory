function employeeFilter(array: any[], filters: any) {
    const { isVaccination, dateFrom, dateTo, ...types } = filters;
    let filterArray = array;

    if (isVaccination) {
        filterArray = filterByVaccinationState(filterArray, isVaccination);
    }

    if (types) {
        console.log(types);
        console.log(filterArray);
        filterArray = filterByVaccinationType(filterArray, types);
    }

    const startDate = new Date(dateFrom);
    const endDate = new Date(dateTo);
    if (endDate >= startDate) {
        filterArray = filterByVaccinationDate(filterArray, startDate, endDate);
    }

    return filterArray;
}

function filterByVaccinationState(array: any[], isVaccination: string) {
    return array.filter((itm) => itm.isVaccination === isVaccination);
}

function filterByVaccinationType(array: any[], vaccinationTypes: any) {
    const typesArray: any[] = [];
    Object.keys(vaccinationTypes).forEach((key) => {
        if (vaccinationTypes[key]) typesArray.push(key);
    });

    if (typesArray.length > 0) {
        return array.filter((itm) =>
            typesArray.some((type) => itm.vaccinationType === type)
        );
    }

    return array;
}

function filterByVaccinationDate(array: any[], startDate: Date, endDate: Date) {
    return array.filter((itm) => {
        const date = new Date(itm.vaccinationDate);
        return date >= startDate && date <= endDate;
    });
}

export default employeeFilter;
