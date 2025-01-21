import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({query}: {query?: string}) => {

   
    return ( 
        <Form action="/" scroll={false} className="search-form">
            <input name="query"
                   defaultValue={query}
                   className="search-input"
                   placeholder="Search Startup" />
             <div className="flex gap-2">
                 {query && <SearchFormReset/>}
             </div>     

             <button type="submit" className="search-btn text-white"><Search/></button> 
        </Form>
     );
}
 
export default SearchForm;