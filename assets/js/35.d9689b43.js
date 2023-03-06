(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{567:function(e,a,s){"use strict";s.r(a);var t=s(3),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"其他类型转化为-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他类型转化为-string"}},[e._v("#")]),e._v(" 其他类型转化为 String")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("调用被转换数据类型的 "),s("code",[e._v("toString()")]),e._v("方法")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 该方法不会影响原变量，它会将转换结果返回，可通过 a = a.toString(); 重新赋值给原变量。\n2. 注意：null 和 undefined 这两个值没有 toString() 方法，如果调用会报错。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("调用 "),s("code",[e._v("String()")]),e._v("函数，并将被转换的数据作为参数传递给函数。"),s("code",[e._v("a = String(a)")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('1. 使用 String() 函数做强制转换时，对于 Number 和 Boolean 实际上就是调用的 toString() 方法.\n2. 对于 null 和 undefined，会将 null undefined 直接转换为"null" 、"undefined"字符串。\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("String 隐式类型转换")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('1. 任何值和字符串做加法运算时，都会先转换为字符串，然后再和字符串做连接运算。\n2. 我们可以利用这一特点，可以将任意的数据类型 + 一个"" （a = a +"";）即可使其变为 String 类型。\n3. 这是一种隐性的类型转换。由浏览器自动完成，实际上它也是调用 String 函数（这种方式用的更多一些）。\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"其他类型转化为-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他类型转化为-number"}},[e._v("#")]),e._v(" 其他类型转化为 Number")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("使用 "),s("code",[e._v("Number()")]),e._v("函数")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("字符串 --\x3e 数字")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 如果是纯数字的字符串，则直接将其转换为数字。\n2. 如果字符串中有非数字的内容，则转换为 NaN。\n3. 如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("布尔值 --\x3e 数字")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. true --\x3e 1\n2. false --\x3e 0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Null --\x3e 数字 0")])]),e._v(" "),s("li",[s("p",[e._v("Undefined --\x3e 数字 NaN")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("parseInt()")]),e._v("与"),s("code",[e._v("parseFloat()")]),e._v("函数")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("parseInt()")]),e._v("函数 把一个字符串转换为一个整数")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('1. 将一个字符串中有效的整数内容提取出来，转换为 Number。如 "123px" --\x3e 123 "a123" --\x3e NaN "12.a3" --\x3e 12\n2. 可传递第二个参数表示以什么进制解析。a = parseInt(a , 10) 表示以 10 进制解析\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("parseFloat()")]),e._v("函数 把一个字符串转换为一个浮点数")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('作用和`parseInt()`类似，不同的是可以提取出小数。如 "123.45.67" --\x3e 123.45 "123.5px" --\x3e 123.5\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[e._v('如果对非 String(数值也一样)使用这两个函数，它会将值先转换为 String，然后再操作。 True --\x3e "True" --\x3e NaN')])])]),e._v(" "),s("li",[s("p",[e._v("Number 隐式类型转换")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 对于非 number 类型的值，它会将该数据先转换 number，然后再运算。\n2. 可以对一个其他数据类型使用+ (`a = +a`)，来将其转换为 Number 类型。\n3. 隐式类型转换它的原理和 Number 函数一样，且这是转换为 Number 类型最方便的方式。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"其他类型转换为-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他类型转换为-boolean"}},[e._v("#")]),e._v(" 其他类型转换为 Boolean")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("使用 Boolean()函数")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("数字 --\x3e 布尔值")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 除了 0 和 NaN，其余的都是 true。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("字符串 --\x3e 布尔值")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('1. 除了空串""，其余的包括空格字符串" "都是 true。\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("null 和 undefined --\x3e false")])]),e._v(" "),s("li",[s("p",[e._v("object 对象类型 --\x3e true")])])])]),e._v(" "),s("li",[s("p",[e._v("Boolean 隐式类型转换")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 如果对一个非 boolean 类型值进行非运算，则会将其转换为 Boolean 类型值，然后再取反。\n2. 所以我们利用这个特点可以为一个任意类型取两次反!(a = !!a)，来将其转换为 Boolean 类型。\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);