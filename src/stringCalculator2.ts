
export function  stringCalculator2(input:string) {
    if(input.length === 0){
        return 0;
    }else{
        const numbers = input.replace(/\n/g, ",").split(",");
        return numbers.reduce((acc, num) => acc + parseInt(num), 0);
    }
}
