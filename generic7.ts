interface IPerson {
  name: string;
  age: number;
};


const person: IPerson = {
  name: "dong",
  age: 28,
};




function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProp(person, "name");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}
setProp(person, "name", "dong");
// setProp(person, "name", 28);    //오류
