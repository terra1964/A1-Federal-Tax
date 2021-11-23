
const   percent1 = 0.10,
        percent2 = 0.12,
        percent3 = 0.22,
        percent4 = 0.24,
        percent5 = 0.32,
        percent6 = 0.35,
        percent7 = 0.37;

const   limit0 =      0,
        limit1 =   9950,
        limit2 =  40525,
        limit3 =  86375, 
        limit4 =  164925,
        limit5 =  209425,
        limit6 =  523600;


function calc(){
    
    let sum = +incomeSum.value;
        sum = sum - 12550; //ставка 0% не облагаемый минимум            
                  
    let tax = 0;
    
        if(sum <=limit0){
            tax = 0;
        } else if(sum < limit1){
            tax = sum * p1;
            
        } if(sum >= limit1 && sum < limit2){
            tax = limit1 * percent1 + (sum - limit1) * percent2;
            
        } if(sum >= limit2 && sum < limit3){
            tax = limit1 * percent1 + (limit2 - limit1) * percent2 + (sum - limit2) * percent3;
         
        } if(sum >= limit3 && sum < limit4){
            tax = limit1 * percent1 + (limit2 - limit1) * percent2 + (limit3 - limit2) * percent3 + (sum - limit3) * percent4;
            
        } if(sum >= limit4 && sum < limit5){
            tax = limit1 * percent1 + (limit2 - limit1) * percent2 + (limit3 - limit2) * percent3 + (limit4 - limit3) * percent4 + (sum - limit4) * percent5;
            
        } if(sum >= limit5 && sum < limit6){
            tax = limit1 * percent1 + (limit2 - limit1) * percent2 + (limit3 - limit2) * percent3 + (limit4 - limit3) * percent4 + (limit5 - limit4) * percent5 + (sum - limit5) * percent6;
        } if(sum >= 523600){
            tax = limit1 * percent1 + (limit2 - limit1) * percent2 + (limit3 - limit2) * percent3 + (limit4 - limit3) * percent4 + (limit5 - limit4) * percent5 + (limit6 - limit5) * percent6 + (sum - limit6) * percent7;
        }      
    taxSum.innerHTML = `$ ${tax.toFixed(2)}` ;
}