import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "../../css/search.css"
import { Card } from '../card/Card'

const product = [{
    name: "Áo khoác",
    productId: "123123123",
    price: 650000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 50,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 3},
        {username: "linh", score: 4},
        {username: "hoang", score: 1},
        {username: "kien", score: 5},
        {username: "thai", score: 3},
    ]
},{
    name: "Quần bò",
    productId: "3234234",
    price: 340000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 0,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 3},
        {username: "linh", score: 2},
        {username: "hoang", score: 1},
        {username: "kien", score: 2},
        {username: "thai", score: 3},
    ]
},{
    name: "Áo khoác",
    productId: "2342342",
    price: 280000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 50,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 5},
        {username: "linh", score: 5},
        {username: "hoang", score: 4},
        {username: "kien", score: 5},
        {username: "thai", score: 3},
    ]
},{
    name: "Áo khoác",
    productId: "2351512",
    price: 780000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 50,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 5},
        {username: "linh", score: 3},
        {username: "hoang", score: 3},
        {username: "kien", score: 2},
        {username: "thai", score: 3},
    ]
}]

export const Search = () => {
    return (
        <Container>
            <Row className="wrap-heading">
                <div className="heading-page">
                    <h3>Tìm kiếm</h3>
                    <p>Có {product.length} sản phẩm cho tìm kiếm</p>
                </div>
            </Row>
            <Row>
                <p>Kết quả tìm kiếm cho H2</p>
            </Row>
            <Row>
                {
                    product.map(item => <Card product={item} />)
                }
            </Row>
        </Container>
    )
}
