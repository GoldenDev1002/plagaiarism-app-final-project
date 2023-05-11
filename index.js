const express = require("express");
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");

const multer = require('multer');
const stringSimilarity = require('string-similarity');
const upload = multer();
//const connection = require("./db/connection");




app.post('/check', upload.any(), (req, res) => {
    const file1 = req.files[0].buffer.toString();
    const file2 = req.files[1].buffer.toString();
  
    const words1 = file1.split(/\W+/);
    const words2 = file2.split(/\W+/);
  
    const commonWords = words1.filter(word => words2.includes(word));
    console.log(commonWords);
   
    const similarity = stringSimilarity.compareTwoStrings(file1, file2);
    const percentSimilarity = Math.round(similarity * 100);
    const percentage = percentSimilarity + "%"
    console.log("The percentage between these files are :" + percentage)
    console.log(percentSimilarity)
    console.time(percentSimilarity)
    console.timeEnd(percentSimilarity);

  
    const result = {
      percentSimilarity: percentSimilarity + '% similarity',
      commonWords: commonWords.join("\n"),
    
    };
    
    
    // Render the 'result' object in the view
    const responseString = `<h1>Similarity: ${result.percentSimilarity}</h1><br><br>\n\n \nCommon Words:\n${result.commonWords}`
    res.send(responseString);
    
});




app.get("/home", (req, res)=> {
res.render("index")
})
app.get("/routes", (req, res)=> {
    res.render("textUpload")
  
})

app.get("/", (req, res)=> {
  res.render("userView")

})



let portNo = process.env.PORT || 4350
app.listen(portNo, () => {
  console.log(`Server started on port ${portNo}`);
});
