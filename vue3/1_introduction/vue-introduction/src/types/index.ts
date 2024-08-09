// 使用 ts 语法声明一个接口类型
export interface Person {
    id: string;
    name: string;
    age: number
}

// 自定义类型的 1
export type persons = Array<Person>;

// 自定义类型的 2
export type personList = Person[]
