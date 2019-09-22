const express = require ('express');
const app = express();
var port = process.env.PORT || 8080;

app.get('/', (req,res) => {
	console.log('Hello log!');
	res.send("Hello html aaaaaaa");
})

app.listen(port, () => console.log(`Listening on port ${port}`));