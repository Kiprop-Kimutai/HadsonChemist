export function paginatorFunction(arrayELement:Array<any>,number_of_elements:number,begin_index:number):Array<any>{
    let pageno:number = Math.ceil(arrayELement.length/number_of_elements);
    //console.log(arrayELement.slice((begin_index*number_of_elements),number_of_elements));
    if(begin_index == 0){
      return arrayELement.slice((begin_index*number_of_elements),number_of_elements);
    }
    return arrayELement.slice((begin_index*number_of_elements),number_of_elements+(pageno*number_of_elements));
  }