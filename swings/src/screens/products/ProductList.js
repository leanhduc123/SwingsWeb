import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Card } from "../card/Card"
import "../../css/productList.css"

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
export const ProductList = ( props ) => {
    const [ selectedOption, setSelectedOption ] = useState("san_pham_noi_bat")
    const [ productList, setProductList ] = useState(product)
    const { type, link } = props
    console.log(type + " " + link) 
    const sortList = (value) => {
        var val = product
        if (selectedOption === "gia_tang_dan") {
            val.sort((a,b) => b.price*(100 -b.discount)/100 - a.price*(100 - a.discount)/100)
            setProductList(val)
        } else if (selectedOption === "gia_giam_dan") {
            val.sort((a,b) => a.price*(100 - a.discount)/100 - b.price*(100 - b.discount)/100)
            setProductList(val)
        } else if (selectedOption === "ten_a_z") {
            val.sort((a,b) => b.name.trim().localeCompare(a.name.trim()))
            setProductList(val)
        } else if (selectedOption === "ten_z_a") {
            val.sort((a,b) => a.name.trim().localeCompare(b.name.trim()))
            setProductList(val)
        } else {
            setProductList(product)
        }
        setSelectedOption(value)
    }
    useEffect(() => {
        console.log(selectedOption)
    }, [selectedOption])

    return (
        <div>
            <Row>
                <img className="carosel" src="http://theme.hstatic.net/200000201725/1000627199/14/slideshow_1.png?v=301" alt="Thời trang nam" />
            </Row>

            <Row>
                <Container className="productList_title">
                    <span className="title">{type}</span>
                    <div className="custom_drop">
                        <select className="custom_drop_select" onChange={e => sortList(e.target.value)}>
                            <option className="item" value="san_pham_noi_bat">Sản phẩm nổi bật</option>
                            <option className="item" value="gia_tang_dan">Giá: Tăng dần</option>
                            <option className="item" value="gia_giam_dan">Giá: Giảm dần</option>
                            <option className="item" value="ten_a_z">Tên: A-Z</option>
                            <option className="item" value="ten_z_a">Tên: Z-A</option>
                            <option className="item" value="cu_nhat">Cũ nhất</option>
                            <option className="item" value="moi_nhat">Mới nhất</option>
                        </select>
                    </div>
                </Container>
            </Row>

            <Container>
                <Row>
                    {/* {
                        productList.map(item => <Card product={item} />)
                    } */}
                </Row>
            </Container>
        </div>
    )
}
