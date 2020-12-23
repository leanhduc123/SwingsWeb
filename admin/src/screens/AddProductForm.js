import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "../css/addproductform.css";
import Axios from "axios";

const categoryList = [
    { type: "ÁO", link: "ao" },
    { type: "QUẦN", link: "quan" },
    { type: "BALO-TÚI XÁCH", link: "balo" },
    { type: "GIÀY DÉP", link: "giay" },
    { type: "PHỤ KIỆN KHÁC", link: "phu-kien" },
    { type: "THẮT LƯNG", link: "that-lung" },
    { type: "SẢN PHẨM MÙA ĐÔNG", link: "sp-mua-dong" }
]

const subcategoryList = [
    { type: "ÁO SƠ MI", link: "ao-so-mi" },
    { type: "ÁO THUN", link: "ao-thun" },
    { type: "ÁO POLO", link: "ao-polo" },
    { type: "ÁO LEN", link: "ao-len" },
    { type: "ÁO VEST", link: "ao-vest" },
    { type: "QUẦN JEAN", link: "quan-jean" },
    { type: "QUẦN DÀI", link: "quan-dai" },
    { type: "QUẦN TÂY", link: "quan-tay" },
    { type: "QUẦN SHORT", link: "quan-short" },
    { type: "QUẦN KAKI", link: "quan-kaki" },
    { type: "QUẦN JOGGER", link: "quan-jogger" },
    { type: "GIẦY DA", link: "giay-da" },
    { type: "GIẦY THỂ THAO", link: "giay-the-thao" },
    { type: "ÁO KHOÁC", link: "ao-khoac" },
    { type: "ÁO KHOÁC BÒ", link: "ao-khoac-bo" },
    { type: "ÁO NỈ", link: "ao-ni" },
    { type: "ÁO HOODIE", link: "ao-hoodie" },
    { type: "ÁO KHOÁC DA", link: "ao-khoac-da" },
    { type: "ÁO JEANS", link: "ao-jean" },
]

export const AddProductForm = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(categoryList[0].link)
    const [subcategory, setSubcategory] = useState(subcategoryList[0].link)
    const [img1, setImg1] = useState("")
    const [img2, setImg2] = useState("")
    const sizeList = ["S", "M", "L", "XL", "XXL"]

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const postProduct = async (product) => {
        return await Axios
        .post("http://localhost:5000/products/addProduct", product)
        .then((res) => {
            console.log(res.data.message)
            setOpen(false)
        })
        .catch((err) => {console.log(err)})
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        var arr = []
        for (var index in sizeList){
            if (document.getElementById("size-" + sizeList[index].toLowerCase()).checked){
                arr.push(sizeList[index])
            }
        }
        if (name !== "" && price !== "" && img1 !== null && img2 !== null && arr.length > 0){
            var product = {
                name: name,
                price: price.toString(),
                size: arr,
                category: category,
                subcategory: subcategory,
                image: [img1, img2]
            }
            postProduct(product)
        }
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Add Product
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className="myModal">
                    <h2>Add New Product</h2>
                    <p className="header">Product Details</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            onChange={(e) => { setName(e.target.value) }}
                        ></input>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={(e) => { setPrice(e.target.value) }}
                        ></input>
                        <select id="category" onChange={(e) => { setCategory(e.target.value) }}>
                            {
                                categoryList.map(item => <option value={item.link}>{item.type}</option>)
                            }
                        </select>
                        <select id="subcategory" onChange={(e) => { setSubcategory(e.target.value) }}>
                            {
                                subcategoryList.map(item => <option value={item.link}>{item.type}</option>)
                            }
                        </select>
                        <div className="size-checkbox">
                            <input type="checkbox" id="size-s" name="size" value="S" />
                            <label for="size-s">S</label>
                            <input type="checkbox" id="size-m" name="size" value="M" />
                            <label for="size-m">M</label>
                            <input type="checkbox" id="size-l" name="size" value="L" />
                            <label for="size-l">L</label>
                            <input type="checkbox" id="size-xl" name="size" value="XL" />
                            <label for="size-xl">XL</label>
                            <input type="checkbox" id="size-xxl" name="size" value="XXL" />
                            <label for="size-xxl">XXL</label>
                        </div>
                        <input
                            type="text"
                            name="image1"
                            placeholder="Image 1"
                            onChange={(e) => { setImg1(e.target.value) }}
                        ></input>
                        <input
                            type="text"
                            name="image2"
                            placeholder="Image 2"
                            onChange={(e) => { setImg2(e.target.value) }}
                        ></input>
                        <button type="submit">SAVE</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}