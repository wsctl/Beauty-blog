import Admin from "../components/admin/admin";
import Classfiy from '../components/admin/classfiy'
import Arcticl from '../components/admin/arcticl';
import createArcticl from '../components/admin/createArticle';
import changeArcticl from '../components/admin/changeArticle'
import detail from '../components/admin/detail'
export default[
{
	path:"/admin",
	name:'admin',
	component:Admin,
	children:[{
    	path:"classfiy",
    	component:Classfiy
    },{
    	path:"acticl",
    	component:Arcticl
    },{
    	path:"createArticle",
    	component:createArcticl
    },{
    	path:"changeArticle",
    	name:'changeArcticl',
    	component:changeArcticl
    },{
    	path:"detail",
    	name:'detail',
    	component:detail
    }],
    
}


]




