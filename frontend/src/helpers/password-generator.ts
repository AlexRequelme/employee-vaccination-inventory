function passwordGenerator(surname: string) {
    return `${surname.split(" ")[0].toLowerCase()}123`;
}

export default passwordGenerator;
