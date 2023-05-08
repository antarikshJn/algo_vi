import '../styles/header.css';
import { useState } from 'react';
import logo from '../algo.png';

import Select from 'react-select';

const Header = (props)=>{
    const [algo,setAlgo] = useState(null);

    const options=[
        {value:1,label:"  Merge Sort  "},
        {value:2,label:"Insertion Sort"},
        {value:3,label:"  Shell Sort  "},
        {value:4,label:"  Quick Sort  "},
        {value:1,label:"  Bubble Sort "},
    ]

    const startSorting = ()=>{
        if(algo){
            switch(algo.value){
                case 1:props.mergeSort();break;
                case 2:props.insertionSort();break;
                case 3:props.shellSort();break;
                case 4:props.quickSort();break;
                case 4:props.bubbleSort();break;
                default:window.alert("select a sorting algorith");
            }
        }
        else{
            window.alert("select a sorting algorith")
        }
    }

    return(
        <>
            <div className="header-container">

                <div className="header-left">
                    <img src={logo} style={{width:"2.5em",height:"2em"}}></img>
                    <div>Array Sorting <br></br>Algorithm Visualiser</div>
                </div>
                <div className="header-right">
                    
                    <div className="header-control">
                        <div onClick={()=>props.createData()}> New Data </div>
                        <div onClick={()=>props.createInvertedData()}> New Data(Reverse Sorted) </div>
                        <div onClick ={()=>startSorting()}>Start</div>
                    </div>
                    
                    <Select 
                        options={options} 
                        onChange={setAlgo} 
                        placeholder="Select an Algorithm"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            colors: {
                            ...theme.colors,
                              text: '#fff',
                              primary: '#1ce1ac',
                              primary25:"#1ce1ac55"
                            },
                          })}    
                    />
                </div>
                
            </div>
        </>
    );
}

export default Header;