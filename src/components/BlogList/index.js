// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <div>
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
