function firstNonRepeatedChar(str) {
	s=str.length
	for(let i=0;i<s;i++){
		for(let j=i+1;j<s;j++){
			if(str[i]!==str[j]){
				console.log(s[i])
				break
			}
		}
	}
	
 // Write your code here
} 
