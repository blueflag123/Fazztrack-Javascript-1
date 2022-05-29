let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:  {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

let editedData = {
    ...data,
    name: "Muhammad Dio Fitriadi",
    email: "fitriadidio@gmail.com",
    hobi: ["Programming", "Gaming", "Swimming"]
}
console.log(editedData);

let { address: {street, city}} = data;
let dataBaru = {
    address: {
        street : street,
        city: city ,
    },
}
console.log(dataBaru);
