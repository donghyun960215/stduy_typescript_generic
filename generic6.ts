class personExtends <T extends string | number>{   // 이와같이 상속을 하게 되면 T는 string와 number만 가능하게 된다.
    private _name: T;

    constructor(name: T){
        this._name = name;
    }
}

new personExtends("dong");
new personExtends(28);
// new personExtends(true);   //오류