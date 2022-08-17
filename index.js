// code your solution here
/*function razzle() {
    console.log("You've been razzled!");
  }
  razzle();*/
  function saturdayFun(fun="roller-skate"){
    return(`This Saturday, I want to ${fun}!`);

  }
  saturdayFun();
  const  mondayWork=function(work="go to the office"){
    return`This Monday, I will ${work}.`;
  }
  saturdayFun("from home");

  function wrapAdjective(adjective="*"){
    return function(name="special"){
            return(`You are ${adjective}${name}${adjective}!`);
          };
    }
console.log(wrapAdjective("%") ("a dedicated coder"));
  