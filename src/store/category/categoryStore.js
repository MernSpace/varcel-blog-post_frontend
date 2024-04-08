import {create} from 'zustand';
import axios  from "axios";


const categoryStore = create((set)=>({
    categoryFormData:{name:""},
    categoryFormOnChange:(name,value)=>{
        set((state)=>({
            categoryFormData:{
                ...state.categoryFormData,
                [name]:value
            }
        }))
    },

    createCategoryRequest:async(postBody)=>{
        let res = await axios.post('http://localhost:5050/api/v1/create-category',postBody);
        return res.data['status'] ==='success'
    },
    categoryListRequest:async()=>{
        let res = await axios.get("http://localhost:5050/api/v1/list-category/:pageNo/:perPage/:searchKeyword");
        return res.data['status'] === 'success'
    },
    categoryUpdateRequest:async(categoryID, postBody)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/update-category/${categoryID}`,postBody);
        return res.data['status'] === 'success'
    },
    categoryDeteleRequest:async(categoryID)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/delete-category/${categoryID}`);
        return res.data['status']==='success'
    },
    categoryDetailRequest:async(categoryID)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/category-detail/${categoryID}`);
        if(res.data['data'].length>0){
            set({categoryFormData:res.data['data'][0]})
        }else{

        }
    },
    totalCategoryRequest:async()=>{
        let res = await axios.get('http://localhost:5050/api/v1/total-category');
        return res.data['status'] === 'success'
    }

}))


export default categoryStore;