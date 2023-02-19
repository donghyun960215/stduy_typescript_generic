class Person <T, K>  {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K){
        this._name = name;
        this._age = age;
    }
}
new Person("dong",28);
// new Person<string, number>("dong", "lee");  //오류
