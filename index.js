// Your code here

function saturdayFun(activity){
    let regular = "roller-skate";
    if (activity != null){
        return `This Saturday, I want to ${activity}!`;
    }  
        else  {
        return `This Saturday, I want to ${regular}!`;
    }
}

//Tried different approaches using If()

function mondayWork (officeact) {
    let regular = "go to the office";
    if (officeact){
        return `This Monday, I will ${officeact}.`;
        
    } else {
        return `This Monday, I will ${regular}.`;
    }
    
}


 

     let wrapAdjective = function(highlight ="*") {
        return function(adjective ="special") {
          return `You are ${highlight}${adjective}${highlight}!`
        }
      }