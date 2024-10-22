import { getFirestore, collection, getDocs } from "firebase/firestore";

const getProducts = async () => {
    const db = getFirestore(); 
    const productsCollection = collection(db, "products"); 
    const productsSnapshot = await getDocs(productsCollection); 
    const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(), 
    }));

    return productsList; 
};

export default getProducts;
