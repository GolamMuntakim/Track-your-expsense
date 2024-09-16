
import { useLocalStorage } from "./useLocalStorage";

const useFilter = (dataList, callback) => {
    const [query, setQuery] = useLocalStorage('query','')
    console.log(callback)
    const filteredData = dataList.filter((data)=> callback(data).toLowerCase().includes(query))
     return [filteredData, setQuery]
};

export default useFilter;