function Sidebar(){
    var dom = document.getElementById('root')

    var sidebar = document.createElement('div')
    sidebar.innerHTML = `sidebar`
    dom.append(sidebar)
}
// ES 模块导出方式
export default Sidebar


//commonJS 模块导出方式
// module.exports = Sidebar