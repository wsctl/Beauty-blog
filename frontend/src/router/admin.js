import Admin from "../components/admin/admin";
import Classfiy from '../components/admin/classfiy'
import Arcticl from '../components/admin/arcticl'
export default[
{
	path:"/admin",
	name:'admin',
	component:Admin,
	children:[{
    	path:"/classfiy",
    	component:Classfiy
    },{
    	path:"/acticl",
    	component:Arcticl
    }]
}


]




