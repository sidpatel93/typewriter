const sentence = "hello there from lighthouse labs";
let timer = 0

for(const c of sentence){
  timer += 500
  setTimeout(()=>{
    process.stdout.write(c)
  }, timer)
}


