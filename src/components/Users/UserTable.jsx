import { useState } from "react";
import { Search,Edit,Trash2 } from "lucide-react";
const USER_DATA = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

export default function UserTable(){
    const [products] = useState(USER_DATA);
        const [editProduct, seteditProduct] = useState(null);
        const [searchTerm, setSearchTerm] = useState("");
        const [filteredProducts, setFilteredProducts] = useState(USER_DATA);
        const handleEdit = (product) => {
            // alert("edit")
            seteditProduct(product)
        }
        const handleDelete = (id) => {
            // alert(id)
            const updateProducts = products.filter((product) => product.id !== id);
            setFilteredProducts(updateProducts);
    
        }
        const handleSearch = (e) =>{
            const term = e.target.value.toLowerCase();
            setSearchTerm(term);
            const searchResults =products.filter((product) =>
                product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
            setFilteredProducts(searchResults);
            // setProducts(searchResults);
        }
    return(
        <div className={`${editProduct ? "overflow-x-auto" : "overflow-x-auto"}  bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-pink-50`}>
            <div className="w-full flex flex-col xs:flex-row justify-between p-2 sticky top-0 left-0 right-0  ">
                <h3 className="text-white">User table</h3>
                <div className="border-black bg-slate-500 w-full xs:w-auto">
                    <label className="flex">
                        <button 
                        className="px-1"
                        // onClick={handleSearch}
                        >
                            <Search color="black" size={16}/>
                        </button>
                        <input
                         className="text-black outline-none bg-slate-500 placeholder-cyan-50 w-full sm:w-[130px] md:w-[200px] lg:w-[300px]"
                         placeholder="Name,Role"
                         value={searchTerm}
                         onChange={(e) => handleSearch(e)}
                        ></input>
                    </label>

                </div>
            </div>
            <div className="max-w-[206px] ">
                <table className="min-w-[862px] text-center ">
                    <thead className="">
                        <tr className="text-lime-600 mx-auto">
                            <th className="w-1/5">
                                NAME
                            </th>
                            <th className="w-1/5">
                                EMAIL
                            </th>
                            <th className="w-1/5">
                                ROLE
                            </th>
                            <th className="w-1/5">
                                STATUS
                            </th>
                            <th className="w-1/5">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 text-center text-white">
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className={`${product.id % 2 === 0 ? "bg-neutral-600" : "bg-slate-400"}`}>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.role}</td>
                                <td>{product.status}</td>
                                <td className="flex justify-center space-x-6 my-2">
                                    <button onClick={() => handleEdit(product)}>
                                        <Edit size={16} />
                                    </button>
                                    <button onClick={() => handleDelete(product.id)}>
                                        <Trash2 size={16} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editProduct &&
                <div className="text-white overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
                    <div className="bg-slate-500 p-6 rounded shadow-xl w-[400px]">
                        <div className="">
                            <h3>
                                EDIT FORM
                            </h3>

                        </div>

                        <form className=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updated = products.map((product) =>
                                    product.id === editProduct.id ? editProduct : product)
                                setFilteredProducts(updated)
                                seteditProduct(null)
                            }}>
                            <label className="block">
                                User Name :
                                <input
                                    type="text"
                                    value={editProduct.name}
                                    onChange={(e) => seteditProduct({ ...editProduct, name: e.target.value })}
                                    placeholder="Name"
                                    className="text-black"
                                />
                            </label>
                            <label className="block">
                                User Email:
                                <input
                                    type="text"
                                    value={editProduct.email}
                                    onChange={(e) => seteditProduct({ ...editProduct, email: e.target.value })}
                                    className="text-black"

                                />
                            </label>
                            <label className="block">
                                User Role :
                                <input
                                    type="text"
                                    value={editProduct.role}
                                    onChange={(e) => seteditProduct({ ...editProduct, role: e.target.value })}
                                    className="text-black"

                                />
                            </label>
                            <label className="block">
                                User Status :
                                <input
                                    type="text"
                                    value={editProduct.status}
                                    onChange={(e) => seteditProduct({ ...editProduct, status: e.target.value })}
                                    className="text-black"

                                />
                            </label>
                            <div className="flex gap-4 mx-auto justify-center">
                                <button type="submit">SAVE</button>
                                <button
                                    type="button"
                                    onClick={() => seteditProduct(null)}
                                >CANCEL</button>
                            </div>


                        </form>
                    </div>
                </div>
            }
        </div>
    )
}