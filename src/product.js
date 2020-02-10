import React from "react";

//自定义组件  --> 导出
function Product(props){
	console.log(props)
	return(
		<div>
			<div>{props.name}</div>
			<div>单价:{props.price}</div>
		</div>
		)

}


export default Product
