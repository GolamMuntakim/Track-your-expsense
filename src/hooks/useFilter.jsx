import { useState } from "react";

const useFilter = (data, callback) => {
    const [query, setQuery] = useState('')
    const filteredData = data.filter((el)=> el.category.toLowerCase().includes(query))
     return [filteredData, setQuery]
};

export default useFilter;