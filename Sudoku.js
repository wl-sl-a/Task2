const validArray = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
 const invalidArray = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

 console.log(validSolution(validArray))
 console.log(validSolution(invalidArray))

function validSolution(array){
    return checkRowsAndColumns(array) && checkSubboards(array)
}

function checkRowsAndColumns(array){
    for(let i = 0; i < 9; i++){
        let columns = []
        let rows = []
        for(let j = 0; j < 9; j++){
            let columnValue = array[j][i]
            let rowValue = array[i][j]
            if(columnValue < 1 || columnValue > 9 || columns.includes(columnValue)) return false;
            if(rowValue < 1 || rowValue > 9 || rows.includes(rowValue)) return false;
            columns.push(columnValue)
            rows.push(rowValue)
        }
    }
    return true;
}

function checkSubboards(array){
    for(let startRow = 0; startRow < 9; startRow += 3){
        for(let startColumn = 0; startColumn < 9; startColumn += 3){
            let subboard = []
            for(let i = startRow; i < startRow+3; i++){
                for(let j = startColumn; j < startColumn+3; j++){
                    let value = array[i][j]
                    if(value < 1 || value > 9 || subboard.includes(value)) return false;
                    subboard.push(value)
                }
            }
        }
    }
    return true;
}