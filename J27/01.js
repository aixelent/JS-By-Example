const largerElements = (val) => {
  return(elem) => { return elem >= val};
}

let elements = [12, 21, 33, 45, 17].filter(largerElements(30));
console.log(elements)