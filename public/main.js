/*
 * @Author: your name
 * @Date: 2021-05-22 15:54:59
 * @LastEditTime: 2021-05-22 21:15:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /AJAX-learning/public/main.js
 */
console.log("我是main.js")

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/1.css")
  request.onload = () => {
    console.log("请求 CSS 成功")
    // 创建 style 标签
    const style = document.createElement("style")
    // 填写 style 内容
    style.innerHTML = request.response
    // 将 style 标签插入 head 标签中
    document.head.appendChild(style)
  }
  request.onerror = () => {
    console.log("请求 CSS 失败")
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/2.js")
  request.onload = () => {
    console.log("请求 JS 成功")
    // 创建 script 标签
    const script = document.createElement("script")
    // 填写 script 内容
    script.innerHTML = request.response
    // 将 script 标签插入 body 标签中
    document.body.appendChild(script)
  }
  request.onerror = () => {
    console.log("请求 JS 失败")
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/3.html")
  request.onload = () => {
    console.log("请求 HTML 成功")
    // 创建 div 标签
    const div = document.createElement("div")
    // 填写 div 内容
    div.innerHTML = request.response
    // 将 div 标签插入 body 标签中
    document.body.appendChild(div)
  }
  request.onerror = () => {
    console.log("请求 HTML 失败")
  }
  request.send()
}

// getCSS.onclick = () => {
//   const request = new XMLHttpRequest()
//   request.open("GET", "/1.css") // readyState = 1
//   request.onreadystatechange = () => {
//     console.log(request.readyState)
//     // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         // 创建 style 标签
//         const style = document.createElement("style")
//         // 填写 style 内容
//         style.innerHTML = request.response
//         // 插到头里面
//         document.head.appendChild(style)
//       } else {
//         alert("加载 CSS 失败")
//       }
//     }
//   }
//   request.send() // readyState = 2
// }

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/4.xml")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName("warning")[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/5.json")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response)
      console.log(request.response)
      // 输出用户名
      const object = JSON.parse(request.response)
      userName.textContent = object.name
      console.log(object)
      // JSON 不一定是对象，例如JSON中 bool 为字符串，parse()后为布尔值
    }
  }
  request.send()
}
