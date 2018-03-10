import custome from "../components/custom/custome";
import index from "../components/custom/index";
import Class from "../components/custom/class";
import Mine from "../components/custom/mine";
import Detail from "../components/custom/detail";
export default[
{
	path:'/custome',
	name:custome,
	component:custome,
	redirect:"/custome/index",
	children:[{
		path:"index",
		component:index
	},{
		path:"class",
		component:Class
	},{
		path:"mine",
		component:Mine
	},{
		path:"detail/:id",
		name:"detail1",
		component:Detail
	}
	]
}


]








