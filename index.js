const less = require('less')
const fs = require('fs')
const content = fs.readFileSync('./less.less', 'utf-8')
const Plugin = require('./lessPlugin')

less.render(content, {
    plugins: [new Plugin()],
    javascriptEnabled: true,
})
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.error(e)
    })
