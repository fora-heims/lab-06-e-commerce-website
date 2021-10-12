export function findById(id, array){
    for (let object of array){
        if (id === object.id){
            return object;
        }
    }
}