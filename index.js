const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.redirect('https://backoffice.godream.com.br'+req.url)
})

app.set('port', (process.env.PORT || 3000))
const server = app.listen(app.get('port'), () => console.log(`🔥 listening on port: ${app.get('port')}`))