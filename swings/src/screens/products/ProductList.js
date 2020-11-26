import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Card } from "../card/Card"
import "../../css/productList.css"

const product = [{
    name: "Áo khoác",
    productId: "123123123",
    price: 420.000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    link: "/"
}, {
    name: "Quần bò",
    productId: "123123123",
    price: 650.000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    link: "/"
},{
    name: "Túi xách",
    productId: "123123123",
    price: 550.000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    link: "/"
}, {
    name: "Túi quần",
    productId: "123123123",
    price: 150.000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    link: "/"
}]
console.log(2)
export const ProductList = ( props ) => {
    const [ selectedOption, setSelectedOption ] = useState("san_pham_noi_bat")
    const [ productList, setProductList ] = useState(product)
    const { type, link } = props
    console.log(type + " " + link) 
    const sortList = (value) => {
        var val = product
        if (selectedOption === "gia_tang_dan") {
            val.sort((a,b) => b.price - a.price)
            setProductList(val)
        } else if (selectedOption === "gia_giam_dan") {
            val.sort((a,b) => a.price - b.price)
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
                    {
                        productList.map(item => <Card product={item} />)
                    }
                </Row>
            </Container>
        </div>
    )
}
