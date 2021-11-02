const sentence = "hello there from lighthouse labs";
let timer = 0

// for(const c of sentence){
//   timer += 500
//   setTimeout(()=>{
//     process.stdout.write(c)
//   }, timer)
  
// }


for(const i in sentence){
  if(i == (sentence.length-1)){
    timer += 100
    setTimeout(()=>{
      process.stdout.write(sentence[i]+'\n')
    }, timer)
  }
  else{
    timer += 100
    setTimeout(()=>{
      process.stdout.write(sentence[i])
    }, timer)
  }
}