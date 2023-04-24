
export function findObjectByProperty(arr, str) {
    if (str){
        return arr.filter(todo => todo.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
    }
    return arr
}