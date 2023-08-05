let sum =0;
let card1=randomnumber()
let card2=randomnumber()
let bal=document.getElementById("bal")
let arr =[]
let message=''
let hasBlackjack=false
let isalive=true
let messageel =document.getElementById("message")
let sumel=document.querySelector("#sum1")
let card =document.getElementById("card")
arr.push(card1)
arr.push(card2)
for(let i=0;i<=(arr.length-1);i++){
	sum=sum+arr[i]
}
 
//random number function
function randomnumber(){
	 let value =Math.floor((Math.random()*13)+1)
	 if(value==11||value==12||value==13){
		value=10
	 }
	return value

}

///start function
function start(){
	card.textContent='Cards :' + card1 + ' , ' + card2 
	sumel.textContent = 'Sum:' + sum

if (sum<=20){
     message='Try Again'
	 hasBlackjack=true
}

else if (sum===21){
     message='you win the game'

}

else {
     message='You Lose The Game'
	 isalive=false
	}
	messageel.textContent=message
	document.getElementById("start").disabled=true
	
}
//restart function
function newstart(){
	location.reload()
}
//new card function
function newCard(){
	let card3 =randomnumber()
     sum =0;
	 money=5000
	 console.log(card3)
	 arr.push(card3)
	for(let i=0;i<=(arr.length-1);i++){
		sum=sum+arr[i]
	}
	card.textContent+=' , '+card3;
	sumel.textContent = 'Sum:' + sum
	if (sum<=20){
		message='Try Again'
		hasBlackjack=true
	}
   
	else if (sum===21){
		message='you win th game'
		bal.textContent=`Balance:₹ ${money*2}`		
	}
	
	else {
		message='You Lose The Game'
		bal.textContent=`Balance:₹ ${money/2}`
		
		document.getElementById("newcard").disabled=true
	}
	messageel.textContent=message
	

}
