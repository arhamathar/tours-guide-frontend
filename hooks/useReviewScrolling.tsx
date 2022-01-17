import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useReviewScrolling(pageNumber:any,id:string) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasMore, setHasMore] = useState(false)
  console.log(id);
  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel:any
    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/hotel/getHotelReviews/' +id,
      params: {page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      console.log(res);
      setReviews((prevReviews) => {
        return [...prevReviews, ...res.data.data.data.reviews.map((b:any) => b)]
      })
      setHasMore(res.data.data.data.reviews.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber,id])

  return { loading, error, reviews, hasMore }
}