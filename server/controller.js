module.exports = {
    getInv: (req,res,next) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).send(products);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    createProd: (req,res,next) => {
        const db = req.app.get('db');
        const {product_name, product_price, image_url} = req.body;
        db.create_product([product_name, product_price, image_url]).then(() => {
            res.sendStatus(200);
        }).catch((err) => {res.status(500).send(console.log(err))})
    },
    deleteProd: (req,res,next) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        db.delete_product(product_id).then(() => {
            res.sendStatus(200);
        }).catch((err) => {res.status(500).send(console.log(err))})
    }
}