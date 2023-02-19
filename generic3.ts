function helloArray<T>(message: T[]): T {
  return message[0];
}
helloArray(["Hello", "world"]);
//function helloArray<string>(message: string[]): string
helloArray(["Hello", 5])
//function helloArray<string | number>(message: (string | number)[]): string | number
//union 타입으로 나온다.


function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}
helloTuple(["Hello", "world"]);
//function helloTuple<string, string>(message: [string, string]): string
helloTuple(["Hello", 5]);
//function helloTuple<string, number>(message: [string, number]): string