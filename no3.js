printSegitiga = (num) =>  {
    let string = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num - i + 1 ; j++) {
        string = `${string} ${j} `;
      }
        string += "\n";
    }
    return string;
  }
  console.log(printSegitiga(6));
