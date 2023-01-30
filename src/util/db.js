export const ListStudent = [
    {
        code: "SV001",
        name: "Nguyễn Văn A",
        gender: 0,
        doB: "02/15/2005",
        poB: "01",
        address: "Cầu Giấy - Hà Nội",
    },
    {
        code: "SV002",
        name: "Nguyễn Văn B",
        gender: 0,
        doB: "12/19/2000",
        poB: "01",
        address: "Cầu Giấy - Hà Nội",
    },
    {
        code: "SV003",
        name: "Nguyễn Văn C",
        gender: 0,
        doB: "05/09/2002",
        poB: "01",
        address: "Cầu Giấy - Hà Nội",
    },
];

export const newStudent = (code, name, gender, doB, poB, address) => {
    this.code = code;
    this.name = name;
    this.gender = gender;
    this.doB = doB;
    this.poB = poB;
    this.address = address;
    this.setCode = (code) => (this.code = code);
    this.setName = (name) => (this.name = name);
    this.setGender = (gender) => (this.gender = gender);
    this.setDoB = (doB) => (this.doB = doB);
    this.setAddress = (address) => (this.address = address);
    this.setPoB = (poB) => (this.poB = poB);
};
