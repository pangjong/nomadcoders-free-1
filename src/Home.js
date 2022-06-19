import * as useState from '../components/useState';
import { useParams } from 'react-router-dom';

// pagename이 같으면 해당 페이지 return
// 이런느낌으로는 사용이 불가능한가봐 다른식으로 적용하는방법을 찾아야함
function Home() {
  const params = useParams();
  
  return (
      <>
        {/* {useState.filter((page) => {page == params.pageName})} */}
      </>
  );
}

export default Home;