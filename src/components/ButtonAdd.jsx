export const ButtonAdd = ({ products, product, setProducts }) => {

    const onClick = (product) => {

        if (!products.filter(x => x.id == product.id).length > 0) {
            setProducts([...products, product]);
        } else {
            return
        }
    }

    return (
        <button type="submit" onClick={() => onClick(product)}>Add to cart</button>
    )
}
