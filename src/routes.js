import Blogs from './pages/Blogs.vue';
import AddBlog from './pages/AddBlog.vue';
import ShowBlog from './pages/ShowBlog.vue';

export default [
	{path: '/', component: Blogs},
	{path: '/add', component: AddBlog},
	{path: '/blog/:id', component: ShowBlog}
]