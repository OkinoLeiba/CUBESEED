import {useState} from "react"
// import Select from 'react-select'
import Image from "next/image"
import Arrow_Back_IOS from "@cs/src/assets/icons/home-arrow-back-ios.svg"
import Product_Search_Icon from "@cs/src/assets/icons/product-search-icon.svg"
import "./searchbar.css"




// const DropdownMenu = (props) => {

//     return (
//     <div className="dropdown_menu_item_container">
//         <ul>
//         <select{props.options.value[0]} onClick={handleChange}></select>
//         </ul>
//     </div>
//     )
// }


// const DropdownMenu = ({ label, value, option, handleChange }) => {

//     return (
//       <label htmlFor="category_dropdown">
//         {label}
//         <select value={value} name="category_dropdown" id="category_dropdown" form="searchbar_form" onChange={handleChange}>
//           {option.map((option) => (
//             <options value={option.value[0]}>{option.value[0]}</options>
//           ))}
//         </select>
//       </label>
//     )
// }

const DropdownMenu = ({label, value, option, classname, onClick}) => {

    return (
        <ul className={classname}>
            {option.map((option, index) => (
                <li key={index}>
                    <button>{option.label}</button>
                </li>
            ))}
        </ul>
    )
}




// const DropdownSubMenu = (props) => {

//     return (
//     <div className="dropdown_menu_item_container">
//         <select{props.options.value} onClick={handleChange}></select>
//     </div>
//     )
// }

// const DropdownMenu = ({ label, value, options, onChange }) => {

//     return (
//         <label>
//             {label}
//             <select value={value} onChange={onChange}>
//                 {options.map((options) => (
//                 <options value={options.value[0]}>{options.label}</options>
//                 ))}
//             </select>
//         </label>
//     )
// }


const SearchBar = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    // const handleClose = () => setShow(show);

    const option = [
        {label:"Vegetables", value:["Vegetables", "Root Vegetables"]}, // all the items will need to be updated, confirm line height spacing
        {label:"Fruits", value:["Fruits", "Root Vegetables"]},
        {label:"Herbs and Seasonings", value:["Herbs and Seasonings", "Root Vegetables"]},
        {label:"Cuts and Sprouts", value:["Cuts and Sprouts", "Beans"]},
        {label:"Dry Fruits", value:["Dry Fruits", "Leafy Vegetables"]},
        {label:"Beverages", value:["Beverages", "Potatoes, Onions, Tomato"]},
        {label:"Grains", value:["Grains", "Cabbage and Cauliflower"]},
        {label:"Egg, Meat, and Fish", value:["Egg, Meat, and Fish", "Gourd, Pumpkin"]}, // this will need more items
        {label:"View All", value:["View All", "Organic Vegetables"]}
    ]

    // should I create another array specific for submenu items
  

    const [value, setValue] = useState("");
    const [label, setLabel] = useState("");

    const handleChange = (event) => setValue(event.target.value);

    return (
        <div className="header_searchbar_container">
            <div className="searchbar_wrapper">
                <div className="dropdown_container">
                    <p>Category</p>
                     {/* image will trigger dropdown menu items, may need to be wrapped in div*/}
                    <button type="button" title="dropdown_button" ><Image className="dropdown_arrow_back_ios" src={Arrow_Back_IOS} alt="search bar dropdown arrow"  aria-controls="dropdown_menu" aria_expanded={show} onClick={handleClick} /><path></path></button>
                    <DropdownMenu classname="dropdown_menu" option={option} label={label} value={value} onClick={handleClick}  />
                    {/* <div className="dropdown_submenu"><DropdownMenuItems option={option} label={label} value={value} onClick={handleClick} /></div>  */}
                </div>    
                
                <form className="searchbar_form">
                    <input type="search" id="product_search" name="product_search" placeholder={`Enter Products to Search ${Product_Search_Icon}`} />
                    <Image id="product_search_image"  src={Product_Search_Icon} width={25.383} height={30} alt="icon to submit search"  />
                    {/* <input id="image" type="image" width="100" height="30" alt="Login" src={product_search_icon} /> */}
                </form>
                
            </div>
        </div>
    )
}


export default SearchBar



  {/* <p>Category</p> */}
                    {/* image will trigger dropdown menu items, may need to be wrapped in div*/}
                    {/* <Image className="dropdown_arrow_back_ios" src={Arrow_Back_IOS} alt="search bar dropdown arrow"  aria-controls="dropdown_menu" aria_expanded={show} onClick={handleClick} /> */}

                    {/* <div className="dropdown_menu">
                        <DropdownMenuItems options={options} label={label} value={value} onChange={handleChange} />
                    </div>
                    <div className="dropdown_submenu">
                        <DropdownMenuItems options={options} label={label} value={value} onChange={handleChange} />
                    </div> */}


//  return (

//    <div>

//      <select>

//        <options value="fruit">Fruit</options>

//        <options value="vegetable">Vegetable</options>

//        <options value="meat">Meat</options>

//      </select>

//    </div>

//  );







//  return (

//    <div>

//      <label>

//        What do we eat?

//        <select>

//          <options value="fruit">Fruit</options>

//          <options value="vegetable">Vegetable</options>

//          <options value="meat">Meat</options>

//        </select>

//      </label>

//    </div>

//  )







//  const [value, setValue] = React.useState('fruit');

//  const handleChange = (event) => {

//    setValue(event.target.value);

//  };

//  return (

//    <div>

//      <label>

//        What do we eat?

//        <select value={value} onChange={handleChange}>

//          <options value="fruit">Fruit</options>

//          <options value="vegetable">Vegetable</options>

//          <options value="meat">Meat</options>

//        </select>

//      </label>

//      <p>We eat {value}!</p>

//    </div>

//  );







//  const options= [

//    { label: 'Fruit', value: 'fruit' },

//    { label: 'Vegetable', value: 'vegetable' },

//    { label: 'Meat', value: 'meat' },

//  ];

//  const [value, setValue] = React.useState('fruit');

//  const handleChange = (event) => {

//    setValue(event.target.value);

//  };

//  return (

//    <div>

//      <Dropdown

//        label="What do we eat?"

//        options={options}

//        value={value}

//        onChange={handleChange}

//      />

//      <p>We eat {value}!</p>

//    </div>

//  );

// };

// const Dropdown = ({ label, value, options, onChange }) => {

//  return (

//    <label>

//      {label}

//      <select value={value} onChange={onChange}>

//        {option.map((option) => (

//          <options value={option.value}>{option.label}</options>

//        ))}

//      </select>

//    </label>

//  );







//  const [food, setFood] = React.useState('fruit');

//  const [drink, setDrink] = React.useState('water');

//  const handleFoodChange = (event) => {

//    setFood(event.target.value);

//  };

//  const handleDrinkChange = (event) => {

//    setDrink(event.target.value);

//  };

//  return (

//    <div>

//      <Dropdown

//        label="What do we eat?"

//        options={[

//          { label: 'Fruit', value: 'fruit' },

//          { label: 'Vegetable', value: 'vegetable' },

//          { label: 'Meat', value: 'meat' },

//        ]}

//        value={food}

//        onChange={handleFoodChange}

//      />

//      <Dropdown

//        label="What do we drink?"

//        option={[

//          { label: 'Water', value: 'water' },

//          { label: 'Beer', value: 'beer' },

//          { label: 'Wine', value: 'wine' },

//        ]}

//        value={drink}

//        onChange={handleDrinkChange}

//      />

//      <p>We eat {food}!</p>

//      <p>We drink {drink}!</p>

//    </div>

//  );

// };

