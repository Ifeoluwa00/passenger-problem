const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here

    //populating our array with people and state
    let allPassengers : {name:string, location:string}[] = []
    let reserve: {name:string, location:string}[]  = []
    let noOfCount:number = 0;
    
    let boarded: {name:string, location:string}[]  =[]
    
    let destinations :string[] = ['Abuja','Lagos','Benue','Kaduna','Sambisa']
    for(let i = 1; i<=passengers; i++){
        let loc:number = i%5
        let newPassenger = {name:`passenger${i}`, location:destinations[loc]}
        allPassengers.push(newPassenger)
    }
    
    if(passengers < 5){
        reserve = allPassengers;
        noOfCount = 0
        boarded = []
    }else if(passengers<=50){
        if(passengers%5 === 0){
            boarded = allPassengers;
            noOfCount = 1;
            reserve = []
        }else{
            let n:number = passengers%5;
            let p:number =passengers - n;
            noOfCount = 1;
            boarded = [...allPassengers].splice(0,p);
            reserve = [...allPassengers].splice(-n)
        }
    }else{
        if(shuffle< 1){
            noOfCount = 1;
            boarded = [...allPassengers].splice(0,50)
            reserve = [...allPassengers].splice(-(passengers-50))
        }else{
            if(((shuffle+1)*50)>= passengers){
                let f1 : number = Math.floor(passengers/50)
                let f2 : number 
                    if((passengers%50) > 4 ){
                         f2 = 1;
                    }else{
                         f2 = 0
                    }
                    
                noOfCount = f1+ f2
                    if(passengers % 50 === 0){
                        boarded = [...allPassengers].splice(-50)
                        reserve =[]
                    }else if(passengers % 5 === 0){
                        boarded = [...allPassengers].splice(-(passengers%50))
                        reserve =[]
                    }else{
                        let boardNumber = passengers - (50+(passengers%5))
                        boarded = [...allPassengers].splice(boardNumber,50)
                        reserve = [...allPassengers].splice(-(passengers%5))
                    }
            }else{
                noOfCount = shuffle + 1;
                let reservedNoOfPeople :number = passengers - (noOfCount*50)
                reserve =[...allPassengers].splice(-reservedNoOfPeople);
                let boardNumber :number = reservedNoOfPeople + 50
                boarded = [...allPassengers].splice(boardNumber, 50)
            }
    
        }
    }
    

    return {
        boarded:boarded ,
        reservation:reserve,
        count:noOfCount
    } 
}
export default taskOne;