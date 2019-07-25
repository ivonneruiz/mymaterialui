export interface ITest {
    myprop1: string;
    myprop2: boolean;
    myprop3: Array<ITest2>;
}

export interface ITest2 {
    myprop4: string;
}