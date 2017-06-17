//reverse the TopRow, pop() all elements in top row and remove the empty row
//pop() the last element on every remaining file, the RightColumn
//flip remaining matrix horizontally and vertically
//repeat recursively
let snail = (a, f = '', popFile = popcornTopRow(a[0].reverse()), popColumn = popcornRightColumn(removeEmpty(a),0)) => removeEmpty(a).length > 0 ? 
    snail(flipVertical(flipHorizontal(a)),f + popFile + popColumn) :  
    format(f+popFile) //the last iteration is always one array so don't try to add popColumn
let flipHorizontal = (a) => removeEmpty(a).reverse();
let flipVertical = (a) => a.map(x=>x.reverse());
let removeEmpty = (x) => x.filter(x=>x.length>0)
let popcornTopRow = (a, f='') => a !== undefined && a.length > 0 ? popcornTopRow(a, f + ',' + a.pop()) : f
let popcornRightColumn = (a,i,f='') => i < a.length && a.length > 0 ? popcornRightColumn(a,i+1, f + ',' + a[i].pop()) : f
let format = (f) => f.toString().split(',').filter(x=>x).map(x => parseInt(x))

//3 line solution with popcornTop and popcornRight
//let snail = (a, f = '', popFile = popcornTopRow(a[0].reverse()), popColumn = popcornRightColumn(a.filter(x=>x.length>0),0)) => a.filter(x=>x.length>0).length > 0 ? snail(a.filter(x=>x.length>0).reverse().map(x=>x.reverse()),f + popFile + popColumn) : (f+popFile).toString().split(',').filter(x=>x).map(x => parseInt(x))