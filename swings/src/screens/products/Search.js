import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import "../../css/search.css"
import { Card } from '../card/Card'
import Axios from 'axios'

export const Search = ({ match }) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            return Axios.get("http://localhost:5000/products/:name?searchKeyword=" + match.params.p)
            .then((res) => { 
                setProduct(res.data.message)
                console.log(res.data.message)
            })
            .catch((err) => {console.log(err)})
        }
        fetchData()
    },[])
    return (
        <Container>
            <Row className="wrap-heading">
                <div className="heading-page">
                    <h3>Tìm kiếm</h3>
                    <p>Có {product !== null ? product.length : "0"} sản phẩm cho tìm kiếm</p>
                </div>
            </Row>
            <Row>
                <p>Kết quả tìm kiếm cho {match.params.p}</p>
            </Row>
            <Row>
                {  (product !== null)
                    ? product.map(item => <Card product={item} />)
                    : <div></div>
                }
            </Row>
        </Container>
    )
}
