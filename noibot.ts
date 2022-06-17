class BubleSort{
    static list: number[] = [10, 5, 2, 5, 7, -2, 4, 3, 3, 9];
    static bubleSort(list: number[]): void{
        let needNextPass = true;
        for(let i = 1; i < list.length && needNextPass; i++){
            needNextPass = false;
            for(let j = 0; j < list.length - i; j++){
                if(list[j] > list[j+1]){
                    let temp = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                    needNextPass = true;
                }
            }
        }
    }
}
BubleSort.bubleSort(BubleSort.list);
for(let i = 0; i < BubleSort.list.length; i++){
    console.log(BubleSort.list[i]);
}