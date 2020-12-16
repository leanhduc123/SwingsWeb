import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const TransactionItem = ({item}) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            await Axios
                .get("http://localhost:5000/" + item.product)
                .then((res) => {
                    setProduct(res.data.message)
                    console.log(res.data.message)
                })
                .catch((err) => { console.log(err) })
        }
        fetchData()
    }, [])

    if (product === null) {
        return <tr></tr>
    }
    return (
        <tr>
            <td className="">
                <Link to={"/" + item.product} className="transactionId">
                    <img src={Object.keys(product.image[0]).map((key) => product.image[0][key]).join("")} />
                </Link>
            </td>
            <td className="text-left">
                <Link to={"/" + item.product} className="transactionId">
                    <span>{product.name}</span>
                </Link>
                <span>{item.size}</span>
            </td>
            <td className="text-center">
                <span>{item.product.substr(0,9) + "..."}</span>
            </td>
            <td className="text-right">
                <span>{item.price}</span>
            </td>
            <td className="text-center">
                <span>{item.quantity}</span>
            </td>
            <td className="text-right">
                <span>{(item.quantity*item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '₫'}</span>
            </td>
        </tr>
    )
}
